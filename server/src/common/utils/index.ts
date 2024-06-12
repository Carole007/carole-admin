import * as fs from 'fs';
import * as dayjs1 from 'dayjs';
import * as utc from "dayjs/plugin/utc"
import * as timezone from "dayjs/plugin/timezone"
import "dayjs/locale/zh-cn"
import { Response } from 'express';
import { build } from 'node-xlsx';
import { camelCase } from 'lodash';
dayjs1.extend(utc)
dayjs1.extend(timezone)
dayjs1.locale("zh-cn")
// 设置时区为上海
dayjs1.tz.setDefault('Asia/Shanghai');
export const dayjs = dayjs1.tz
export const nowDate = () => dayjs().format("YYYY-MM-DD")
export const nowDateTime = () => dayjs().format("YYYY-MM-DD HH:mm:ss")
export const formatDate = (date: Date, format = "YYYY-MM-DD HH:mm:ss") => date && dayjs(date).format(format)
export const localDate = () => new Date(new Date().toLocaleString())
// 创建文件夹
export const createFolder = function (folder) {
  try {
    fs.accessSync(folder);
  } catch (e) {
    fs.mkdirSync(folder, { recursive: true });
  }
};

/**
 * @desc 执行具有并发限制的异步任务池。
 * @param  poolLimit - 并发限制，指定同时执行的最大异步任务数量。
 * @param  iterable - 包含异步任务的可迭代对象。
 * @param iteratorFn - 异步任务的迭代函数，接受一个参数并返回一个Promise。
 * @returns - 返回一个Promise，当所有异步任务完成时解析为一个包含所有结果的数组。
 */
export function asyncPool(poolLimit: number, iterable: any[], iteratorFn: Function): Promise<any[]> {
  let i = 0;
  const ret = [];
  const executing = new Set();
  const enqueue = function () {
    if (i === iterable.length) {
      return Promise.resolve();
    }
    const item = iterable[i++];
    const p = Promise.resolve().then(() => iteratorFn(item, iterable));
    ret.push(p);
    executing.add(p);
    const clean = () => executing.delete(p);
    p.then(clean).catch(clean);
    let r: any = Promise.resolve();
    if (executing.size >= poolLimit) {
      r = Promise.race(executing);
    }
    return r.then(() => enqueue());
  };
  return enqueue().then(() => Promise.all(ret));
}
/**@desc 数组树形化 */

export function tree(arr = [], id = "id", pid = "pid", rootValue = 0) {
  const result = [];   // 存放结果集
  const map = {};
  for (const item of arr) {
    map[item[id]] = {
      ...item,
      children: map[item[id]]?.children || []
    }
    if (item[pid] == rootValue) {
      result.push(map[item[id]]);
    } else {
      if (!map[item[pid]]) {
        map[item[pid]] = {
          children: [],
        }
      }
      map[item[pid]].children.push(map[item[id]])
    }
  }
  return result;
}

/**@desc 转换为camelCase并且首字母大写 */
export function toPascalCase(str) {
  return str[0].toUpperCase() + camelCase(str).slice(1)
}
/** @description 导出表为xlsx文件返回 */
export async function exportTable(data: any[][], res: Response) {
  const buffer = build([
    {
      name: 'sheet',
      data,
      options: {}
    },
  ]);
  res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
  res.setHeader('Content-Disposition', 'attachment;filename=sheet.xlsx');
  res.setHeader('Access-Control-Expose-Headers', 'Content-Disposition')
  res.setHeader("X-Content-Type-Options", "nosniff")
  // 将 Excel 文件的二进制流数据返回给客户端
  res.end(buffer, "binary");

}