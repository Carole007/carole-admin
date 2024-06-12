const { execSync } = require("child_process");
const { readFileSync, writeFileSync, copyFileSync, existsSync, rmSync } = require("fs");
const { join } = require("path");
const _ = require("lodash")
function toPascalCase(str = "") {
  return str[0].toUpperCase() + _.camelCase(str).slice(1)
}
const prismaPath = join(__dirname, "../../prisma/introspected.prisma")
/** 生成prisma的model */
function generatePrismaModel(isChangeOriginFile = true) {

  try {
    //执行从数据库生成model
    if (existsSync(prismaPath)) {
      throw new Error(prismaPath + "文件已存在！")
    }
    execSync("npx prisma db pull")
    if (!existsSync(prismaPath)) {
      execSync("npx prisma generate")
      return null
    }
    //生成的文件内容
    let content = readFileSync(prismaPath).toString()
    if (!content) return null
    //去掉注释
    content = content.replaceAll(/\/\/\/.*?\n/g, "")

    //转换为驼峰并加上字段和表名map映射关系
    content = content.replace(/model\s([a-zA-Z-_]+)\s\{([^}]+)\}/g, (m, p1, p2) => {
      let r = `model ${toPascalCase(p1)}  {`
      r += p2.replace(/^\s*?([a-zA-Z-_]+)[^\n]+/gm, (m1, z1) => {
        return m1.replace(z1, _.camelCase(z1)) + `  @map("${z1}")`
      }).replace(/\[([^\]]+)\]/g, (m, p1, p2) => {
        return "[" + p1.split(",").map(v => _.camelCase(v.trim())).join(",") + "]"
      })
      r += `\n  @@map("${p1}")\n}`
      return r
    })
    writeFileSync(prismaPath, content)
    execSync("npx prisma generate")
  } catch (error) {
    console.log("prisma代码生成失败：", error)
    return null
  }
}

function updatePrismaModel() {
  execSync("npx prisma db pull")
  execSync("npx prisma generate")
}


function main() {
  let mode = process.argv.slice(2)[0] || "-generate"
  if (mode === "-update") {
    console.log("更新中...")
    updatePrismaModel()
    console.log("更新完毕！")
  } else if (mode === "-generate") {
    console.log("生成中...")
    generatePrismaModel()
    console.log("生成完毕！")
  }
  setTimeout(() => {
    process.exit(0)
  }, 500)
}

main()