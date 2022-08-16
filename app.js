const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const users = require('./routes/users')
const shop = require('./routes/shop')
const course = require('./routes/course')
const getarticlelist = require('./routes/getarticlelist')
const upload = require("./routes/upload")
const cors = require('koa2-cors')

app.use(cors())//注意这个配置要在router前使用不然不生效

onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(require('koa-static')(__dirname + '/public'))
app.use(require('koa-static')(__dirname + '/upload'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))


// routes
app.use(users.routes(), users.allowedMethods())
app.use(shop.routes(), shop.allowedMethods())
app.use(course.routes(), course.allowedMethods())
app.use(upload.routes(), upload.allowedMethods())
app.use(getarticlelist.routes(), getarticlelist.allowedMethods())
// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
