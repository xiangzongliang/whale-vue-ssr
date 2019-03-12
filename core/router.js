const Router = require('koa-router');
const fs = require('fs');
const path = require('path')
let router = new Router();
const Vue = require('vue')
const renderer = require('vue-server-renderer').createRenderer({
    template: fs.readFileSync(path.join( __dirname, '../template/default.html'), 'utf-8')
})


const app = new Vue({
    data(){
        return{
            msg:'this Vue server Render'
        }
    },
    template: `<div>{{ msg }}</div>`
})



let context = {
    title: 'hello',
  }

router.get('*', function (ctx, next) {
    // 在 2.5.0+，如果没有传入回调函数，则会返回 Promise：
    renderer.renderToString(app,context).then(html => {
        ctx.body = html;
    }).catch(err => {
        console.error(err)
    })    
});

module.exports = router;