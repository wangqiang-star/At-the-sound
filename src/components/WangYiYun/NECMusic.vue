<template>
  <div class="NECMusic">
    <!-- 顶部导航栏 -->
    <div class="topNavBox w-flex_sb">
      <div class="topFixed">
        <img src="../../assets/NECMusicImg/折叠.png">
      </div>
      <mt-navbar class="topNav" v-model="active" fixed>
        <mt-tab-item id="item">我的</mt-tab-item>
        <mt-tab-item id="item1">发现</mt-tab-item>
        <mt-tab-item id="item2">动态</mt-tab-item>
        <mt-tab-item id="item3">视频</mt-tab-item>
      </mt-navbar>
      <div class="topFixed rightFixed">
        <img @click="skipSearch"  src="../../assets/NECMusicImg/搜索.png">
      </div>
    </div>
    <!-- 页面内容 -->
    <mt-tab-container v-model="active" swipeable>
      <mt-tab-container-item id="item">
        <!-- 用户信息 -->
        <div class="userInfoBox" style="background-repeat:no-repeat;
         background-size: cover;" :style="{'background-image':`url(${user.profile.backgroundUrl})`}">
          <!-- 用户信息 -->
          <div class="container">
            <!-- 用户登录显示 没登录隐藏-->
            <div v-if="user.profile.userId" class="w-flex_sb userInfo">
              <img :src="user.profile.avatarUrl" alt="">
              <div class="w-flex_fc centerInfo">
                <p>{{user.profile.nickname}}</p>
                <a href="javascript:;">Lv.{{user.profile.vipType}}</a>
              </div>
              <div class="w-flex_sb rightInfo">
                <span>开通黑胶vip</span>
                <img src="../../assets/NECMusicImg/大于.png">
              </div>
            </div>
            <!-- 用户登录隐藏 没登录显示 -->
            <div v-if="!user.profile.userId" class="w-flex_sb userInfo">
              <img src="../../assets/NECMusicImg/用户 登录 人 面性 .png" alt="">
              <p class="mr-5 text-white ">登录立即享手机电脑多端同步</p>
              <router-link class="text-white w-20 text-center border rounded border-secondary" style="padding:5px"  to="/phoneLogin">立即登录</router-link>
            </div>
          </div>
          <!-- 本地音乐 -->
          <div class="MusicPiece container w-flex_sb">
            <div class="MusicPieceBox w-flex_fc" v-for="(item,i) of icons" :key="i">
              <img :src="item.icon">
              <p>{{item.msg}}</p>
            </div>
          </div>
        </div>
        <!-- 功能列表 -->
        <div class="functionList">
          <!-- 我的音乐 -->
          <div class="MyMusic">
            <div class="w-flex_sb">
              <h5>我的音乐</h5>
              <div>
                <img src="../../assets/NECMusicImg/我的音乐.png" alt="">
                <img src="../../assets/NECMusicImg/大于.png" alt="">
              </div>
            </div>
            <div class="w-flex_sb container MyLiveMusic">
              <div class="leftBox">
                <div class="main">
                  <div class="mainTop">
                    <img src="../../assets/NECMusicImg/爱心.png">
                    <p>我喜欢的音乐</p>
                  </div>
                  <div class="mainBtm">
                    <img src="../../assets/NECMusicImg/暂停.png" alt="">
                    <p>心动模式</p>
                  </div>
                </div>
              </div>
              <div class="centerBox">
                <div class="main">
                  <img src="../../assets/NECMusicImg/收音机.png">
                  <p>私人FM</p>
                </div>
                <p>你的私人曲库</p>
              </div>
              <div class="rightBox w-100">
                <div class="w-flex_fc w-100 w-flex-center">
                  <p class="p1">推荐</p>
                  <div class="w-100 w-flex_fc w-flex-center main">
                    <img src="../../assets/NECMusicImg/九个点.png">
                    <p >最嗨电信</p>
                  </div>
                  <p class="p2">专业电信平台</p>
                </div>
              </div>
            </div>
          </div>
          <!-- 最近播放 -->
          <div class="RecentPlay w-100 mt-3">
            <div class="flex justify-between align-center leftImg">
              <h5>最近播放</h5>
              <div class="flex align-center">
                <span>更多</span>
                <img src="../../assets/NECMusicImg/大于.png">
              </div>
            </div>
            <div class="w-100 flex container align-center">
              <div class="flex align-center leftBox w-50">
                <div class="w-30 p-relative">
                  <img class="bigImg" src="../../assets/NECMusicImg/01.jpg">
                  <img class="smallImg" src="../../assets/NECMusicImg/播放.png">
                </div>
                <div @click="skip" class="w-60">
                  <h5 class="ml-0">全部已播歌曲</h5>
                  <p>{{recentSong.length}}首</p>
                </div>
              </div>
              <div class="flex align-center rightBox w-50">
                <div class="w-30 p-relative">
                  <img class="bigImg" :src="user.profile.avatarUrl">
                  <img class="smallImg" src="../../assets/NECMusicImg/播放.png">
                </div>
                <div class="w-60">
                  <h5 class="ml-0">歌单:[vip专享]一周新歌推荐</h5>
                  <p>继续播放</p>
                </div>
              </div>
            </div>
          </div>
          <!-- 创建歌单 -->
          <div  class="RecentPlay w-100 mt-3">
            <div class="flex justify-between align-center leftImg">
              <div class="flex align-center">
                <h5>创建歌单</h5>
                <p class="ml-1 text-light-muted">收藏歌单0</p>
              </div>
              <img src="../../assets/NECMusicImg/三个点.png">
            </div>
            <div class="container text-center import border-secondary border">
              <span class="text-light-muted">+</span>
              <span class="text-light-muted">导入外部歌单</span>
            </div>
          </div>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="item1">
          <discover :imgs="imgs"></discover>
      </mt-tab-container-item>
      <mt-tab-container-item id="item2">
        云村
      </mt-tab-container-item>
      <mt-tab-container-item id="item3">
        视频
      </mt-tab-container-item>
    </mt-tab-container>
    <!-- 子页面显示区 -->
    <!-- <router-view></router-view> -->
    <!-- 底部导航栏 -->
    <btm-nav></btm-nav>
  </div>
