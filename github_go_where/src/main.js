// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './vuex'
import router from './router'
import SIdentify from './components/shouye/2/identify' 
//注意引入路径
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 使用插件
Vue.use(ElementUI)
Vue.use(SIdentify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
