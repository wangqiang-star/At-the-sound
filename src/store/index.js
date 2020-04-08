import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lyricArr:[],  //歌词数组
    songName:"",  //当前播放歌曲的名字
    index:0,      //当前播放歌曲在列表数组的下标
    songPic:"",   //歌曲图片
    songUrl:"",   //当前播放歌曲URL
    phone:"",     //用户手机号
    captcha:"",   //验证码
    userId:"",    //用户id
    token:localStorage.getItem("token") ? localStorage.getItem("token") : "",//登录凭证
    searchSongDetails:[], //保存搜索歌曲的详情
    searchKeyWorld:"" //搜索关键字
  },
  mutations: {
    // 修改state用户手机号
    setPhone(state,value){
      return state.phone=value
    },
    // 修改state用户验证码
    setCaptcha(state,value){
      return state.captcha=value
    },
    // 修改state用户id
    setUserId(state,value){
      return state.userId=value
    },
    // 修改state中token
    setToken(state,value){
      state.token=value;
      localStorage.setItem("token",value)
    },
    // 删除本地存储中的token
    removeToken(state,value){
      localStorage.removeItem("token")
    },
    // 修改当前播放的音乐URL
    setSongUrl(state,value){
      return state.songUrl=value 
    },
    // 修改当前播放音乐背景图片
    setSongPic(state,value){
      return state.songPic=value
    },
    // 修改当前播放音乐下标
    setIndex(state,value){
      return state.index=value
    },
    addIndex(state){
      return state.index++
    },
    // 修改state中歌曲名称
    setSongName(state,value){
      return state.songName=value
    },
    // 修改state中lyricArr数组
    setLyricArr(state,value){
      return state.lyricArr=value;
    },
    // 修改搜索歌曲详情
    setSongDetails(state,value){
      return state.searchSongDetails=value
    },
    // 修改搜索关键字
    setSearchKeyWorld(state,value){
      return state.searchKeyWorld=value
    }
  },
  getters:{
    // 获取用户手机号
    getPhone(state){
      return state.phone
    },
    // 获取用户验证码
    getCaptcha(state){
      return state.Captcha
    },
    // 获取用户id
    getUserId(state){
      return state.userId
    },
    // 获取token
    getToken(state){
      return state.token
    },
    // 获取当前播放音乐的URL
    getSongUrl(state){
      return state.songUrl
    },
    // 获取当前播放音乐背景图片
    getSongPic(state){
      return state.songPic
    },
    // 获取当前播放音乐下标
    getIndex(state){
      return state.index
    },
    // 获取当前播放音乐名称
    getSongName(state){
      return state.songName
    },
    // 获取lyricArr
    getLyricArr(state){
      return state.lyricArr
    },
    // 获取搜索音乐信息
    getSongDetails(state){
      return state.searchSongDetails
    },
    // 获取搜索关键字
    getSearchKeyWorld(state){
      return state.searchKeyWorld
    }
  },
  actions: {
  },
  modules: {
  }
})
