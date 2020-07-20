import Vue from 'vue'
import VueRouter from 'vue-router'
// import Hello from '@/components/Hello'
Vue.use(VueRouter)


  const routes = [
    {
      path: '/',
      component: r => 
      require.ensure([], () => 
        r(require('../components/oceantus/index.vue'))
      )
    },
    {
      path: '/pingmu',
      component: r => 
      require.ensure([], () => 
        r(require('../components/pingmu/index.vue'))
      )
    },
    {
      path: '/home',
      meta: {
        width: 1920,
        height: 1080
      },
      component: r =>
      require.ensure([], () =>
        r(require('../components/anhen/index.vue'))
      ),
      name: 'home'
    },
    {
      path: '/phone',
      component: r => 
      require.ensure([], () => 
        r(require('../components/phone/index.vue'))
      )
    }
  ]
const router = new VueRouter({
  mode: 'history',
  routes // （缩写）相当于 routes: routes
})

export default router
