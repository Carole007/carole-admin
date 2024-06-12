const path = require("path")
const dotenv = require("dotenv").config({path:path.join(__dirname, "../src/.env")})
const HmacSHA256 = require("crypto-js/hmac-sha256")
const key = process.env.psdSecret
console.log(HmacSHA256("carole", key).toString())
console.log(HmacSHA256("123456", key).toString())