const router = require('koa-router')()
const multer = require('@koa/multer')
const list = require("./../data/course")
router.prefix('/api/upload')

let res
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './upload')
    },
    filename: function (req, file, cb) {
        const fileFormat = (file.originalname).split('.')
        let name =  Date.now() + '.' + fileFormat[fileFormat.length - 1]
        res = "http://127.0.0.1:9999/"+name
        console.log(name)
        cb(null,name)
    }
})
const upload = multer({ storage })
router.post('/file', upload.single('file'),function (ctx, next) {
  console.log(res)
  ctx.body = {
    code:200,
    data:res
  }
})
module.exports = router
