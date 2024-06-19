import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '@/common/service/prisma/prisma.service';
import { Prisma } from '@prismaClient';
import { queryGenTableDto } from '@/admin/gen/dto/queryGenTableDto';
import { isNotEmpty } from 'class-validator';
import { queryDataBaseDto } from '@/admin/gen/dto/queryDatabaseDto';
import { formatDate, nowDate, nowDateTime, toPascalCase } from '@/common/utils';
import { camelCase, kebabCase, toLower, upperFirst } from 'lodash';
import { GenConstants } from '@/common/constant/GenConstants';
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { Config } from '@/config';
import * as Velocity from 'velocityjs';
import * as archiver from "archiver"
import { Response } from 'express';
@Injectable()
export class GenService {
  constructor(private prisma: PrismaService) { }

  //查询生成表数据
  async listTable(q: queryGenTableDto) {
    let queryCondition: Prisma.GenTableWhereInput = {}
    if (isNotEmpty(q.tableName)) {
      queryCondition.tableName = {
        contains: q.tableName
      }
    }
    if (isNotEmpty(q.tableComment)) {
      queryCondition.tableComment = {
        contains: q.tableComment
      }
    }
    if (isNotEmpty(q.params.beginTime) && isNotEmpty(q.params.endTime)) {
      queryCondition.createTime = {
        gte: q.params.beginTime,
        lte: q.params.endTime
      }
    }
    return {
      rows: await this.prisma.genTable.findMany({
        skip: (q.pageNum - 1) * q.pageSize,
        take: q.pageSize,
        where: queryCondition,
        orderBy: {
          updateTime: "desc"
        }
      }),
      total: await this.prisma.genTable.count({
        where: queryCondition
      })
    }
  }
  //查询db数据库列表
  async listDbTable(q: queryDataBaseDto) {
    let params = []
    let sql = `
    select table_name as tableName, table_comment as tableComment, create_time as createTime, update_time as updateTime from information_schema.tables
    where table_schema = (select database())
    and table_name NOT LIKE 'qrtz_%' and table_name NOT LIKE 'gen_%'
    and table_name NOT IN (select table_name from gen_table)`
    let sqlCount = `
    select count(*) as total from information_schema.tables
    where table_schema = (select database())
    and table_name NOT LIKE 'qrtz_%' and table_name NOT LIKE 'gen_%'
    and table_name NOT IN (select table_name from gen_table)
    `
    if (isNotEmpty(q.tableName)) {
      sql += ` and table_name like concat("%", ?,"%") `
      sqlCount += ` and table_name like concat("%", ?,"%") `
      params.push(q.tableName)
    }
    if (isNotEmpty(q.tableComment)) {
      sql += ` and table_comment like concat("%", ?,"%") `
      sqlCount += ` and table_comment like concat("%", ?,"%") `
      params.push(q.tableComment)
    }
    sql += `
      ORDER BY create_time desc, update_time desc
      limit ${(q.pageNum - 1) * q.pageSize},${q.pageSize}
      	`
    return {
      rows: await this.prisma.$queryRawUnsafe<Table[]>(sql, ...params).then(res => (
        res.map(v => (
          {
            ...v,
            createTime: formatDate(v.createTime),
            updateTime: formatDate(v.updateTime),
          }
        ))
      )),
      total: Number((await this.prisma.$queryRawUnsafe(sqlCount, ...params))[0]?.total)
    }
  }


