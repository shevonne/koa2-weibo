/**
 * @description 内部redis  get set方法  node连接客户端
 * @author shevon
 */

const redis = require("redis");
const {REDIS_CONF} = require("./../conf/db");

//创建客户端
const redisClient = redis.createClient(REDIS_CONF.port,REDIS_CONF.host);

//监听错误
redisClient.on("error", err => {
   console.log("error",err)
})


/**
 * redis set 
 * @param {string} key 键
 * @param {string} val 值
 * @param {number} timout 过期时间
 */
function set(key,val,timout = 60 * 60){
    //对象转字符串存储
    if(typeof(val) === "object"){
        val = JSON.stringify(val);
    }
    //设置值
    redisClient.set(key,val);
    //过期时间
    redisClient.expire(key,timout)
}


/**
 * redis get
 * @param {string} key 
 * 
 */
function get(key){
    const promise = new Promise((resolve,reject) => {
        redisClient.get(key,(err,val)=>{
            if(err){
                reject(err)
                return
            }
            if(val == null){
                resolve(null)
                return
            }
            //取值
            try {
                resolve(JSON.parse(val))
            } catch (error) {
                resolve(val)
            }
        })
    })
    return promise;
}

module.exports = {
    get,
    set
}