</template>
<script>
import discover from './discover'
export default {
  components:{
    discover
  },
  data(){
    return{
      recentSong:[],
      details:[],
      user:{
        profile:{
          userId:0
        }
      },
      active:"item",
      icons:[
        {icon:require("../../assets/NECMusicImg/本地音乐.png"),msg:"本地音乐"},{icon:require("../../assets/NECMusicImg/下载管理.png"),msg:"下载管理"},{icon:require("../../assets/NECMusicImg/我的电台.png"),msg:"我的电台"},{icon:require("../../assets/NECMusicImg/我的收藏.png"),msg:"我的收藏"},{icon:require("../../assets/NECMusicImg/新歌.png"),msg:"关注新歌"}],
      imgs:[{img:require("../../assets/NECMusicImg/item2_carousel01.jpg")},
            {img:require("../../assets/NECMusicImg/item2_carousel02.jpg")},
            {img:require("../../assets/NECMusicImg/item2_carousel03.jpg")},
            {img:require("../../assets/NECMusicImg/item2_carousel04.jpg")},
            {img:require("../../assets/NECMusicImg/item2_carousel05.jpg")},
            {img:require("../../assets/NECMusicImg/item2_carousel06.jpg")},
            {img:require("../../assets/NECMusicImg/item2_carousel07.jpg")},
            {img:require("../../assets/NECMusicImg/item2_carousel08.jpg")},
            {img:require("../../assets/NECMusicImg/item2_carousel09.jpg")}]
    }
  },
  methods:{
    // 功能：获取用户详情
    userDetails(){
      this.axios.get("/user/detail",{
        params:{
          uid:localStorage.getItem("uid")
        }
      }).then(res=>{
        this.user=res.data;
        console.log(this.user);
        // console.log(this.background);
      }).catch(err=>{console.log(err)})
    },
    // 获取用户歌单
     userDynamic(){
       this.axios.get("/user/playlist",{
         params:{
           uid:localStorage.getItem("uid")
         }
       }).then(res=>{
         if(res.data.code==200){
           this.details=res.data.playlist;
           console.log(this.details)
         }else{
           return;
         }
         })
     },
     //获取用户播放记录  
     recentlyPlayed(){
       this.axios.get("/user/record",{
         params:{
           uid:localStorage.getItem("uid"),
           type:1
         }
       }).then(res=>{
        // 获取返回的数据，将数据放进this.recentSond中
        // console.log(res)
        if(res.status==200){
          this.recentSong=res.data.weekData;
          console.log(this.recentSong)
        }
       })
     },
    //  获取每日推荐歌单
    dailySpecial(){
      this.axios.get("/recommend/resource",{
        params:{
          headers:localStorage.getItem("token")
        }
      }).then(res=>{
        console.log(res)
      })
    },
    //  跳转到最近播放列表页面
    skip(){
      this.$router.push("/recentPlay")
    },
    //  跳转到搜索页面
    skipSearch(){
      this.$router.push("/searchSong")
    }
  },
  created(){
    this.userDetails();
    this.userDynamic();
    this.recentlyPlayed();
  }
}
</script>
<style scoped>
  .NECMusic >>> .mint-tab-item-label{
    font-size: 1.6rem!important;
  }
  .NECMusic .mint-navbar .mint-tab-item.is-selected{
    border-bottom: none;
    font-size:16px!important;
    color: #fff; 
  }
  .mint-navbar .mint-tab-item{
    padding: 12px;
  }
  /* 顶部导航栏 */
  .container{
    width:90%;
    margin: 0 auto;
  }
  .NECMusic{
    width:100%;
    position: relative;
    background-color: #17161e;
    overflow: auto;
    margin-bottom: 5rem;
  }
  .NECMusic .topNavBox{
    /* background-color: #17161e; */
    height:40px;
  }
  .NECMusic .topNavBox .topFixed{
    width: 15%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    background-color: #17161e;
    opacity: .8;
    height:40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .NECMusic .topNavBox .rightFixed{
    left: 85%;
  }
  .NECMusic .topNavBox .topNav{
    width:70%;
    background-color: #17161e;
    margin: 0 auto;
    height:40px;
    font-size:16px;
    color: #b6b5ba; 
    opacity: .8;
  }
  .NECMusic .topNavBox img{
    width:2.5rem;
  }
  /* 用户信息 */
  .NECMusic .userInfoBox:first{
    content: "";
    display: table;
  }
  .NECMusic .userInfoBox{
    width:100%;
    background-color: #17161e;
    padding: 5px;
  }
  .NECMusic .userInfoBox .userInfo{
    margin-top: 15px;
  }
  .NECMusic .userInfoBox .userInfo img{
    width:60px;
    border-radius: 50%;
  }
  .NECMusic .userInfoBox .userInfo .rightInfo{
    width:30%;
    height: 100%;
    color: #b6b5ba; 
  }
  .NECMusic .userInfoBox .userInfo .rightInfo span{
    margin-bottom: 28px;
    /* margin-left: 20px; */
  }
  .NECMusic .userInfoBox .userInfo .rightInfo img{
    width:25px;
    margin-bottom: 25px;
  }
  .NECMusic .userInfoBox .userInfo .centerInfo{
    font-size: 1.8rem;
    color:#fff;
    margin-right: 50px;
  }
  .NECMusic .userInfoBox .userInfo .centerInfo a{
    width:40px;
    background-color: #4f4f4e;
    text-align: center;
    border-radius: 28px;
    font-size: 1.6rem;
    color: #fff;
  }
  /* 本地音乐 */
  .MusicPiece {
    margin-top: 30px;
    margin-bottom: 20px;
  }
  .MusicPiece .MusicPieceBox{
    width:20%;
    align-items: center;
    color:#fff;
  }
  .MusicPiece .MusicPieceBox img{
    width:40px;
    margin-bottom: 8px;
  }
  /* 功能列表 */
  .NECMusic .functionList{
    width:100%;
    background-color: #fff;
    border-radius:20px 20px 0 0;
    border:1px solid #aaa;
    border-bottom: none;
    border-left:none;
    border-right:none;
  }
   /* 我的音乐 */
  .NECMusic .functionList .MyMusic{
    margin-top: 20px;
  }
  .NECMusic .functionList .MyMusic h5,
  .NECMusic .functionList .RecentPlay>div:first-child h5{
    font-size: 1.8rem;
    margin-left: 10px;
    font-weight: 600;
  }
  .NECMusic .functionList>div img{
    width:30px;
    /* margin-right: 10px; */
  }
 /* 我喜欢的音乐 */
 .NECMusic .MyLiveMusic>div{
   width:33.3%;
   height: 180px;
   border-radius: 10px;
   margin-right: 10px;
   position: relative;
   /* opacity: .6; */
 }
 .NECMusic .MyLiveMusic div:last-child{
   margin-right: 0;
 }
 .NECMusic .MyLiveMusic .leftBox{
   background: url("../../assets/NECMusicImg/02.jpg") no-repeat;
   background-size: 100% 100%;
   position: relative;
 }
 .NECMusic .MyLiveMusic .centerBox{
   background: url("../../assets/NECMusicImg/03.jpg") no-repeat;
   background-size: 100% 100%;
 }
 .NECMusic .MyLiveMusic .rightBox{
   background-color: #eee;
 }
 /* 左边 */
 .NECMusic .MyLiveMusic .leftBox .main{
   width:100%;
 }
 .NECMusic .MyLiveMusic .leftBox .main .mainTop{
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   position: absolute;
   top:20%;
   color: #000;
   font-size: 1.4rem;
 }  
 .NECMusic .MyLiveMusic .leftBox .main .mainTop img{
   margin-left: 10px;
   margin-bottom: 5px;
 }
 .NECMusic .MyLiveMusic .leftBox .main .mainBtm{
   width:90%;
   height: 30px;
   display: flex;
   justify-content: center;
   background-color: #999;
   align-items: center;
   position: absolute;
   left:5%;
   top:70%;
   opacity: .7;
   border-radius: 28px;
   color:#fff;
 }
 .NECMusic .MyLiveMusic .leftBox .main .mainBtm img{
   width:20px;
 }
 .NECMusic .MyLiveMusic .centerBox .main{
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   position: absolute;
   top:20%;
   color: #000;
   font-size: 1.4rem;
 }
 .NECMusic .MyLiveMusic .centerBox .main img{
   margin-left: 10px;
   margin-bottom: 5px;
 }
 .NECMusic .MyLiveMusic .centerBox>p{
   position: absolute;
   left:15%;
   top:73%;
   font-size: 1.4rem;
 }
 .NECMusic .MyLiveMusic .rightBox .p1{
   margin-top: 10px;
   color: #999;
 }
 .NECMusic .MyLiveMusic .rightBox .p2{
   position: absolute;
   left:15%;
   top:73%;
   font-size: 1.4rem;
   color: #999;
 }
 .NECMusic .MyLiveMusic .rightBox .main{
   position: absolute;
   top:20%;
   font-size: 1.4rem;
 }
 .NECMusic .MyLiveMusic .rightBox .main img{
     margin-bottom: 5px;
 }
 /* 最近播放 */
 .NECMusic .RecentPlay{
   position: relative;
 }
 .NECMusic .RecentPlay .leftBox h5,
 .NECMusic .RecentPlay .rightBox h5{
   /* font-size: 1.4rem; */
   color: #333;
   margin-left: 1rem;
 }
 .NECMusic .RecentPlay .leftBox p,
 .NECMusic .RecentPlay .rightBox p{
    margin-left: 1rem;
    color: #999;
 }
 .NECMusic .RecentPlay .bigImg{
   width:6rem;
 }
 .NECMusic .RecentPlay .smallImg{
   width:3rem;
   position: absolute;
   top:1.5rem;
   left: 1.5rem;
   opacity: .8;
 }
 /* 创建歌单 */
 .NECMusic .RecentPlay .import{
   height:40px;
   margin-top: 10px;
   line-height: 35px;
   border-radius: 4px;
 }
</style>