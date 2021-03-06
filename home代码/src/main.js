// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './vuex'
import router from './router'
import rem from './rem.js'
import ElementUI from 'element-ui'
import iview from 'iview'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'
import echarts from 'echarts'
import axios from 'axios'
import Vueaxios from 'vue-axios'
Vue.prototype.$echarts = echarts
Vue.use(Vueaxios, axios)
// 使用插件
Vue.use(iview)
Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  axios,
  store,
  router,
  components: { App },
  template: '<App/>'
})
