import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import qiantai from '@/views/modules/qiantai/list'
    import news from '@/views/modules/news/list'
    import aboutus from '@/views/modules/aboutus/list'
    import baomingjiaofei from '@/views/modules/baomingjiaofei/list'
    import xueyuan from '@/views/modules/xueyuan/list'
    import jiaoshi from '@/views/modules/jiaoshi/list'
    import kechengxinxi from '@/views/modules/kechengxinxi/list'
    import kebiaoxinxi from '@/views/modules/kebiaoxinxi/list'
    import quxiaoyuyue from '@/views/modules/quxiaoyuyue/list'
    import xueshengqingjia from '@/views/modules/xueshengqingjia/list'
    import jiaoshiqingjia from '@/views/modules/jiaoshiqingjia/list'
    import systemintro from '@/views/modules/systemintro/list'
    import sijiaoyuyue from '@/views/modules/sijiaoyuyue/list'
    import messages from '@/views/modules/messages/list'
    import qiandaoxinxi from '@/views/modules/qiandaoxinxi/list'
    import banjixinxi from '@/views/modules/banjixinxi/list'
    import config from '@/views/modules/config/list'
    import newstype from '@/views/modules/newstype/list'


//2.配置路由   注意：名字
export const routes = [{
    path: '/',
    name: '系统首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '系统首页',
      component: Home,
      meta: {icon:'', title:'center', affix: true}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/qiantai',
        name: '前台',
        component: qiantai
      }
      ,{
	path: '/news',
        name: '公告信息',
        component: news
      }
      ,{
	path: '/aboutus',
        name: '关于我们',
        component: aboutus
      }
      ,{
	path: '/baomingjiaofei',
        name: '报名缴费',
        component: baomingjiaofei
      }
      ,{
	path: '/xueyuan',
        name: '学员',
        component: xueyuan
      }
      ,{
	path: '/jiaoshi',
        name: '教师',
        component: jiaoshi
      }
      ,{
	path: '/kechengxinxi',
        name: '课程信息',
        component: kechengxinxi
      }
      ,{
	path: '/kebiaoxinxi',
        name: '课表信息',
        component: kebiaoxinxi
      }
      ,{
	path: '/quxiaoyuyue',
        name: '取消预约',
        component: quxiaoyuyue
      }
      ,{
	path: '/xueshengqingjia',
        name: '学生请假',
        component: xueshengqingjia
      }
      ,{
	path: '/jiaoshiqingjia',
        name: '教师请假',
        component: jiaoshiqingjia
      }
      ,{
	path: '/systemintro',
        name: '系统简介',
        component: systemintro
      }
      ,{
	path: '/sijiaoyuyue',
        name: '私教预约',
        component: sijiaoyuyue
      }
      ,{
	path: '/messages',
        name: '留言管理',
        component: messages
      }
      ,{
	path: '/qiandaoxinxi',
        name: '签到信息',
        component: qiandaoxinxi
      }
      ,{
	path: '/banjixinxi',
        name: '班级信息',
        component: banjixinxi
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/newstype',
        name: '公告信息分类',
        component: newstype
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
export default router;
