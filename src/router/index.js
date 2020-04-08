import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/carousel/index'
import Alipay from '../components/ZhiFuBao/Alipay'
import publicPraise from '../components/ZhiFuBao/publicPraise'
import Mall from '../components/DigitalMall/mall'
import header from '../components/DigitalMall/header'
import Login from '../components/DigitalMall/Login'
import signIn from '../components/DigitalMall/signIn'
import NECMusicLogin from '../components/WangYiYun/NECMusicLogin'
import phoneLogin from '../components/WangYiYun/phoneLogin'
import NECMusicAuthCode from '../components/WangYiYun/authCode'
import NECMusic from '../components/WangYiYun/NECMusic'
import NECMusicSignIn from '../components/WangYiYun/signin'
import NECMusicSignUp from '../components/WangYiYun/signUp'

// 注册路由
Vue.use(Router)
// 配置路由基础路径

export default new Router({
  routes:[
    {path:'/',redirect:"/NECMusic"},
    {path:'*',component:()=>import('@/components/notFound')},
    {path:'/Carousel',component:Index},
    {path:'/Alipay',component:Alipay},
    {path:'/publicPraise',component:publicPraise},
    {path:'/Mall',component:Mall},
    {path:'/header',component:header},
    {path:'/Login',component:Login},
    {path:'/signIn',component:signIn},
    {path:'/NECMusicLogin',component:NECMusicLogin},
    {path:'/phoneLogin',component:phoneLogin},
    {path:'/NECMusicAuthCode',component:NECMusicAuthCode},
    { path:'/NECMusic',
      component:NECMusic,
      // children:[
      // {
      //   path:"searchSong",
      //   component:()=>import('@/components/WangYiYun/searchSong')
      // }
      // ]
    },
    {path:'/NECMusicSignIn',component:NECMusicSignIn},
    {path:'/NECMusicSignUp',component:NECMusicSignUp},
    {path:'/recentPlay',component:()=>import('@/components/WangYiYun/recentPlay')},
    {path:'/searchSong',component:()=>import('@/components/WangYiYun/searchSong')},
    {path:'/search',component:()=>import('@/components/WangYiYun/search')}
  ]
})
