// 入口文件
import Vue from 'vue'
import app from './App.vue'
// 按需导入 Mint-UI 中的组件 
import { Header } from 'mint-ui'
// 导入 MUI 的样式
import './lib/mui/css/mui.min.css'
// 导入扩展图标样式
import './lib/mui/css/icons-extra.css'

// 1.1 导入路由的包
import VueRouter from 'vue-router'
// 1.2 安装路由
Vue.use(VueRouter)
// 1.3 导入自己的 router.js 路由模块
import router from './router.js'

Vue.component(Header.name, Header)

var vm = new Vue({
    el: "#app",
    render: c => c(app),
    router // 1.4 挂载路由对象到 VM 实例上
})