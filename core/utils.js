

let context = {
    title: 'hello',
}
const app = new Vue({
    data(){
        return{
            msg:'this Vue server Render'
        }
    },
    template: `<div>{{ msg }}</div>`
})





let creatPage = ctx =>{
    // 在 2.5.0+，如果没有传入回调函数，则会返回 Promise：
    renderer.renderToString(app,context).then(html => {
        return html;
    }).catch(err => {
        return '渲染错误'
    }) 
}

module.exports = {
    creatPage
}