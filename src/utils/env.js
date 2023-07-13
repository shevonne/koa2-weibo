/**
 * @description 环境配置 获取环境变量
 * @author shevon
 */

const ENV = process.env.NODE_ENV;

//导出不同环境
module.exports = {
    isDev: ENV === "dev",
    notDev : ENV !== "dev",
    isProd: ENV === "production",
    notProd: ENV !== "production",
}