  //修改代码生成信息
  updateGenTable(info: any) {
    if (!info) throw new BadRequestException("请传入数据！")
    if (info?.params?.parentMenuId) {
      info.options = JSON.stringify({ parentMenuId: info?.params?.parentMenuId })
    }
    let columns = info.columns?.map(v => {
      delete v.pk
      delete v.increment
      delete v.required
      delete v.insert
      delete v.edit
      delete v.list
      delete v.query
      v.updateTime = nowDate()
      v.updateBy = "admin"
      return v
    })
    delete info.dicts
    delete info.columns
    delete info.tableColumns
    delete info.columnsKey
    delete info.parentMenuId
    delete info.BusinessName
    delete info.pkName
    delete info.UpperPkName
    delete info.pkColumn
    delete info.UpperPkName
    delete info.params


    return this.prisma.$transaction(async (prisma) => {
      await prisma.genTable.update({
        where: {
          tableId: info.tableId
        },
        data: info
      })
      for (let column of columns) {
        await prisma.genTableColumn.update({
          where: {
            columnId: column.columnId
          },
          data: column
        })
      }
    })
  }
  //导入表
  async importTable(tableNames: string[]) {
    if (!tableNames?.length) return null
    return this.prisma.$transaction(async (prisma) => {
      //获取需要插入的表基本信息
      let tableList: Table[] = await this.selectDbTableListByNames(tableNames)
      for (let table of tableList) {
        let tableName = table.tableName;
        //初始化table表信息，并插入数据库
        let tableInfo = {
          ...table,
          className: Config.gen.autoRemovePre ? toPascalCase(tableName.replace(new RegExp(Config.gen.tablePrefix.join("|")), "")) : toPascalCase(tableName),//实体类名称
          packageName: Config.gen.packageName,//生成模块路径
          moduleName: Config.gen.moduleName,//子系统名，模块下的目录
          businessName: tableName.slice(tableName.lastIndexOf("_") + 1),//生成业务名
          tableComment: table.tableComment?.trim() || table.tableName,
          functionName: table.tableComment?.trim() || table.tableName,//生成功能名
          functionAuthor: Config.gen.author,//作者
          tplWebType: "element-plus",
          tplCategory: "crud",
          genType: "0",
          genPath: "/",
          createBy: "admin",
          updateBy: "admin",
          createTime: nowDateTime(),
          updateTime: nowDateTime()
        }

        tableInfo = await prisma.genTable.create({
          data: tableInfo
        })
        //获取表的列信息，初始化并插入数据库
        let tableColumn: any = await this.getTableColumnInfo(tableName)
        for (let column of tableColumn) {
          this.initTableColumn(column, tableInfo);
          column.sort = Number(column.sort)
          await prisma.genTableColumn.create({ data: column })
        }
      }
    })


  }

  //删除表数据
  async delTable(ids: number[]) {
    return this.prisma.$transaction(async (prisma) => {
      //删除tableColumn表信息
      await prisma.genTableColumn.deleteMany({
        where: {
          tableId: {
            in: ids
          }
        }
      })
      //删除table表信息
      await prisma.genTable.deleteMany({
        where: {
          tableId: {
            in: ids
          }
        }
      })

      return true
    })

  }

