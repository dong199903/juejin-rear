const router = require('koa-router')()
const list = require("./../data/course")
router.prefix('/api/course')

router.get('/list', function (ctx, next) {
  const {size,pageNum,type} = ctx.request.query
  const info = list({size,pageNum,type})
  console.log(info)
  ctx.body = {
    code:200,
    data:{
      list:info
    }
  }
})
module.exports = router
