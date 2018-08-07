// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import routers from './router'
import VueRouter from 'vue-router'
import MintUI from 'mint-ui'
import '../node_modules/mint-ui/lib/style.css'

Vue.config.performance = true
Vue.config.productionTip = true
Vue.config.warnHandler = function (msg, vm, trace) {
  // `trace` 是组件的继承关系追踪
  console.log(msg, vm, trace)
}
Vue.use(VueRouter)
Vue.use(MintUI)

// 创建一个路由对象用于管理页面的路由
const router = new VueRouter({
  mode: 'history',
  routes: routers
})

router.beforeEach((to, from, next) => {
  next()
  document.title = to.meta.title
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  http: {
    root: '/root',
    headers: {
      Authorization: 'tongkayun own mobile'
    }
  }
})
