import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello from '@/components/Hello'
import containerLeft from '@/components/containerLeft'
import containerRight from '@/components/containerRight'
Vue.use(VueRouter)


  const routes = [
    {
      path: '/anh/changePwd',
      meta: {
        width: 1920,
        height: 1080
      },
      component: r =>
      require.ensure([], () =>
        r(require('../components/anhen/iCountUp.vue'))
      ),
      name: 'iCountUp'
    },
    {
      path: '/',
      name: '首页',
      components: {
        default: Hello,
        left: containerLeft,
        right: containerRight
    },
    children: [
	        {
	          path: 'shouye',
            component: r =>
            require.ensure([], () =>
              r(require('../components/home/index.vue'))
            ),
            children: [
            {
              path: 'plane',
              name: '机票',
              component: r =>
                require.ensure([], () =>
                  r(require('../components/home/jipiao.vue'))
                ),
                children: [
                  {
                    path: 'china',
                    component: r =>
                    require.ensure([], () =>
                      r(require('../components/home/planeChild/china.vue'))
                    ),
                  },
                  {
                    path: 'internation',
                    component: r =>
                    require.ensure([], () =>
                      r(require('../components/home/planeChild/internation.vue'))
                    ),
                  }
                ]
            },
            {
              path: 'hotel',
              name: '酒店',
              component: r =>
                require.ensure([], () =>
                  r(require('../components/home/hotel.vue'))
                ),
            },
            {
              path: 'trainTicket',
              name: '火车票',
              component: r =>
                require.ensure([], () =>
                  r(require('../components/home/trainTicket.vue'))
                ),
            },
            {
              path: 'holiday',
              name: '度假',
              component: r =>
                require.ensure([], () =>
                  r(require('../components/home/holiday.vue'))
                ),
            },
            {
              path: 'tickets',
              name: '门票',
              component: r =>
                require.ensure([], () =>
                  r(require('../components/home/tickets.vue'))
                ),
            },
            {
              path: 'shopp',
              name: '购物',
              component: r =>
                require.ensure([], () =>
                  r(require('../components/home/shopp.vue'))
                ),
            },
            {
              path: 'car_car',
              name: '车车',
              component: r =>
                require.ensure([], () =>
                  r(require('../components/home/car_car.vue'))
                ),
            },
            {
              path: 'independent',
              name: '自由行',
              component: r =>
                require.ensure([], () =>
                  r(require('../components/home/independent.vue'))
                ),
            },
            ]
          }
    ]
  	},
    {
          path: '/register',
          component: r =>
            require.ensure([], () =>
              r(require('../components/login/register.vue'))
            ),
          meta: {
            title: '注册'
          }
    },
    {
      path: '/login',
      meta: {
        title: '登陆'
      },
      component: r =>
        require.ensure([], () =>
          r(require('../components/login/login.vue'))
        ),
    },
    {
      path: '/train',
      meta: {
        title: '火车票查询'
      },
      component: r =>
        require.ensure([], () =>
          r(require('../components/train/index.vue'))
        ),
    }
  ]
const router = new VueRouter({
  mode: 'history',
  routes // （缩写）相当于 routes: routes
})
router.beforeEach((to, from, next) => {
  const AppToken = window.sessionStorage.getItem('token') || ''
  // if (!AppToken && to.path !== '/login') {
  //   router.push({
  //     path: '/login'
  //   })
  //   return
  // }
  // document.title = to.meta.title || '首页'

  next()
})

export default router
