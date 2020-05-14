import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import containerLeft from '@/components/containerLeft'
import containerRight from '@/components/containerRight'
import shouye from '@/components/shouye'
import jipiao from '@/components/jipiao'
import s_jipiao from '@/components/shouye/jipiao'
import s_jiudian from '@/components/shouye/jiudian'
import s_huochepiao from '@/components/shouye/huochepiao'
// import s_dujia from '@/components/shouye/dujia'
import china from '@/components/shouye/1/china'
import internation from '@/components/shouye/1/internation'
import register from '@/components/shouye/2/register'
// import login from '@/components/shouye/2/login'
Vue.use(Router)

export default new Router({
  routes: [
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
      name: 'HelloWorld',
      components: {
        default: HelloWorld,
        left: containerLeft,
        right: containerRight
    },
	children: [
	        {
	          path: 'shouye',
            component: r =>
              require.ensure([], () =>
                r(require('../components/shouye.vue'))
              ),
			  children: [
				  {
					  path: '1',
					  component: s_jipiao,
            component: r =>
              require.ensure([], () =>
                r(require('../components/shouye/jipiao.vue'))
              ),
					  children: [
						  {
							  path: 'china',
                component: r =>
                  require.ensure([], () =>
                    r(require('../components/shouye/1/china.vue'))
                  ),
						  },
						  {
							  path: 'internation',
                component: r =>
                  require.ensure([], () =>
                    r(require('../components/shouye/1/internation.vue'))
                  ),
						  }
				  ]
			  },
                 {
				  path: '2',
          component: r =>
            require.ensure([], () =>
              r(require('../components/shouye/jiudian.vue'))
            ),
              },
			  {
				  path: '3',
          component: r =>
            require.ensure([], () =>
              r(require('../components/shouye/huochepiao.vue'))
            ),
			  },
			  {
				  path: '4',
          component: r =>
            require.ensure([], () =>
              r(require('../components/shouye/dujia.vue'))
            ),
			  }
		  ]
        },
        {
          path: 'jipiao',
          component: r =>
            require.ensure([], () =>
              r(require('../components/jipiao.vue'))
            ),
        }

      ]
  	},
 	{
	    path: '/register',
      component: r =>
        require.ensure([], () =>
          r(require('../components/shouye/2/register.vue'))
        ),
	},
	{
		path: '/login',
    component: r =>
      require.ensure([], () =>
        r(require('../components/shouye/2/login.vue'))
      ),
	}
  // {
  // 	path: '/fbhome',
  // 	component: r =>
  // 	  require.ensure([], () =>
  // 	    r(require('../components/fb/shouye.vue'))
  // 	  )
  // },
  // {
  // 	path: '/fbdetail',
  // 	component: r =>
  // 	  require.ensure([], () =>
  // 	    r(require('../components/fb/xianqing.vue'))
  // 	  )
  // }
  ]
})
