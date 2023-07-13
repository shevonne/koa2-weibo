/**
 * @description 内部redis  get set方法  node连接客户端
 * @author shevon
 */

const redis = require("redis");
const {REDIS_CONF} = require("./../conf/db");

//创建客户端
const redisClient = redis.createClient(REDIS_CONF.port,REDIS_CONF.host);

redisClient.on("error", err => {
   console.log("error",err)
})

//get

//set
