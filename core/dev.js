import http from 'http'
import http2 from 'http2'
import path from 'path'
import Koa from 'koa'
import Static from 'koa-static'
import router  from './router'
const app = new Koa()


//返回总共的请求时间
app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Response-time', `${ms}ms`);
});
app.use(Static(path.join( __dirname, '../static')));
app.use(router.routes())


//start server
http.createServer(app.callback()).listen(3000,'localhost',()=>{
    console.log("open page http://localhost:3000")
})