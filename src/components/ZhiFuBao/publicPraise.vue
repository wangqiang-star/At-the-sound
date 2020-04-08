<template>
  <div class="publicPraise">
    <!-- 顶部搜索栏 -->
    <div class="topSearch d-f f-ard">
      <a href="javascript:;">
        <span>广州</span>
        <img src="../../font/icon/小三角.png" alt="">
      </a>
      <search :placeholder="placeholder"></search>
      <img class="mine" src="../../font/icon/我 的.png" alt="">
    </div>
    <!-- 商家服务 -->
    <div class="merchant d-center">
      <!-- 美食外卖 -->
      <div class="foodBox d-f f-ard">
        <div>
          <img src="../../font/icon/美食.png" alt="">
          <p>美食</p>
        </div>
        <div>
          <img src="../../font/icon/下载饿了吗app.png" alt="">
          <p>外卖</p>
        </div>
        <div>
          <img src="../../font/icon/教育_飞猪签证办理.png" alt="">
          <p>酒店预购</p>
        </div>
        <div>
          <img src="../../font/icon/淘票票.png" alt="">
          <p>淘票票电影</p>
        </div>
        <div>
          <img src="../../font/icon/脚印.png" alt="">
          <p>休闲娱乐</p>
        </div>
      </div>
      <!-- 生活服务 -->
      <div class="service d-f f-btn">
        <div class="d-cf" v-for="(item,i) of imgs" :key="i">
          <img :src="item.img" alt="">
          <p>{{labels[i]}}</p>
        </div>
      </div>
    </div>
    <!-- 热门推荐 -->
    <div>
      
    </div>
  </div>
</template>
<script>
import search from './search'
export default {
  components:{
    search
  },
  data(){
    return {
      placeholder:"汉堡王全场4.5元起",
      imgs:[
        {img:require("../../font/icon/商超5.png")},
        {img:require("../../font/icon/水果.png")},
        {img:require("../../font/icon/医药箱.png")},
        {img:require("../../font/icon/饮品2.png")},
        {img:require("../../font/icon/高德打车.png")},
        {img:require("../../font/icon/超市.png")},
        {img:require("../../font/icon/才艺秀发型.png")},
        {img:require("../../font/icon/心 爱心.png")},
        {img:require("../../font/icon/机票.png")},
        {img:require("../../font/icon/城市服务.png")}
        ],
        labels:["商超到家","水果外卖","送货上门","甜品饮品","高德打车","超市","丽人/美发","亲子/游玩","机票火车票","城市服务"]
    }
  }
}
</script>
<style scoped>
  /* 顶部搜索栏 */
  .publicPraise{
    width:100%;
    background-color: #eee;
  }
  .publicPraise .topSearch{
    width:100%;
    background-color: #1296db;
  } 
  .publicPraise .topSearch a{
    width: 11%;
    display: block;
    color: #fff;
    margin: 35px 0 12px 0;
    margin-left: 5px;
  }
  .publicPraise .topSearch a::after{
    content: "";
    display: block;
    clear: both;
  }
  .publicPraise .topSearch a span{
    float: left;
    line-height: 0px;
    margin-right:6px; 
  }
  .publicPraise .topSearch a img{
    width:10px;
    float:right;
  }
  .publicPraise .topSearch .mine{
    width:25px;
    margin: 25px 0 12px 0;
  }
  /* 商家服务 */
  .publicPraise .merchant{
    background-color: #fff;
    margin-top: 10px;
  }
  .publicPraise .merchant::before{
    content: "";
    display: table;
  }
  /* 美食外卖 */
  .publicPraise .merchant .foodBox{
    width: 100%;
    margin-top: 20px;
  }
  .publicPraise .merchant .foodBox div{
    width: 20%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .publicPraise .merchant .foodBox p{
    font-size: .8rem;
    font-weight: 600;
  }
  .publicPraise .merchant .foodBox img{
    width: 48px;
    margin-bottom: 3px;
  }
  /* 商家服务 */
  .publicPraise .merchant .service{
    width: 100%;
    margin-top: 13px;
  }
  .publicPraise .merchant .service div{
    width:20%;
    margin-bottom: 13px;
  }
  .publicPraise .merchant .service img{
    width:20px;
    margin-bottom: 5px;
  }
  .publicPraise .merchant .service p{
    font-size: .8rem;
    font-weight: 600;
  }
</style>