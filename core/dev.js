const http = require('http')
const http2 = require('http2')
const path = require('path')
const Koa = require('koa')
const static = require('koa-static')
const router = require('./router')
const app = new Koa()


//返回总共的请求时间
app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Response-time', `${ms}ms`);
});
app.use(static(path.join( __dirname, '../static')));
app.use(router.routes())


//start server
http.createServer(app.callback()).listen(3000,'localhost',()=>{
    console.log("open page http://localhost:3000")
})