const router = require('koa-router')()
const list = require("./../data/articlelist")
router.prefix('/api/article')

router.get('/articlelist', function (ctx, next) {
    console.log('/articlelist')
    const { count } = ctx.query
    const info = list(count)
    ctx.body = {
        code: 200,
        data: {
            articlelist: info
        }
    }
})
module.exports = router