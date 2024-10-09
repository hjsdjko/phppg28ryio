import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Messages from '../pages/messages/list'
import Storeup from '../pages/storeup/list'
import News from '../pages/news/news-list'
import NewsDetail from '../pages/news/news-detail'
import payList from '../pages/pay'

import xueyuanList from '../pages/xueyuan/list'
import xueyuanDetail from '../pages/xueyuan/detail'
import xueyuanAdd from '../pages/xueyuan/add'
import qiantaiList from '../pages/qiantai/list'
import qiantaiDetail from '../pages/qiantai/detail'
import qiantaiAdd from '../pages/qiantai/add'
import jiaoshiList from '../pages/jiaoshi/list'
import jiaoshiDetail from '../pages/jiaoshi/detail'
import jiaoshiAdd from '../pages/jiaoshi/add'
import kechengxinxiList from '../pages/kechengxinxi/list'
import kechengxinxiDetail from '../pages/kechengxinxi/detail'
import kechengxinxiAdd from '../pages/kechengxinxi/add'
import baomingjiaofeiList from '../pages/baomingjiaofei/list'
import baomingjiaofeiDetail from '../pages/baomingjiaofei/detail'
import baomingjiaofeiAdd from '../pages/baomingjiaofei/add'
import sijiaoyuyueList from '../pages/sijiaoyuyue/list'
import sijiaoyuyueDetail from '../pages/sijiaoyuyue/detail'
import sijiaoyuyueAdd from '../pages/sijiaoyuyue/add'
import quxiaoyuyueList from '../pages/quxiaoyuyue/list'
import quxiaoyuyueDetail from '../pages/quxiaoyuyue/detail'
import quxiaoyuyueAdd from '../pages/quxiaoyuyue/add'
import qiandaoxinxiList from '../pages/qiandaoxinxi/list'
import qiandaoxinxiDetail from '../pages/qiandaoxinxi/detail'
import qiandaoxinxiAdd from '../pages/qiandaoxinxi/add'
import xueshengqingjiaList from '../pages/xueshengqingjia/list'
import xueshengqingjiaDetail from '../pages/xueshengqingjia/detail'
import xueshengqingjiaAdd from '../pages/xueshengqingjia/add'
import jiaoshiqingjiaList from '../pages/jiaoshiqingjia/list'
import jiaoshiqingjiaDetail from '../pages/jiaoshiqingjia/detail'
import jiaoshiqingjiaAdd from '../pages/jiaoshiqingjia/add'
import banjixinxiList from '../pages/banjixinxi/list'
import banjixinxiDetail from '../pages/banjixinxi/detail'
import banjixinxiAdd from '../pages/banjixinxi/add'
import kebiaoxinxiList from '../pages/kebiaoxinxi/list'
import kebiaoxinxiDetail from '../pages/kebiaoxinxi/detail'
import kebiaoxinxiAdd from '../pages/kebiaoxinxi/add'
import newstypeList from '../pages/newstype/list'
import newstypeDetail from '../pages/newstype/detail'
import newstypeAdd from '../pages/newstype/add'
import aboutusList from '../pages/aboutus/list'
import aboutusDetail from '../pages/aboutus/detail'
import aboutusAdd from '../pages/aboutus/add'
import systemintroList from '../pages/systemintro/list'
import systemintroDetail from '../pages/systemintro/detail'
import systemintroAdd from '../pages/systemintro/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'pay',
					component: payList,
				},
				{
					path: 'messages',
					component: Messages
				},
				{
					path: 'storeup',
					component: Storeup
				},
				{
					path: 'news',
					component: News
				},
				{
					path: 'newsDetail',
					component: NewsDetail
				},
				{
					path: 'xueyuan',
					component: xueyuanList
				},
				{
					path: 'xueyuanDetail',
					component: xueyuanDetail
				},
				{
					path: 'xueyuanAdd',
					component: xueyuanAdd
				},
				{
					path: 'qiantai',
					component: qiantaiList
				},
				{
					path: 'qiantaiDetail',
					component: qiantaiDetail
				},
				{
					path: 'qiantaiAdd',
					component: qiantaiAdd
				},
				{
					path: 'jiaoshi',
					component: jiaoshiList
				},
				{
					path: 'jiaoshiDetail',
					component: jiaoshiDetail
				},
				{
					path: 'jiaoshiAdd',
					component: jiaoshiAdd
				},
				{
					path: 'kechengxinxi',
					component: kechengxinxiList
				},
				{
					path: 'kechengxinxiDetail',
					component: kechengxinxiDetail
				},
				{
					path: 'kechengxinxiAdd',
					component: kechengxinxiAdd
				},
				{
					path: 'baomingjiaofei',
					component: baomingjiaofeiList
				},
				{
					path: 'baomingjiaofeiDetail',
					component: baomingjiaofeiDetail
				},
				{
					path: 'baomingjiaofeiAdd',
					component: baomingjiaofeiAdd
				},
				{
					path: 'sijiaoyuyue',
					component: sijiaoyuyueList
				},
				{
					path: 'sijiaoyuyueDetail',
					component: sijiaoyuyueDetail
				},
				{
					path: 'sijiaoyuyueAdd',
					component: sijiaoyuyueAdd
				},
				{
					path: 'quxiaoyuyue',
					component: quxiaoyuyueList
				},
				{
					path: 'quxiaoyuyueDetail',
					component: quxiaoyuyueDetail
				},
				{
					path: 'quxiaoyuyueAdd',
					component: quxiaoyuyueAdd
				},
				{
					path: 'qiandaoxinxi',
					component: qiandaoxinxiList
				},
				{
					path: 'qiandaoxinxiDetail',
					component: qiandaoxinxiDetail
				},
				{
					path: 'qiandaoxinxiAdd',
					component: qiandaoxinxiAdd
				},
				{
					path: 'xueshengqingjia',
					component: xueshengqingjiaList
				},
				{
					path: 'xueshengqingjiaDetail',
					component: xueshengqingjiaDetail
				},
				{
					path: 'xueshengqingjiaAdd',
					component: xueshengqingjiaAdd
				},
				{
					path: 'jiaoshiqingjia',
					component: jiaoshiqingjiaList
				},
				{
					path: 'jiaoshiqingjiaDetail',
					component: jiaoshiqingjiaDetail
				},
				{
					path: 'jiaoshiqingjiaAdd',
					component: jiaoshiqingjiaAdd
				},
				{
					path: 'banjixinxi',
					component: banjixinxiList
				},
				{
					path: 'banjixinxiDetail',
					component: banjixinxiDetail
				},
				{
					path: 'banjixinxiAdd',
					component: banjixinxiAdd
				},
				{
					path: 'kebiaoxinxi',
					component: kebiaoxinxiList
				},
				{
					path: 'kebiaoxinxiDetail',
					component: kebiaoxinxiDetail
				},
				{
					path: 'kebiaoxinxiAdd',
					component: kebiaoxinxiAdd
				},
				{
					path: 'newstype',
					component: newstypeList
				},
				{
					path: 'newstypeDetail',
					component: newstypeDetail
				},
				{
					path: 'newstypeAdd',
					component: newstypeAdd
				},
				{
					path: 'aboutus',
					component: aboutusList
				},
				{
					path: 'aboutusDetail',
					component: aboutusDetail
				},
				{
					path: 'aboutusAdd',
					component: aboutusAdd
				},
				{
					path: 'systemintro',
					component: systemintroList
				},
				{
					path: 'systemintroDetail',
					component: systemintroDetail
				},
				{
					path: 'systemintroAdd',
					component: systemintroAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
