import Router from 'koa-router'
import Vue from 'vue'
import createApp from './app'
const { createBundleRenderer } = require('vue-server-renderer')
let router = new Router()


const renderer = createBundleRenderer(serverBundle, {
    runInNewContext: false, // 推荐
    template, // （可选）页面模板
    clientManifest // （可选）客户端构建 manifest
})



router.get('*', function (ctx, next) {
    // 在 2.5.0+，如果没有传入回调函数，则会返回 Promise：
    renderer.renderToString(createApp(ctx)).then(html => {
        ctx.body = html
    }).catch(err => {
        console.error(err)
    })
});

module.exports = router;