/**
 * @description user views 相关用户路由处理
 * @author shevon
 */
const router = require("koa-router")();

//登录页
router.get('/login', async (ctx, next) => {
    await ctx.render("login",{})
});

//注册页
router.get('/register', async (ctx, next) => {
    await ctx.render("register",{})
})


module.exports = router;
