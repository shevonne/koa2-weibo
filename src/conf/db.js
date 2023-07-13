/**
 * @description 存储配置
 * @author shevon
*/

//判断环境
const prod = require("../utils/env")

let REDIS_CONF = {
    port:6379,
    host:"127.0.0.1"
}

//线上配置
if(prod){
    REDIS_CONF = {
        port:6379,
        host:"127.0.0.1"
    }
}
module.exports = {
    REDIS_CONF
}