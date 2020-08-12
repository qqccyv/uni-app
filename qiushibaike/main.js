import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
// 项目基础配置
import config from './common/config.js'
Vue.prototype.config = config
// 基础函数
import lib from './common/lib.js'
Vue.prototype.lib = lib
// 跳转权限验证
import User from "./common/user.js"
Vue.prototype.User = User
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