  //生成代码压缩包
  async genCode(tableNames: string[], res: Response) {
    try {
      console.log("代码生成中...", tableNames.join(","))
      if (existsSync(join(__dirname, "temp"))) {
        try {
          rmSync(join(__dirname, "temp"), { recursive: true });
        } catch (e) { }
      }
      for (let tableName of tableNames) {
        let info = await this.getTableInfoByTableName(tableName)
        info.columns.forEach(v => {
          v.columnComment = v.columnComment || v.columnName
        });
        let data = {
          ...info,
          modelName: camelCase(info.tableName),
          modelName1: toPascalCase(info.tableName),
          filename: kebabCase(info.tableName),
          entityName: camelCase(info.className),
          columnNames: JSON.stringify(info.columns?.map(v => v.columnComment || v.columnName) || []),
          hasBaseDomain: info.columnsKey.includes("create_time") && info.columnsKey.includes("update_time") && info.columnsKey.includes("create_by") && info.columnsKey.includes("update_by")
        }
        let servicePath = join(__dirname, `temp/node/${data.packageName}/${data.moduleName}/${data.businessName}/service/${data.filename}.service.ts`)
        let controllerPath = join(__dirname, `temp/node/${data.packageName}/${data.moduleName}/${data.businessName}/${data.filename}.controller.ts`)
        let dtoPath = join(__dirname, `temp/node/${data.packageName}/${data.moduleName}/${data.businessName}/dto/index.ts`)
        let vuePath = join(__dirname, `temp/vue/views/${data.moduleName}/${data.businessName}/index.vue`)
        let apiPath = join(__dirname, `temp/vue/api/${data.moduleName}/${data.businessName}.js`)
        let sqlPath = join(__dirname, `temp/${data.businessName}.sql`)
        let vueTemplateStr = readFileSync(join(__dirname, "./gen-template/vue/index.vue.vm")).toString()
        let jsTemplateStr = readFileSync(join(__dirname, "./gen-template/js/api.js.vm")).toString()
        let sqlTemplateStr = readFileSync(join(__dirname, "./gen-template/sql/sql.vm")).toString()
        let serviceTemplateStr = readFileSync(join(__dirname, "./gen-template/node/service.ts.vm")).toString()
        let dtoTemplateStr = readFileSync(join(__dirname, "./gen-template/node/dto.ts.vm")).toString()
        let controllerTemplateStr = readFileSync(join(__dirname, "./gen-template/node/controller.ts.vm")).toString()
        let vueData = Velocity.render(vueTemplateStr, data).replace(/(\n\s*\n)+/g, '\n');
        let apiData = Velocity.render(jsTemplateStr, data).replace(/(\n\s*\n)+/g, '\n');
        let sqlData = Velocity.render(sqlTemplateStr, data).replace(/(\n\s*\n)+/g, '\n');
        let serviceData = Velocity.render(serviceTemplateStr, data).replace(/(\n\s*\n)+/g, '\n');
        let dtoData = Velocity.render(dtoTemplateStr, data).replace(/(\n\s*\n)+/g, '\n');
        let controllerData = Velocity.render(controllerTemplateStr, data).replace(/(\n\s*\n)+/g, '\n');
        writeFile(servicePath, serviceData)
        writeFile(controllerPath, controllerData)
        writeFile(dtoPath, dtoData)
        writeFile(vuePath, vueData)
        writeFile(apiPath, apiData)
        writeFile(sqlPath, sqlData)
      }
      console.log("代码生成完毕！")
      res.setHeader("content-type", "application/octet-stream;charset=UTF-8")
      res.setHeader("content-disposition", "attachment;filename=\"carole.zip\"")
      res.setHeader('Access-Control-Expose-Headers', 'Content-Disposition')
      res.setHeader("X-Content-Type-Options", "nosniff")
      res.setHeader("Transfer-Encoding", "chunked")
      // 创建一个archiver实例，指定压缩包类型为zip
      const archive = archiver('zip', {
        zlib: { level: 9 } // 设置压缩级别，最高级别为9
      });
      const output = res;
      // 将输出流与archiver实例进行关联
      archive.pipe(output);
      // 添加要压缩的文件或文件夹
      archive.directory(join(__dirname, "temp"), false);
      // 压缩过程中出错时触发的回调函数
      archive.on('error', function (err) {
        console.log(err)
        res.end();
      });
      output.on("close", function () {
        res.end();
      })
      // 完成压缩
      archive.finalize();
    } catch (error) {
      console.log(error)
      res.end();
    }
  }

