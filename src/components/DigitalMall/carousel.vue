<template>
  <div class="carousel">
    <!-- 轮播图 -->
    <div class="bgImg">
      <img :src="imgs[index].img" alt="">
    </div>
    <div class="leftNav">
      <ul>
        <li>
          <p>全部分类</p>
          <img src="../../assets/mallImg/小三角.png" alt="">
        </li>
        <li v-for="(item,i) of list" :key="i">
          <p>{{item}}</p>
        </li>
      </ul>
    </div>
  <!-- 分类商品 -->
  <div class="container box w-flex_sb">
    <div class="leftBox w-flex_sb">
      <div v-for="(item,i) of boxs" :key="i">
        <img :src="item.img">
        <p>{{infos[i]}}</p>
      </div>
    </div>
    <div class="rightBox w-flex_sb">
      <div v-for="(item,i) of parts" :key="i">
        <img :src="item.img" alt="">
      </div>
    </div>
  </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      list:["游戏笔记本","游戏台式机","办公电脑","游戏鼠键/耳机","高清摄像头","VR专区","驱动下载","保修政策"],
      imgs:[
        {img:require('../../assets/mallImg/笔记本1.jpg')},
        {img:require('../../assets/mallImg/笔记本2.jpg')},
        {img:require('../../assets/mallImg/笔记本3.jpg')}],
        index:0,
        boxs:[
          {img:require('../../assets/mallImg/以旧换新.png')},{img:require('../../assets/mallImg/下载.png')},{img:require('../../assets/mallImg/检测.png')},{img:require('../../assets/mallImg/后台-售后.png')}],
          infos:["以旧换新","驱动下载","测评中心","售后服务"],
        parts:[
          {img:require('../../assets/mallImg/02.webp')},
          {img:require('../../assets/mallImg/03.webp')},
          {img:require('../../assets/mallImg/04.webp')}]
    }
  },
  mounted(){
    setInterval(()=>{
      this.index++
      if(this.index>2){
        this.index=0
      }
    },2000)
  }
}
</script>
<style scoped>
  .carousel{
    width:100%;
    position: relative;
  }
  /* 轮播图 */
  .carousel .bgImg img{
    width:100%;
    height: 516px;
  }
  /* 左边导航栏 */
  .carousel .leftNav ul{
    width:240px;
    height:516px;
    position: absolute;
    top:0;
    left:8%;
    /* display: none */
  }
  .carousel .leftNav ul li{
    width:240px;
    height: 58px;
    line-height: 58px;
    background-color: #272727;
    color: #ccc;
    text-align: center;
  }
  .carousel .leftNav ul li:first-child{
    height:45px;
    background-color:#222;
    line-height: 45px;
  }
  .carousel .leftNav ul li p{
    margin-left: 20px;
    font-size: 1.4rem;
  }
  .carousel .leftNav ul img{
    width:30px;
  }
  .carousel .leftNav ul li:hover{
    background-color: #333;
  }
  /* 售后服务 */
  .box{
    margin-top: 20px;
    padding: 0;
  }
  .box .leftBox{
    width:240px;
    height: 161px;
    flex-wrap:wrap; 
    background-color: #979797;
    /* padding: 10px; */
    /* margin-right: 15px; */
    box-sizing: border-box;
  }
  .box .leftBox div{
    width:50%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
  }
  .box .leftBox img{
    width: 30px;
    margin-bottom: 3px;
  }
  /* 商品配件 */
  .box .rightBox{
    width:880px;
    padding: 0;
  }
  .box .rightBox div{
    width:33.3%;
    box-sizing: border-box;
    margin-right: 10px;
  }
  .box .rightBox div:last-child{
    margin-right: 0;
  }
  .box .rightBox img{
    width:100%;
    height:161px;
    /* margin-right: 10px; */
  }
</style>