const path = require('path')
const Koa = require('koa')
const static = require('koa-static')
const router = require('../router/router')
const app = new Koa()


app.use(static(path.join( __dirname, '../static'),{
    
}));
app.use(router.routes())
app.listen(3000)