import * as si from "systeminformation"
import * as os from "os"
import * as dayjs from "dayjs"
//获取cpu
async function getCpu(): Promise<void | {
  cpuNum: number,
  sys: string,
  used: string,
  free: string
}> {
  return si.currentLoad()
    .then(data => {
      return {
        cpuNum: data.cpus.length,
        sys: data.currentLoadSystem.toFixed(2),
        used: data.currentLoadUser.toFixed(2),
        free: data.currentLoadIdle.toFixed(2)
      }
    })
    .catch(error => {
      console.error('获取CPU使用率时出错:', error);
      return undefined
    });
}


//获取系统内存
async function getSysMemory() {
  const totalMemory = os.totalmem();
  const freeMemory = os.freemem();
  const usedMemory = totalMemory - freeMemory;
  return {
    total: formatMemory(totalMemory),
    used: formatMemory(usedMemory),
    free: formatMemory(freeMemory),
    usage: ((usedMemory / totalMemory) * 100).toFixed(2)
  }
}


//获取系统信息
async function getSystemInfo() {
  let info = await si.osInfo();
  let ip = await si.networkGatewayDefault()
  return {
    computerName: info.hostname,
    computerIp: ip,
    userDir: process.mainModule.path,
    osName: info.distro || info.platform,
    platform: info.platform,
    release: info.release,
    serial: info.serial,
    osArch: info.arch,
    nodeVersion: process.version,
    serverDate: new Date().toLocaleString()
  }
}

async function getDickInfo() {
  return (await si.fsSize()).map(v => ({
    dirName: v.fs,
    sysTypeName: v.type,
    typeName: v.mount,
    total: formatMemory(v.size) + " GB",
    used: formatMemory(v.used) + " GB",
    free: formatMemory(v.available) + " GB",
    usage: v.use,
  }))
}

//获取当前项目的信息
async function getProject() {
  let mem = process.memoryUsage()
  for (let k in mem) {
    mem[k] = formatMemory(mem[k], "MB")
  }
  let memTotal = mem.heapTotal
  // let memTotal = mem.rss + mem.heapTotal+mem.arrayBuffers
  return {
    total: +memTotal.toFixed(2),
    used: +mem.heapUsed.toFixed(2),//使用百分比
    free: +(memTotal - mem.heapUsed).toFixed(2),//剩余
    usage: (mem.heapUsed / memTotal * 100).toFixed(2), //剩余百分比
    home: process.execPath,
    version: process.version,
    startTime: dayjs(Date.now() - process.uptime() * 1000).format("YYYY-MM-DD HH:mm:ss"),
    runTime: formatTime(process.uptime()),
    runPath: process.mainModule.path,
    runFile: process.mainModule.filename,
    inputArgs: JSON.stringify(process.argv.slice(2)),
    name: process.release.name,
    pid: process.pid,
    ppid: process.ppid,
  }
}

//秒转换为 `天 小时 分钟`
function formatTime(seconds) {
  const days = Math.floor(seconds / (24 * 60 * 60));
  const hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((seconds % (60 * 60)) / 60);
  return `${days}天${hours}小时${minutes}分钟`;
}


//格式化内存单位GB
function formatMemory(memory, unit = "GB") {
  let type = {
    GB: 1024 * 1024 * 1024,
    MB: 1024 * 1024
  }
  return +((memory / type[unit]).toFixed(2))
}

//获取以上全部信息
async function getServerInfo() {
  let data = await Promise.all([
    getProject(),
    getSystemInfo(),
    getSysMemory(),
    getCpu(),
    getDickInfo()])
  return {
    cpu: data[3],
    mem: data[2],
    project: data[0],
    sys: data[1],
    sysFiles: data[4]
  }
}

export {
  getProject,
  getSystemInfo,
  getSysMemory,
  getCpu,
  getDickInfo,
  getServerInfo
}