//邮箱
export function isEmail(value:string) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)
}
//手机号
export function isPhone(value:string){
    return /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[01256789]))\d{8}$/.test(value)
}
//是否中文汉字
export function isChinese(value:string){
    return /^(?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])+$/.test(value)
}
//base64
export function isBase64(value:string){
    return /^\s*data:(?:[a-z]+\/[a-z0-9-+.]+(?:;[a-z-]+=[a-z0-9-]+)?)?(?:;base64)?,([a-z0-9!$&',()*+;=\-._~:@/?%\s]*?)\s*$/i.test(value)
}
//图片url
export function isImgUrl(value:string){
    return /^https?:\/\/(.+\/)+.+(\.(gif|png|jpg|jpeg|webp|svg|psd|bmp|tif))$/i.test(value)
}
//版本号
export function isVersion(value:string){
    return /^\d+(?:\.\d+){2}$/.test(value)
}
//UUID
export function isUUID(value:string){
    return /^[a-f\d]{4}(?:[a-f\d]{4}-){4}[a-f\d]{12}$/i.test(value)
}
//必须带端口号的网址(或ip)
export function isUrlAndPort(value:string){
    return /^((ht|f)tps?:\/\/)?[\w-]+(\.[\w-]+)+:\d{1,5}\/?$/.test(value)
}
//迅雷网址
export function isThunderx(value:string){
    return /^thunderx?:\/\/[a-zA-Z\d]+=$/.test(value)
}
//子网掩码
export function isSubnet(value:string){
    return /^(254|252|248|240|224|192|128)\.0\.0\.0|255\.(254|252|248|240|224|192|128|0)\.0\.0|255\.255\.(254|252|248|240|224|192|128|0)\.0|255\.255\.255\.(255|254|252|248|240|224|192|128|0)$/.test(value)
}
//window文件路径
export function isFilePath(value:string){
    return /^[a-zA-Z]:\\(?:\w+\\)*\w+\.\w+$/.test(value)
}
//window文件夹路径
export function isDirPath(value:string){
    return /^[a-zA-Z]:\\(?:\w+\\?)*$/.test(value)
}
//html注释
export function isHtmlAnnotation(value:string){
    return /<!--[\s\S]*?-->/g.test(value)
}
//md5 32位
export function isMd5(value:string){
    return /^[a-fA-F0-9]{32}$/.test(value)
}
//视频url
export function isVideoUrl(value:string){
    return /^https?:\/\/(.+\/)+.+(\.(swf|avi|flv|mpg|rm|mov|wav|asf|3gp|mkv|rmvb|mp4|m3u8))$/i.test(value)
}
//24小时制时间（HH:mm:ss）
export function isTime24(value:string){
    return /^(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(value)
}
//12小时制时间（HH:mm:ss）
export function isTime12(value:string){
    return /^(?:1[0-2]|0?[1-9]):[0-5]\d:[0-5]\d$/.test(value)
}
//数字/货币金额（支持负数、千分位分隔符）
export function isMoney(value:string){
    return /^-?\d{1,3}(,\d{3})*(\.\d{1,2})?$/.test(value)
}
//银行卡号（10到30位, 覆盖对公/私账户, 参考[微信支付]
export function isBankNumber(value:string){
    return /^[1-9]\d{9,29}$/.test(value)
}
//日期(严谨, 支持闰年判断)
export function isDate(value:string){
    return /^(([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})-(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)-(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8]))))|((([0-9]{2})(0[48]|[2468][048]|[13579][26])|((0[48]|[2468][048]|[3579][26])00))-02-29)$/.test(value)
}
//中国省
export function isProvince(value:string){
    return /^浙江|上海|北京|天津|重庆|黑龙江|吉林|辽宁|内蒙古|河北|新疆|甘肃|青海|陕西|宁夏|河南|山东|山西|安徽|湖北|湖南|江苏|四川|贵州|云南|广西|西藏|江西|广东|福建|台湾|海南|香港|澳门$/.test(value)
}
//身份证号, 支持1/2代(15位/18位数字
export function isIdentify(value:string){
    return /^\d{6}((((((19|20)\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|(((19|20)\d{2})(0[13578]|1[02])31)|((19|20)\d{2})02(0[1-9]|1\d|2[0-8])|((((19|20)([13579][26]|[2468][048]|0[48]))|(2000))0229))\d{3})|((((\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|((\d{2})(0[13578]|1[02])31)|((\d{2})02(0[1-9]|1\d|2[0-8]))|(([13579][26]|[2468][048]|0[048])0229))\d{2}))(\d|X|x)$/.test(value)
}
//帐号是否合法(字母开头，允许5-16字节，允许字母数字下划线组合
export function isAccount(value:string){
    return /^\w{5,15}$/.test(value)
}
//纯数字
export function isNumber(value:string){
    return /^\d+$/.test(value)
}
//html标签(宽松匹配)
export function isHtmlTag(value:string){
    return /<(\w+)[^>]*>(.*?<\/\1>)?/.test(value)
}
//qq号格式正确
export function isQQNumber(value:string){
    return /^[1-9][0-9]{4,10}$/.test(value)
}
//密码强度校验，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符 !@#$%^&*?
export function isPasswordHighs(value:string){
    return /^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*?])\S*$/.test(value)
}
//大写字母，小写字母，数字，特殊符号 `@#$%^&*`~()-+=` 中任意3项密码
export function isPassword(value:string){
    return /^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_!@#$%^&*`~()-+=]+$)(?![a-z0-9]+$)(?![a-z\W_!@#$%^&*`~()-+=]+$)(?![0-9\W_!@#$%^&*`~()-+=]+$)[a-zA-Z0-9\W_!@#$%^&*`~()-+=]/.test(value)
}
//ipV4[:端口]
export function isIpv4(value:string){
    return /^((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])(?::(?:[0-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5]))?$/.test(value)
}
//ip-v6[:端口]
export function isIpv6(value:string){
    return /(^(?:(?:(?:[0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$)|(^\[(?:(?:(?:[0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))\](?::(?:[0-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5]))?$)/i.test(value)
}
//16进制颜色
export function isHexColor(value:string){
    return /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3}|[a-fA-F0-9]{8}|[a-fA-F0-9]{4})$/.test(value)
}
//微信号(wx)，6至20位，以字母开头，字母，数字，减号，下划线
export function isWxAccount(value:string){
    return /^[a-zA-Z][-_a-zA-Z0-9]{5,19}$/.test(value)
}
//邮政编码(中国)
export function isPostalCode(value:string){
    return /^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}$/.test(value)
}
//mac地址
export function isMacAddr(value:string){
    return /^(([a-f0-9][0,2,4,6,8,a,c,e]:([a-f0-9]{2}:){4})|([a-f0-9][0,2,4,6,8,a,c,e]-([a-f0-9]{2}-){4}))[a-f0-9]{2}$/i.test(value)
}
//域名(非网址, 不包含协议)
export function isDomain(value:string){
    return /^([0-9a-zA-Z-]{1,}\.)+([a-zA-Z]{2,})$/.test(value)
}
//Null或者empty
export function isNullOrEmpty(value:string){
    return value === null || value === undefined || value === ""
}