  //预览生成代码
  async previewTable(tableId: number) {
    let info = await this.getTableInfoById(tableId)
    info.columns.forEach(v => {
      v.columnComment = v.columnComment || v.columnName
    })
    let data = {
      ...info,
      modelName: camelCase(info.tableName),
      modelName1: toPascalCase(info.tableName),
      filename: kebabCase(info.tableName),
      entityName: camelCase(info.className),
      columnNames: JSON.stringify(info.columns?.map(v => v.columnComment || v.columnName) || []),
      hasBaseDomain: info.columnsKey.includes("create_time") && info.columnsKey.includes("update_time") && info.columnsKey.includes("create_by") && info.columnsKey.includes("update_by")
    }
    let vueTemplateStr = readFileSync(join(__dirname, "./gen-template/vue/index.vue.vm")).toString()
    let jsTemplateStr = readFileSync(join(__dirname, "./gen-template/js/api.js.vm")).toString()
    let sqlTemplateStr = readFileSync(join(__dirname, "./gen-template/sql/sql.vm")).toString()
    let serviceTemplateStr = readFileSync(join(__dirname, "./gen-template/node/service.ts.vm")).toString()
    let dtoTemplateStr = readFileSync(join(__dirname, "./gen-template/node/dto.ts.vm")).toString()
    let controllerTemplateStr = readFileSync(join(__dirname, "./gen-template/node/controller.ts.vm")).toString()
    let vueData = Velocity.render(vueTemplateStr, data).replace(/(\n\s*\n)+/g, '\n');
    let apiData = Velocity.render(jsTemplateStr, data).replace(/(\n\s*\n)+/g, '\n');
    let sqlData = Velocity.render(sqlTemplateStr, data).replace(/(\n\s*\n)+/g, '\n');
    let serviceData = Velocity.render(serviceTemplateStr, data).replace(/(\n\s*\n)+/g, '\n');
    let dtoData = Velocity.render(dtoTemplateStr, data).replace(/(\n\s*\n)+/g, '\n');
    let controllerData = Velocity.render(controllerTemplateStr, data).replace(/(\n\s*\n)+/g, '\n');
    return {
      "gen-template/node/service.ts.vm": serviceData,
      "gen-template/node/controller.ts.vm": controllerData,
      "gen-template/node/dto.ts.vm": dtoData,
      "gen-template/vue/index.vue.vm": vueData,
      "gen-template/js/api.js.vm": apiData,
      "gen-template/sql/sql.vm": sqlData,
    };
  }
  //同步数据库,  我们导入了需要生成代码的数据表，但是我们更改了数据库的结构（比如删除了一些字段，和添加了一些字段），同步更新表数据
  async synchDb(tableName: string) {

    return this.prisma.$transaction(async (prisma) => {
      let table = await this.getTableInfoByTableName(tableName)
      if (!table) throw new BadRequestException("同步数据失败，原表结构不存在！")
      //已在数据库中的表列信息
      let tableColumns = table.tableColumns
      //更改后的数据库表的列信息
      let columns: any = await this.getTableColumnInfo(tableName)
      if (!columns || !columns?.length) throw new BadRequestException("同步数据失败，原表结构不存在！")
      //存储之前就存在已生成的列信息
      let tableColumnMap = {};
      for (let v of tableColumns) {
        tableColumnMap[v.columnName] = v;
      }
      //更新或插入列
      for (let column of columns) {
        //初始化column的值
        this.initTableColumn(column, table)
        //如果之前存储过，更新
        if (tableColumnMap[column.columnName]) {
          //之前存储的列
          let prevColumn = tableColumnMap[column.columnName];
          column.columnId = prevColumn.columnId;
          column.sort = Number(column)
          if (column.isList === "1") {
            // 如果是列表，继续保留查询方式/字典类型选项
            column.dictType = prevColumn.dictType;
            column.queryType = prevColumn.queryType;
          }
          await prisma.genTableColumn.update({
            where: {
              columnId: column.columnId
            },
            data: column
          })
        }
        //插入
        else {
          column.sort = Number(column)
          await prisma.genTableColumn.create({
            data: column
          })
        }

      }
      //删除已经不存在表中数据
      if (tableColumns.length > 0) {
        let delColumns = tableColumns.filter(v => !columns.some(z => z.columnName === v.columnName)).map(v => v.columnId)
        if (delColumns.length > 0) {
          await prisma.genTableColumn.deleteMany({
            where: {
              columnId: {
                in: delColumns
              }
            }
          })
        }
      }
    })

  }


