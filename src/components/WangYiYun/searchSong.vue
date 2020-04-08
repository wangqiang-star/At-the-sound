<template>
  <div class="searchSong w-100">
    <!-- 搜索栏 -->
    <div class="flex justify-between align-center search">
      <img @click="$router.go(-1)" class="back" src="../../assets/NECMusicImg/返回箭头.png">
      <input @keydown="songSearch" type="text" :placeholder="defaults" v-model="keywords">
      <img class="singer" src="../../assets/NECMusicImg/歌手.png">
    </div>
    <!-- 搜索弹出框 -->
    <div @click="searchSong" class="w-70 alert" :class="{hide:bool}">
      <p class="text-hover-info">搜索"{{keywords}}"</p>
    </div>
    <!-- 热门明星 -->
    <div class="row poster" :class="{hide:show}">
      <span @click="show=true" class="font-small text-danger">×</span>
      <img class="w-100 mt-1" style="height:70px" src="../../assets/NECMusicImg/item2_carousel09.jpg">
    </div>
    <!-- 历史记录 -->
    <keep-alive>
      <div class="history row" :class="{hide: historyInfo.length==0}">
        <div class="flex justify-between align-center w-100 mt-1">
          <p class="historyTitle">历史记录</p>
          <img @click="historyInfo=[]" class="remove" src="../../assets/NECMusicImg/垃圾桶.png">
        </div>
        <div class="w-100">
          <ul class="historyList">
            <li @click="searchSong()" v-for="(item,i) of historyInfo" :key="i">
              {{item}}
            </li>
          </ul>
        </div>
      </div>
    </keep-alive>
    <!-- 热搜榜 -->
    <div class="row">
      <div class="mt-1 w-100">
        <h5>热搜榜</h5>
      </div>
      <ul class="w-100">
        <li @click="searchSong(item.searchWord)" class="flex justify-between align-center w-100 mb-2" v-for="(item,i) of topSearchList" :key="i">
          <p class="w-10" :class="{ red:i+1<4 }">{{i+1}}</p>
          <div class="w-80">
            <p class="font-smaller" style="font-weight:600;margin-bottom:5px">{{item.searchWord}}</p>
            <p class="text-secondary">{{item.content}}</p>
          </div>
          <p class="text-secondary">{{item.score}}</p>
        </li>
      </ul>
    </div>
    <!-- 底部播放栏 -->
    <btm-nav></btm-nav>
  </div>
</template>
<script>
import { mapState,mapMutations, mapGetters } from 'vuex'
export default {
  data(){
    return{
      show:false, //控制广告显示
      bool:true,  //控制弹出框显示
      keywords:"", //双向绑定输入的内容
      historyInfo:[],  //保存搜索历史记录
      topSearchList:[], //保存热搜歌词
      defaults:""
    }
  },
  methods:{
    ...mapMutations(['setSongDetails','setSearchKeyWorld']),
    ...mapGetters(["getSongDetails"]),
    // 搜索歌曲
    searchSong(val){
      var keyword=val ? val : this.keywords;
      console.log(keyword)
      this.setSearchKeyWorld(keyword)
      this.axios.get("/search",{
        params:{
          keywords:keyword,
          type:1018
        }
      }).then(res=>{
        console.log(res)
        this.historyInfo.push(keyword)
        this.setSongDetails(res.data.result);
        console.log(this.getSongDetails().mlog);
        this.$router.push("/search")
      })
    },
    // 回车键搜索
    songSearch(e){
      if(e.keyCode==13&&this.keywords){
        this.searchSong()
      }
    },
    // 获取热搜榜信息
    topSearch(){
      this.axios.get("/search/hot/detail")
      .then(res=>{
        this.topSearchList=res.data.data
        console.log(this.topSearchList)
      })
    },
    // 搜索默认歌曲
    defaultsSearch(){
      this.axios.get("/search/default").then(res=>{
        this.defaults=res.data.data.realkeyword
      })
    }
  },
  watch:{
    keywords(val){
       if(this.keywords){
        this.bool=false
      }else{
        this.bool=true
      }
    }
  },
  created(){
    this.topSearch()
    this.defaultsSearch()
  }
}
</script>
<style scoped>
html{
  background-color: #f8f9fa;
}
.searchSong{
  position: relative;
  margin-bottom: 40px;
}
.hide{
  display: none;
}
.red{
  color:red;
}
/* 搜索栏 */
.searchSong .search{
  height: 4rem;
  width: 90%;
  margin: 0 auto;
  margin-top: 1rem;
}
.searchSong .search>input{
  width: 70%;
  height: 3.5rem;
  border: none;
  padding: 0;
  border-bottom: 1px solid #999;
  outline-color: #fff;
  caret-color: black;
  font-size: 1.4rem;
}
.searchSong .search .back,
.searchSong .search .singer{
  width: 30px;
}
/* 搜索弹出框 */
.searchSong .alert{
  height: 4rem;
  line-height: 4rem;
  margin-left: 5%;
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 4px;
  position: absolute;
  top:40px;
  z-index: 2;
}
.searchSong .alert>p{
  margin-left: 10px;
  font-size: 1.4rem;
  font-weight: 600;
}
/* 广告 */
.searchSong .poster{
  position: relative;
}
.searchSong .poster>span{
  position: absolute;
  top:8px;
  right: 10px;
}
/* 历史记录 */
.searchSong .history .historyTitle{
  font-size: 1.4rem;
  font-weight: 600;
}
.searchSong .history .remove{
  width:3rem;
}
/* 历史记录列表 */
.searchSong .history .historyList::after{
  content: "";
  display: block;
  clear: both;
}
.searchSong .history .historyList li{
  height: 2rem;
  background-color: #ddd;
  border-radius: 24px;
  line-height: 2rem;
  text-align: center;
  padding: 0 10px 0 10px;
  float: left;
  margin-right: 5px;
}
</style>