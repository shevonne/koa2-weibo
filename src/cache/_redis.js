/**
 * @description 内部redis  get set方法  node连接客户端
 * @author shevon
 */

const redis = require("redis");
const {REDIS_CONF} = require("./../conf/db");

//创建客户端
const redisClient = redis.createClient(REDIS_CONF.port,REDIS_CONF.host);

//创建连接
(async function(){
    await redisClient.connect().then(()=>{
        console.log("redis connect success")
    }).catch(console.error)
})()

/**
 * redis set 
 * @param {string} key 键
 * @param {string} val 值
 * @param {number} timout 过期时间
 */
async function set(key,val,timout = 60 * 60){
    //对象转字符串存储
    if(typeof val === "object"){
        val = JSON.stringify(val);
    }
    //设置值
    await redisClient.set(key,val);
    //过期时间
    await redisClient.expire(key,timout)
}


/**
 * redis get
 * @param {string} key 
 * 
 */
async function get(key){
    try {
        let val = redisClient.get(key);
        if(val == null) return val;
        try {
            val = JSON.parse(val); //尝试转换为js对象
        } catch (error) {}
        return val;
    } catch (err) {
        throw err
    }
}

module.exports = {
    get,
    set
}