import { Config } from "@/config";
import { createTransport, Transporter } from "nodemailer"
import * as assert from "assert"
import Mail from "nodemailer/lib/mailer";
import { isEmail } from "class-validator";
let transporter: Transporter;
if (Config.mail.enable) {
  transporter = createTransport(Config.mail.config)
  checkConnect()
}

// 测试发件
/* async function test() {
  await sendCode("2282169525@qq.com", "12323")
  console.log("发送成功")
}
test() */

/**
 * @desc 检查邮箱服务器是否能正常连接！
 */
function checkConnect() {
  return transporter.verify()
    .then(_ => console.log("邮箱服务器连接成功！"))
    .catch(error => console.log("邮箱服务器连接失败！", error));
}

/**
 * @description 发送邮件
 */
async function sendMail(options: Mail.Options & { to: string }) {
  return new Promise(async (resolve, reject) => {
    let t = setTimeout(() => { reject("邮件发送失败:超时！") }, Config.mail.timeout)
    assert(options.to.split(",").every(v => isEmail(v)), "邮箱格式不正确！")
    options = {
      subject: '我是一封神奇的邮箱！',
      from: Config.mail.config.auth.user,
      text: "测试！！！",
      // to: '',//发送到多个用户中间用,连接
      // text: 'test',//发送文本
      // html: '<h1>Hello,world!</h1>', //可以发送html
      ...options,
    }
    try {
      let res = await transporter.sendMail(options)
      return resolve("邮件发送成功~ ：" + res.accepted.toString());
    } catch (err) {
      console.log("邮件发送失败！", err)
      return reject("邮件发送失败！");
    } finally {
      clearTimeout(t)
    }
  })
}


/**
 * @desc 发送验证码模版
 */
async function sendCode(email: string, code: string | number) {
  let mail = {
    subject: '验证码',
    to: email,
    html: `
    <div style="
    width: 550px;
    height: auto;
    border-radius: 5px;
    margin: 0 auto;
    border: 1px solid #ffb0b0;
    box-shadow: 0px 0px 20px #888888;
    position: relative;
    padding-bottom: 5px;
  ">
    <div style="
      background-image: url(https://article.biliimg.com/bfs/article/961a15c49336a73cac0c0cb77a1dbb348b13dc99.jpg);
      width: 550px;
      height: 300px;
      background-size: cover;
      background-repeat: no-repeat;
      border-radius: 5px 5px 0px 0px;
    "></div>
    <div style="
      width: 255px;
      height: 40px;
      background-color: rgb(255, 114, 114);
      margin-top: -20px;
      margin-left: 20px;
      box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
      color: rgb(255, 255, 255);
      text-align: center;
      line-height: 40px;
      border-radius: 8px;
      border-top-left-radius: 0;
    ">
      Dear: ${email}
    </div>
    <div style="
      background-color: white;
      line-height: 180%;
      padding: 0 15px 12px;
      width: 520px;
      margin: 30px auto;
      color: #555555;
      font-family: 'Century Gothic', 'Trebuchet MS', 'Hiragino Sans GB',
        微软雅黑, 'Microsoft Yahei', Tahoma, Helvetica, Arial, 'SimSun',
        sans-serif;
      font-size: 12px;
      margin-bottom: 0px;
    ">
      <h2 style="
        border-bottom: 1px solid #ddd;
        font-size: 14px;
        font-weight: normal;
        padding: 13px 0 10px 8px;
      ">
        <span style="color: #12addb; font-weight: bold;">&gt; </span>欧尼酱，您在本站的验证码已送达哦~请勿泄露
      </h2>
      <div style="padding: 0 12px 0 12px; margin-top: 18px;">
        <p><strong>您收到的验证码为：</strong></p>
        <p style="
          background-color: #f5f5f5;
          border: 0px solid #ddd;
          padding: 10px 15px;
          margin: 18px 0;
          color: rgb(255, 114, 114);
          font-size: 20px;
          font-weight: 700;
        ">
          ${code}
        </p>
      </div>
    </div>
    <div style="
      color: #8c8c8c;
      font-family: 'Century Gothic', 'Trebuchet MS', 'Hiragino Sans GB',
        微软雅黑, 'Microsoft Yahei', Tahoma, Helvetica, Arial, 'SimSun',
        sans-serif;
      font-size: 10px;
      width: 100%;
      text-align: center;
      word-wrap: break-word;
      margin-top: -30px;
    ">
      <p style="padding: 20px;">虽然行为本身毫无意义，但是需要曾尽力了这个事实呀，我是这么想的。</p>
    </div>
    <div style="text-decoration: none;
    color: #fff;
    width: 55%;
    text-align: center;
    background-color: #ff7272;
    height: 40px;
    line-height: 35px;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
    margin: -10px auto;
    display: block;
    border-radius: 4px;
      border-bottom-right-radius: 0;">验证码3分钟以内有效，请尽快使用</div>
    <div style="
      color: #8c8c8c;
      font-family: 'Century Gothic', 'Trebuchet MS', 'Hiragino Sans GB',
        微软雅黑, 'Microsoft Yahei', Tahoma, Helvetica, Arial, 'SimSun',
        sans-serif;
      font-size: 10px;
      width: 100%;
      text-align: center;
      margin-top: 30px;
    ">
      <p>本邮件为系统自动发送，请勿直接回复~</p>
    </div>
    <div style="
      color: #8c8c8c;
      font-family: 'Century Gothic', 'Trebuchet MS', 'Hiragino Sans GB',
        微软雅黑, 'Microsoft Yahei', Tahoma, Helvetica, Arial, 'SimSun',
        sans-serif;
      font-size: 10px;
      width: 100%;
      text-align: center;
    ">
      <p>© 2020-${new Date().getFullYear()} midm.top
      </p>
    </div>
  </div>
    `
  }
  return sendMail(mail)
}


export default { 
  sendMail,
  sendCode
}