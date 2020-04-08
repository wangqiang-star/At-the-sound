<template>
  <div class="headers">
    <!-- 页头标识 -->
    <div class="bgcolor">
      <div class="headMarking container w-flex_sb">
        <div class="leftBox w-flex_sb">
          <div>
            <img src="../../assets/mallImg/时间 历史记录 计时 钟表 线性.png" alt="">
            <span>在线时间 08:30~21:30</span>
          </div>
          <div>
            <p>欢迎访问数码家电在线商城模板</p>
          </div>
        </div>
        <div class="rightBox">
          <ul class="w-flex_sb">
            <li><router-link to="/Login">登录</router-link></li>
            <li><router-link to="/signIn">注册</router-link></li>
            <li><router-link to="/cart"><img src="../../assets/mallImg/购物车-23.png"></router-link></li>
          </ul>
        </div>
      </div>  
    </div>
    <!-- 页头导航栏 -->
    <div class="bgcolor_1">
      <div class="headNav w-flex_sb container">
        <div class="leftBox">
          <img src="../../assets/mallImg/01.webp" alt="">
        </div>
        <div class="centerBox">
          <ul class="w-flex_sb">
            <li>首页</li>
            <li>笔记本</li>
            <li>台式机</li>
            <li>外设系列</li>
            <li>测评中心</li>
            <li>售后服务</li>
          </ul>
        </div>
        <div class="rightBox">
          <input type="text" placeholder="游戏笔记本">
          <img src="../../assets/mallImg/搜索.png" alt="">
        </div>
      </div>
    </div>
    <!-- 大屏顶部固定栏-->
    <div class="bgFixedBox">
      <ul>
        <li v-for="(item,i) of navs" :key="i">
          {{item}}
        </li>
      </ul>
    </div>
    <!-- 小屏顶部固定栏 -->
    <div class="fixedBox">
      <div class="w-flex_sb">
        <img @click="show" class="leftImg" src="../../assets/mallImg/折叠.png">
        <img class="centerImg" src="../../assets/mallImg/01.webp">
        <img class="rightImg" src="../../assets/mallImg/搜索.png">
      </div>
    </div>
    <!-- 折叠导航栏 -->
    <div class="foldNav">
      <div class="w-flex_sb">
        <router-link to="./Login">登录</router-link>
        <router-link to="./signIN">注册</router-link>
      </div>
      <div>
        <img src="../../assets/mallImg/01.webp">
      </div>
      <ul>
        <li v-for="(item,i) of lis" :key="i">
          <p>{{item}}</p>
        </li>
      </ul>
      <img @click="hide" :src="bool? gt:lt" alt="">
    </div>
  </div>
