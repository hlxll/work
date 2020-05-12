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
import s_dujia from '@/components/shouye/dujia'
import china from '@/components/shouye/1/china'
import internation from '@/components/shouye/1/internation'
import register from '@/components/shouye/2/register'
import login from '@/components/shouye/2/login'
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
	          component: shouye,
			  children: [
				  {
					  path: '1',
					  component: s_jipiao,
					  children: [
						  {
							  path: 'china',
							  component: china
						  },
						  {
							  path: 'internation',
							  component: internation
						  }
				  ]
			  },
                 {
				  path: '2',
				  component: s_jiudian
              },
			  {
				  path: '3',
				  component: s_huochepiao
			  },
			  {
				  path: '4',
				  component: s_dujia
			  }
		  ]
        },
        {
          path: 'jipiao',
          component: jipiao
        }

      ]
  	},
 	{
	    path: '/register',
	    components: {
	    	default: register
	    }
	},
	{
		path: '/login',
		components: {
		    default: login
		}
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