  //批量获取表的基本信息（包含注释）
  selectDbTableListByNames(names: string[]) {
    if (!names.length) return null
    return this.prisma.$queryRawUnsafe<Table[]>(`select table_name as tableName, table_comment as tableComment, create_time as createTime, update_time as updateTime from information_schema.tables
      where table_schema = (select database())
      and table_name NOT LIKE 'qrtz_%' and table_name NOT LIKE 'gen_%'
      and table_name NOT IN (select table_name from gen_table)
      and table_name IN (${"?,".repeat(names.length).slice(0, -1)})`, ...names)
  }
  //根据表名获取表的字段信息以及注释
  async getTableColumnInfo(tableName: string) {
    if (!tableName) return null
    return this.prisma.$queryRaw<ColumnInfo[]>`select column_name as columnName, (case when (is_nullable = 'no' && column_key != 'PRI')  
    then '1' else '0' end) as isRequired, (case when column_key = 'PRI' then '1' else '0' end) as isPk,
     ordinal_position as sort, column_comment as columnComment, (case when extra = 'auto_increment' then '1' else '0' end) 
    as isIncrement, column_type as columnType from information_schema.columns  
    where table_schema = (select database()) and table_name = ${tableName} order by ordinal_position`
  }
  //根据id查询表详细信息
  getTableInfoById(id: number) {
    return this.prisma.genTable.findFirst({
      where: {
        tableId: id
      },
      include: {
        tableColumns: true
      }
    }).then(tableInfo => {
      if (!tableInfo) return null
      let dicts: string[] = []
      let tableColumns = tableInfo?.tableColumns?.map(v => {
        if (v.dictType) {
          dicts.push(`'${v.dictType}'`)
        }
        return {
          ...v,
          pk: Boolean(+v.isPk),
          increment: Boolean(+v.isIncrement),
          required: Boolean(+v.isRequired),
          insert: Boolean(+v.isInsert),
          edit: Boolean(+v.isEdit),
          list: Boolean(+v.isList),
          query: Boolean(+v.isQuery),
        }
      })
      let pkColumn = tableColumns?.find((v: any) => Boolean(+v.isPk) && Boolean(+v.isIncrement)) || tableColumns[0]
      let data = {
        ...tableInfo,
        dicts:dicts.join(","),
        dictsNoSymbol: dicts.join(",").replace(/"|'/g, ""),
        columns: tableColumns,
        tableColumns,
        columnsKey: JSON.stringify(tableInfo?.tableColumns?.map(v => v.columnName)),
        parentMenuId: +JSON.parse(tableInfo.options || null)?.parentMenuId || 0,
        BusinessName: upperFirst(tableInfo.businessName),
        pkColumn,
        pkName: pkColumn.javaField,
        UpperPkName: upperFirst(pkColumn.javaField)
      }
      return data
    })
  }
  //根据表名查询表详细信息
  getTableInfoByTableName(tableName: string) {
    return this.prisma.genTable.findFirst({
      where: {
        tableName
      },
      include: {
        tableColumns: true
      }
    }).then(tableInfo => {
      if (!tableInfo) return null
      let dicts: string[] = []
      let tableColumns = tableInfo?.tableColumns?.map(v => {
        if (v.dictType) {
          dicts.push(`"${v.dictType}"`)
        }
        return {
          ...v,
          pk: Boolean(+v.isPk),
          increment: Boolean(+v.isIncrement),
          required: Boolean(+v.isRequired),
          insert: Boolean(+v.isInsert),
          edit: Boolean(+v.isEdit),
          list: Boolean(+v.isList),
          query: Boolean(+v.isQuery),
        }
      })
      let pkColumn = tableColumns?.find((v: any) => Boolean(+v.isPk) && Boolean(+v.isIncrement)) || tableColumns[0]
      let data = {
        ...tableInfo,
        dicts:dicts.join(","),
        dictsNoSymbol: dicts.join(",").replace(/"|'/g, ""),
        columns: tableColumns,
        tableColumns,
        columnsKey: JSON.stringify(tableInfo?.tableColumns?.map(v => v.columnName)),
        parentMenuId: +JSON.parse(tableInfo.options || null)?.parentMenuId || 0,
        BusinessName: upperFirst(tableInfo.businessName),
        pkColumn,
        pkName: pkColumn.javaField,
        UpperPkName: upperFirst(pkColumn.javaField)
      }
      return data
    })
  }

  //初始化表列的字段信息
  initTableColumn(column: any, table: any) {
    let columnName = column.columnName
    let dataType = column.columnType
    column.tableId = table.tableId
    column.javaField = camelCase(columnName)
    column.javaType = GenConstants.TYPE_STRING
    column.queryType = GenConstants.QUERY_EQ
    column.createBy = column.createBy || "admin"
    column.columnComment = column.columnComment || column.columnName
    column.createTime = column.createTime || nowDateTime()
    column.updateBy = "admin"
    column.updateTime = nowDateTime()
    if (arraysContains(GenConstants.COLUMNTYPE_TEXT, dataType)) {
      column.htmlType = GenConstants.HTML_TEXTAREA 
    } else if (arraysContains(GenConstants.COLUMNTYPE_STR, dataType)) { 
      let len = getColumnLength(dataType)
      column.htmlType = len >= 500  ? GenConstants.HTML_TEXTAREA : GenConstants.HTML_INPUT
    }
    else if (arraysContains(GenConstants.COLUMNTYPE_TIME, dataType)) {
      column.javaType = GenConstants.TYPE_DATE;
      column.htmlType = GenConstants.HTML_DATETIME;
    } else if (arraysContains(GenConstants.COLUMNTYPE_NUMBER, dataType)) {
      column.htmlType = GenConstants.HTML_INPUT;
      column.javaType = GenConstants.TYPE_NUMBER
    }

    // 插入字段（默认所有字段都需要插入）
    column.isInsert = GenConstants.REQUIRE;

    // 编辑字段
    if (!arraysContains(GenConstants.COLUMNNAME_NOT_EDIT, columnName) && column.isPk != 1) {
      column.isEdit = GenConstants.REQUIRE;
    }
    // 列表字段
    if (!arraysContains(GenConstants.COLUMNNAME_NOT_LIST, columnName) && column.isPk != 1) {
      column.isList = GenConstants.REQUIRE;
    }
    // 查询字段
    if (!arraysContains(GenConstants.COLUMNNAME_NOT_QUERY, columnName) && column.isPk != 1 && column.htmlType != GenConstants.HTML_TEXTAREA ) {
      column.isQuery = GenConstants.REQUIRE;
    }
    let lowerColumnName = toLower(columnName)
    // 查询字段类型
    if (lowerColumnName.includes("name")) {
      column.queryType = GenConstants.QUERY_LIKE;
    }
    // 状态字段设置单选框
    if (lowerColumnName.includes("status")) {
      column.htmlType = GenConstants.HTML_RADIO;
    }
    // 类型&性别字段设置下拉框
    else if (lowerColumnName.includes("type")
      || lowerColumnName.includes("sex")) {
      column.htmlType = GenConstants.HTML_SELECT;
    }
    //日期字段设置日期控件
    else if (lowerColumnName.includes("time") || lowerColumnName.includes("_date") || lowerColumnName.includes("Date")) {
      column.htmlType = GenConstants.HTML_DATETIME
      column.queryType = GenConstants.QUERY_BETWEEN
    }
    // 图片字段设置图片上传控件
    else if (lowerColumnName.includes("image")) {
      column.htmlType = (GenConstants.HTML_IMAGE_UPLOAD);
    }
    // 文件字段设置文件上传控件
    else if (lowerColumnName.includes("file")) {
      column.htmlType = (GenConstants.HTML_FILE_UPLOAD);
    }
    // 内容字段设置富文本控件
    else if (lowerColumnName.includes("content")) {
      column.htmlType = (GenConstants.HTML_EDITOR);
    }
  }

  /**@desc 运行任意sql */
  excute(sql: string) {
    let sqls = sql.split(";").filter(v => !!v.trim())
    return this.prisma.$transaction(async db => {
      let res = []
      for (let sql of sqls) {
        res.push(sql.includes("select") ? await db.$queryRawUnsafe(sql) : await db.$executeRawUnsafe(sql))
      }
      return res
    })
  }
}





/** 检查数据中是有某个值在str中包含 */
function arraysContains(arr = [], str = "") {
  return arr.some(v => v.includes(str) || str.includes(v))
}


/** 获取数据库varchar（）括号的长度 */
function getColumnLength(str = "") {
  if (str.includes("(")) {
    return +str.slice(str.indexOf("(") + 1, str.indexOf(")"))
  } else {
    return 0;
  }
}
/** 递归创建目录 */

function mkdir(dir) {
  try {
    if (!existsSync(dir)) {
      mkdirSync(dir, { recursive: true })
    }
  } catch (e) {
  }
}
/** 写入文件数据，并且同时创建目录 */
function writeFile(p, data) {
  mkdir(dirname(p))
  writeFileSync(p, data);
}
