import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import qs from 'qs'
import VueTouch from 'vue-touch'
//引入mint-ui组件库
import mintUI from 'mint-ui'
import btmNav from '@/components/WangYiYun/btmNav'

// 引入mint-ui组件库样式
import 'mint-ui/lib/style.css'
// 注册
Vue.use(mintUI)
Vue.use(VueTouch,{name:"v-touch"})

//引入图标样式
import './font/iconfont/iconfont.css'

// 注册全局组件
Vue.component("btmNav",btmNav)

// 配置axios
axios.defaults.withCredentials=true;
axios.defaults.baseURL="http://localhost:3000";
// axios.defaults.headers.common['token'] = store.getters.getToken();
Vue.prototype.axios=axios;
// 请求拦截器
// axios.interceptors.request.use(
//   config=>{
//     console.log("进入拦截器...")
//     if(config.method==="post"){
//       config.date=qs.stringify(config.date)
//     }
//     if(localStorage.getItem("token")){//判断是否存在token，如果存在，则每个http header都加上token
//       config.headers.token=localStorage.getItem("token")
//     }
//     if(sessionStorage.getItem("token")){
//       config.headers.token=sessionStorage.getItem("token")
//     }
//     return config;
//   },
//   err=>{return Promise.reject(err)}
// )
// 响应拦截器
// axios.interceptors.response.use(
//   res=>{
//     console.log("触发响应拦截器...");
//     if(res.date.status==403){
//       localStorage.removeItem("token");
//       sessionStorage.removeItem("token");
//     }
//   }
// )
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
