const router = require('koa-router')()
const secret = "akdmakdak3aakfcmz" //密钥
var jwt = require('jsonwebtoken');
router.prefix('/api/user')
//测试路由
router.get("/test",function(ctx,next) {
  ctx.body = "hello"
})
router.post('/login', function (ctx, next) {
  let {username,password} = ctx.request.body
  console.log(username,password)
  if(username==='admin' && password==='123456') {
    //身份验证时间是24小时
    const token = jwt.sign({
      exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24),
      data: username
    }, secret);
    ctx.body = {code:200,data:token}
  } else {
    console.log("error")
    ctx.body = {code:501,msg:'账号密码错误'}
  }
})



module.exports = router