</template>
<script>
export default{
  data(){
    return{
      lis:["首页","笔记本","台式机","外设系列","评测中心","售后服务"],
      navs:["首页","笔记本","台式机","外设系列","评测中心","售后服务"],
      gt:require("../../assets/mallImg/大于.png"),
      lt:require("../../assets/mallImg/小于号.png"),
      bool:false
    }
  },
  methods:{
    show(){
      var foldNav=document.querySelector(".headers .foldNav");
      foldNav.style.width="260px";
      if(this.bool){
        this.bool=false
      }else{
        this.bool=true
      }
    },
    hide(){
       var foldNav=document.querySelector(".headers .foldNav");
      foldNav.style.width=0;
      if(this.bool){
        this.bool=false
      }else{
        this.bool=true
      }
    }
  },
  created(){
    window.onscroll=function(){
      var width=window.innerWidth;
      var scrollTop=document.documentElement.scrollTop || document.body.scrollTop;
      var bgFixedBox=document.querySelector(".bgFixedBox")
      // console.log(scrollTop)
      // console.log(width)
      if(scrollTop>180&&width>960){
        bgFixedBox.style.display="block"
      }else{
        bgFixedBox.style.display="none"
      }
    }
  }
}
</script>
<style scoped>
.headers{
  width: 100%;
  position: relative;
}
/* 页头标识 */
.headers .bgcolor{
  background-color: #272727;
}
.headers .headMarking{
  width:100%;
  height:42px;
  color: #999;
  font-size: 1.2rem;
  padding:0;
}
/* 左边标识 */
.headers .headMarking .leftBox{
    width: 32%;
}
.headers .headMarking .leftBox img{
  width:13px;
  margin-bottom: 3px;
  margin-right: 5px;
}
/* 右边标识 */
.headers .headMarking .rightBox li{
  margin-left: 7px;
}
.headers .headMarking .rightBox a{
  color: #999;
}
.headers .headMarking .rightBox img{
   width:25px;
   margin-left: 10px;
}
/* 顶部导航栏 */
.headers .bgcolor_1{
  background-color: #000;
}
.headers .headNav{
  height: 100px;
  color: #999;
  font-size: 1.4rem;
  padding: 0;
}
/* 左边图片 */
.headers .headNav .leftBox img{
  width:236px;
}
.headers .headNav .centerBox li{
  margin-right: 50px;
}
.headers .headNav .rightBox{
  border: 1px solid #999;
}
.headers .headNav .rightBox input{
  background-color: #000;
  border: none;
  padding: 7px;
  color: #fff;
}
.headers .headNav .rightBox img{
  width:20px;
  margin-right: 7px;
  margin-bottom: 2px;
}
/* 大屏顶部固定栏 */
.headers .bgFixedBox{
  width:100%;
  background-color: #000;
  position: fixed;
  top:0;
  display: none;
  z-index: 5;
}
.headers .bgFixedBox ul{
  width:60%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.headers .bgFixedBox ul li{
  height: 50px;
  line-height: 50px;
  margin-right: 30px;
  color: #999;
  font-size: 1.5rem;
}
.headers .bgFixedBox ul li:hover{
  color: aqua;
}
.active{
  color: aqua;
}
/* 小屏顶部固定栏 */
.headers .fixedBox{
  width:100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #000;
  align-items: center;
  display: none;
  z-index: 3;
}
.headers .fixedBox div{
  width: 100%;
   height:60px;
}
.headers .fixedBox .leftImg{
  width:20px;
  margin-left: 20px;
}
.headers .fixedBox .centerImg{
  width:80px;
}
.headers .fixedBox .rightImg{
  width:20px;
  margin-right: 20px;
}
/* 折叠导航栏 */
.headers .foldNav{
  width:0;
  height: 600px;
  position: fixed;
  top:0;
  left: 0;
  display: flex;
  flex-direction:column;
  align-items: center; 
  background-color: #000;
  z-index: 4;
  overflow: hidden;
  transition: all .5s;
}
.headers .foldNav div{
  width:100%;
  background-color: #000;
}
.headers .foldNav a{
  display: block;
  width: 50%;
  text-align: center;
  color: #999;
  height: 47px;
  font-size: 1.6rem;
  line-height: 47px;
  background-color: #000;
}
.headers .foldNav div img{
  width: 80%;
  margin-left: 20px;
}
.headers .foldNav ul{
  width: 100%;
  background-color: #000;
  
}
.headers .foldNav li{
  width:100%;
  height: 37px;
  line-height: 37px;
}
.headers .foldNav li p{
  margin-left: 10px;
  color: #999;
  margin-left: 20px;
  font-size: 1.4rem;
  transition: all .5s;
}
.headers .foldNav li:hover p{
  color: aqua;
  margin-left: 30px;
}
.headers .foldNav>img{
  position: absolute;
  width:30px;
  top:50%;
  right:0%;
}
@media screen and (max-width: 960px){
  .headers{
  width: 100%;
  }
  .headers .bgcolor{
    display: none;
  }
  .headers .bgcolor_1{
    display: none;
  }
  .headers .fixedBox{
    display: block;
  }
  .headers .bgFixedBox{
    display: none  ;
  }
}
@media screen and (min-width: 960px){
  .headers .foldNav{
    display: none;
  }
}
</style>