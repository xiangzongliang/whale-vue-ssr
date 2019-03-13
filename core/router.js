const Router = require('koa-router')
const Vue = require('vue')
const renderer = require('vue-server-renderer').createRenderer()
let router = new Router()





const app = new Vue({
    template: `<div>Hello World</div>`
})


router.get('*', function (ctx, next) {
    // 在 2.5.0+，如果没有传入回调函数，则会返回 Promise：
    renderer.renderToString(app).then(html => {
        ctx.body = html
    }).catch(err => {
        console.error(err)
    })
});

module.exports = router;