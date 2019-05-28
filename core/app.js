import Vue from 'vue'
import App from '../page/index.vue'
export function createApp () {
    const app = new Vue({
      // 根实例简单的渲染应用程序组件。
      render: h => h(App)
    })
    return { app }
}