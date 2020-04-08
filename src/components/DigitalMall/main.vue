<template>
  <div class="classifyChunk">
    <div class=" container">
      <!-- F1 -->
      <div class="w-F1">
        <h3>精选单品推荐</h3>
        <div class="F1Box w-flex_sb">
          <div class="w-flex_sb" v-for="(item,i) of f1" :key="i">
            <img :src="item.img">
            <h4>{{item.title}}</h4>
            <p>{{item.pic}}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 热门商品 -->
    <div class="priduct">
      <!-- F2 笔记本/游戏本-->
      <div class="w-F2 container">
        <h3>笔记本/游戏本</h3>
        <div class="F2_Box w-flex_sb">
          <div class="leftBox">
            <img src="../../assets/mallImg/F2_10.webp">
          </div>
          <div class="rightBox w-flex_sb">
            <div v-for="(item,i) of f2" :key="i">
              <img :src="item.img">
              <h5>{{item.title}}</h5>
              <p class="title">{{item.pic}}</p>
              <p class="price">{{item.price}}</p>
            </div>
          </div>
        </div>
      </div>
      <!-- F3 台式机/一体机-->
      <div class="w-F2 container">
        <h3>台式机/一体机</h3>
        <div class="F2_Box w-flex_sb">
          <div class="leftBox">
            <img src="../../assets/mallImg/F3_11.webp">
          </div>
          <div class="rightBox w-flex_sb">
            <div v-for="(item,i) of f3" :key="i">
              <img :src="item.img">
              <h5>{{item.title}}</h5>
              <p class="title">{{item.pic}}</p>
              <p class="price">{{item.price}}</p>
            </div>
          </div>
        </div>
      </div>
      <!-- F4 外设系列-->
      <div class="w-F2 container">
        <h3>外设系列</h3>
        <div class="F2_Box w-flex_sb">
          <div class="leftBox">
            <img class="topImg" src="../../assets/mallImg/F4_12.webp">
            <img class="btmImg" src="../../assets/mallImg/F4_13.webp">
          </div>
          <div class="rightBox w-flex_sb">
            <div v-for="(item,i) of f4" :key="i">
              <img :src="item.img">
              <h5>{{item.title}}</h5>
              <p class="title">{{item.pic}}</p>
              <p class="price">{{item.price}}</p>
            </div>
          </div>
        </div>
      </div>
      <!-- F5 热评商品 -->
      <div class="container w-F5">
        <h3>热评商品</h3>
        <div class="F5_Box w-flex_sb">
          <div v-for="(item,i) of f5" :key="i">
            <img :src="item.img">
            <h5>{{item.title}}</h5>
            <p class="title">{{item.pic}}</p>
            <p class="price">{{item.price}}</p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      f1:[
        {img:require('../../assets/mallImg/05.webp'),
         title:"拯救者 Y7000 15.6英寸游戏笔记本 黑81FW0009CD",
         pic:"i5-8300H/Window..."},
        {img:require('../../assets/mallImg/06.webp'),
         title:"14英寸四核独显轻薄商务便携笔记本电脑",
         pic:"金属游戏本，芯八代六核I7-8..."},
        {img:require('../../assets/mallImg/07.webp'),
         title:"15.6英寸游戏笔记本 黑色 81HC0007CD",
         pic:"i5-8300H/Window..."},
        {img:require('../../assets/mallImg/08.webp'),
         title:"13.3英寸触控笔记本 天蝎灰 81CT0001CD",
         pic:"i5-8300H/Window..."},
        {img:require('../../assets/mallImg/09.webp'),title:"ThinkPad T480 笔记本电脑 81CT0001CC",
        pic:"i5-8250U/Window..."}],
        f2:[
        {img:'https://ccdn.goodq.top/caches/d1d37fbae79753976e738810559b59c2/aHR0cDovLzVjOTMzNWZkNjlhYmMudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wMy9iZmIyZDJiZmRlMmE4ZWE4MDhiMTAxMWRjMjIxNjY0NC0zMjB4MjIwLTkwLndlYnA_p_p100_p_3D.webp',
         title:"15.6英寸游戏笔记本 黑色 81HC0007CD",
         pic:"i5-8300H/Windo...",
         price:"￥5899"},
        {img:'https://ccdn.goodq.top/caches/d1d37fbae79753976e738810559b59c2/aHR0cDovLzVjOTMzNWZkNjlhYmMudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wMy8wNWUyNDFmMGU2YjA0MjRmYjdhNzM1ZGVmZmIyYjRiMS0zMjB4MjIwLTkwLndlYnA_p_p100_p_3D.webp',
         title:"13.3英寸触控笔记本 天蝎灰 81CT0001CD",
         pic:"i5-8300H/Windo...",
         price:"￥7500"},
        {img:'https://ccdn.goodq.top/caches/d1d37fbae79753976e738810559b59c2/aHR0cDovLzVjOTMzNWZkNjlhYmMudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wMy82NDkwMmVjZjJlYzY2YmQxYjljZjdlZjQzZDkzODVmNy0zMjB4MjIwLTkwLndlYnA_p_p100_p_3D.webp',
         title:"X280 笔记本电脑 黑色 20KFA002CD",
         pic:"i5-8300H/Windo...",
         price:"￥6599"},
        {img:'https://ccdn.goodq.top/caches/d1d37fbae79753976e738810559b59c2/aHR0cDovLzVjOTMzNWZkNjlhYmMudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wMy8xNTc4YWZlYmY0NTk1ZDgzMjUyNDYzOTYyOGZkYmQwZi0zMjB4MjIwLTkwLndlYnA_p_p100_p_3D.webp',
         title:"14英寸四核独显轻薄商务便携笔记本电脑",
         pic:"金属游戏本，芯八代六核I7-...",price:"￥5999"},
        {img:'https://ccdn.goodq.top/caches/d1d37fbae79753976e738810559b59c2/aHR0cDovLzVjOTMzNWZkNjlhYmMudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wMy9iOTRhZmQ5YjY3ZjBiY2Q4MTZkMTdmNGFkYzYwNDU4Yi0zMjB4MjIwLTkwLndlYnA_p_p100_p_3D.webp',title:"15.6英寸游戏笔记本 黑色 80WW000TCD",
        pic:"金属游戏本，芯八代六核I7-...",price:"￥5999"},
        {img:'https://ccdn.goodq.top/caches/d1d37fbae79753976e738810559b59c2/aHR0cDovLzVjOTMzNWZkNjlhYmMudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wMy9kNDUyMmU2ZDJjZjIzNWJkODZkNTA2NzZlZTM4YWNkNS0zMjB4MjIwLTkwLndlYnA_p_p100_p_3D.webp',title:"E580 笔记本电脑 黑色 20KSA001CD",
        pic:"i5-8300H/Windo...",price:"￥10899"}],
        f3:[
        {img:'https://ccdn.goodq.top/caches/d1d37fbae79753976e738810559b59c2/aHR0cDovLzVjOTMzNWZkNjlhYmMudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wMy9jNTZjZjU1MTNiZTQzOGM5MmM5MDdhMjZkNDcyMWU2Zi0zMjB4MjIwLTkwLndlYnA_p_p100_p_3D.webp',
         title:"惠普（HP）暗影精灵23代 游戏台式电脑主机",
         pic:"全新戴尔灵越酷睿8代超窄边框...",
         price:"￥4999"},
        {img:'https://ccdn.goodq.top/caches/d1d37fbae79753976e738810559b59c2/aHR0cDovLzVjOTMzNWZkNjlhYmMudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wMy85YTM3YjVlZWQzNTAyODcwMzczNGRlNmFjZDU0NTY1My0zMjB4MjIwLTkwLndlYnA_p_p100_p_3D.webp',
         title:"惠普（HP）暗影精灵3代 游戏台式电脑主机（i7-8700 16G高频 1T+256GSSD GTX1060 6G独显 三年上门）",
         pic:"全新戴尔灵越酷睿8代超窄边框...",
         price:"￥4999-￥5999"},
        {img:'https://ccdn.goodq.top/caches/d1d37fbae79753976e738810559b59c2/aHR0cDovLzVjOTMzNWZkNjlhYmMudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wMy9lNjI4ZGIxZTNjMzVjZjRmNTA3ZmVkM2EzMjEzMDYxZS0zMjB4MjIwLTkwLndlYnA_p_p100_p_3D.webp',
         title:"宏碁（Acer）商祺SQX4270 140N 商用办公台式电脑主机",
         pic:"全新戴尔灵越酷睿8代超窄边框...",
         price:"￥4999-￥5999"},
        {img:'https://ccdn.goodq.top/caches/d1d37fbae79753976e738810559b59c2/aHR0cDovLzVjOTMzNWZkNjlhYmMudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wMy8yMDBjNWJlMWNiMWM3MTM2ZmI0YmM0MWNkYTMxMjgwNi0zMjB4MjIwLTkwLndlYnA_p_p100_p_3D.webp',
         title:"联想（Lenovo）天逸510S 第八代英特尔酷睿i3 个人商务台式电脑主机",
         pic:"全新戴尔灵越酷睿8代超窄边框...",price:"￥2999-￥5999"},
        {img:'https://ccdn.goodq.top/caches/d1d37fbae79753976e738810559b59c2/aHR0cDovLzVjOTMzNWZkNjlhYmMudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wMy9mNmU3OTY1ODRlNDkzOTBjNmZmZDIwN2YyMTIxMzBiYS0zMjB4MjIwLTkwLndlYnA_p_p100_p_3D.webp',title:"15.6英寸游戏笔记本 黑色 80WW000TCD",
        pic:"戴尔(DELL)灵越3670台式电脑主机",price:"￥4999-￥5999"},
        {img:'https://ccdn.goodq.top/caches/d1d37fbae79753976e738810559b59c2/aHR0cDovLzVjOTMzNWZkNjlhYmMudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wMy9mNmU3OTY1ODRlNDkzOTBjNmZmZDIwN2YyMTIxMzBiYS0zMjB4MjIwLTkwLndlYnA_p_p100_p_3D.webp',title:"惠普（HP）暗影精灵3代 游戏台式电脑主机（i5-8400 16G高频 1T+128GSSD GTX1060 6G独显 三年上门）",
        pic:"GTX1060-6G'十'力...",price:"￥5999-￥6999"}],
        f4:[
        {img:'https://ccdn.goodq.top/caches/d1d37fbae79753976e738810559b59c2/aHR0cDovLzVjOTMzNWZkNjlhYmMudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wMy84MWZiYmJiYTExMDBkMzhiYjJiNDY5NDMzZjdmNTdkNy0zMjB4MjIwLTkwLndlYnA_p_p100_p_3D.webp',
         title:"索尼（SONY）WH-1000XM3 高解析度无线蓝牙降噪耳机（触控面板 智能降噪 长久续航）黑色",
         pic:"新款黑科技，超强降噪，佩戴更...",
         price:"￥2899"},
        {img:'https://ccdn.goodq.top/caches/d1d37fbae79753976e738810559b59c2/aHR0cDovLzVjOTMzNWZkNjlhYmMudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wMy83NDg4MWMxNjJmMDBlNTU1NTE1MTc1NzNlODU2NDI2Mi0zMjB4MjIwLTkwLndlYnA_p_p100_p_3D.webp',
         title:"小米米家（MIJIA）智能摄像机 云台版 白色 1080P",
         pic:"1080P高清／ 360度云...",
         price:"￥199"},
        {img:'https://ccdn.goodq.top/caches/d1d37fbae79753976e738810559b59c2/aHR0cDovLzVjOTMzNWZkNjlhYmMudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wMy9kMDVkMTk1MjNlMTI2ODQ5ODMyMjUwZTYwYTI1Y2RjYi0zMjB4MjIwLTkwLndlYnA_p_p100_p_3D.webp',
         title:"Pico G2小怪兽2 VR一体机 4K高清视频 体感游戏 VR眼镜 3D头盔",
         pic:"【爆款直降】小怪兽2VR一体...",
         price:"￥1899"},
        {img:'https://ccdn.goodq.top/caches/d1d37fbae79753976e738810559b59c2/aHR0cDovLzVjOTMzNWZkNjlhYmMudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wMy9lYzkxNmIwNmRmMmY2ZjZkMDc2ZjMxMmFmMjFkOTZhNS0zMjB4MjIwLTkwLndlYnA_p_p100_p_3D.webp',
         title:"联想大红点M120Pro有线鼠标 台式机鼠标 笔记本鼠标",
         pic:"经典大红点系列，按键灵敏，精...",price:"￥99"},
        {img:'https://ccdn.goodq.top/caches/d1d37fbae79753976e738810559b59c2/aHR0cDovLzVjOTMzNWZkNjlhYmMudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wMy82YjExOTJhZTI3YzQ0MzQyYTY2YzAxYzM1OTQwNTdhMS0zMjB4MjIwLTkwLndlYnA_p_p100_p_3D.webp',title:"M330 无线静音鼠标 舒适曲线 黑色 M275升级版",
        pic:"舒适曲线 黑色 M275升级...",price:"￥109"},
        {img:'https://ccdn.goodq.top/caches/d1d37fbae79753976e738810559b59c2/aHR0cDovLzVjOTMzNWZkNjlhYmMudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wMy81ODk1NGViYjZmZGQyZTlmNzJmZjU2NWQ0MzlkNTMwMC0zMjB4MjIwLTkwLndlYnA_p_p100_p_3D.webp',title:"全尺寸背光机械游戏键盘 机械键盘 红轴 吃鸡键盘 绝地求生",
        pic:"无线光学鼠标，始于简约，磨砂...",price:"￥99"}],
        f5:[
        {img:'https://ccdn.goodq.top/caches/d1d37fbae79753976e738810559b59c2/aHR0cDovLzVjOTMzNWZkNjlhYmMudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wMy9lYWIwNWIwM2MzZjYwNjZhMWEzNTNiOTg0MzBjMGI1Mi0yMDB4MTQwLTkwLndlYnA_p_p100_p_3D.webp',
         title:"ThinkPad T480 笔记本电脑",
         pic:"i5-8250U/Windows 10 家庭版/8GB/1T...",
         price:"￥8999"},
        {img:'https://ccdn.goodq.top/caches/d1d37fbae79753976e738810559b59c2/aHR0cDovLzVjOTMzNWZkNjlhYmMudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wMy9kNDUyMmU2ZDJjZjIzNWJkODZkNTA2NzZlZTM4YWNkNS0yMDB4MTQwLTkwLndlYnA_p_p100_p_3D.webp',
         title:"X280 笔记本电脑 20KFA002CD",
         pic:"i5-8300H/Windows 10 家庭中文版/15.6...",
         price:"￥6599"},
        {img:'https://ccdn.goodq.top/caches/d1d37fbae79753976e738810559b59c2/aHR0cDovLzVjOTMzNWZkNjlhYmMudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wMy82NDkwMmVjZjJlYzY2YmQxYjljZjdlZjQzZDkzODVmNy0yMDB4MTQwLTkwLndlYnA_p_p100_p_3D.webp',
         title:"E580 笔记本电脑 20KSA001CD",
         pic:"i5-8300H/Windows 10 家庭中文版/15.6...",
         price:"￥10899"},
        {img:'https://ccdn.goodq.top/caches/d1d37fbae79753976e738810559b59c2/aHR0cDovLzVjOTMzNWZkNjlhYmMudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wMy9jNTZjZjU1MTNiZTQzOGM5MmM5MDdhMjZkNDcyMWU2Zi0yMDB4MTQwLTkwLndlYnA_p_p100_p_3D.webp',
         title:"惠普（HP）暗影精灵23代 游戏台式电脑主机",
         pic:"全新戴尔灵越酷睿8代超窄边框一体机京东首发，IPS高清大屏，...",price:"￥4999"},
        {img:'https://ccdn.goodq.top/caches/d1d37fbae79753976e738810559b59c2/aHR0cDovLzVjOTMzNWZkNjlhYmMudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wMy9mNmU3OTY1ODRlNDkzOTBjNmZmZDIwN2YyMTIxMzBiYS0yMDB4MTQwLTkwLndlYnA_p_p100_p_3D.webp',title:"戴尔(DELL)灵越3670台式电脑主机",
        pic:"全新戴尔灵越酷睿8代超窄边框一体机京东首发，IPS高清大屏，...",price:"￥4099-￥5999"}]
    }
  }
}
</script>
<style scoped>
  .classifyChunk{
    padding: 0;
  }
  /* F1楼商品 */
  .classifyChunk .w-F1{
    width: 100%;
    padding: 0;
    margin-top: 40px;
    background-color: #fff;
  }
  .classifyChunk .w-F1 h3{
    font-size: 2.2rem;
    color: #555;
    margin-bottom: 10px;
  }
  .classifyChunk .w-F1 .F1Box div{
    width:20%;
    box-sizing: border-box;
    flex-direction:column; 
    border: 1px solid rgb(197, 141, 36);
    margin-right: 10px;
    padding: 10px;
  }
  .classifyChunk .w-F1 .F1Box div:last-child{
    margin-right: 0;
  }
  .classifyChunk .w-F1 .F1Box img{
    width:100%;
    transition: all 1s;
  }
  .classifyChunk .w-F1 .F1Box img:hover{
    transform: scale(1.06)
  }
  .classifyChunk .w-F1 .F1Box h4{
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 5px;
  }
  .classifyChunk .w-F1 .F1Box p{
    color: #999;
  }
  /* 热门商品 */
  .classifyChunk .priduct{
    width:100%;
    background-color: #f2f2f2;
  }
  /* F2 */
  .classifyChunk .priduct .w-F2{
    margin-top: 40px;
  }
  .classifyChunk .priduct .w-F2::before{
    content:"";
    display: table;
  }
  .classifyChunk .priduct .w-F2 h3{
    font-size: 2.2rem;
    color:#333;
    margin-top: 30px;
    margin-bottom: 20px;
    padding: 5px;
  }
  /* 左边的图片 */
   .classifyChunk .priduct .w-F2 .leftBox{
     width:40%;
     margin-right: 10px;
   }
   .classifyChunk .priduct .w-F2 .leftBox .topImg{
     margin-bottom: 15px;
   }
   /* 右边商品列表 */
   .classifyChunk .priduct .w-F2 .rightBox{
     width:60%;
     height: 605px;
     flex-wrap: wrap;
     box-sizing: border-box;
   }
   .classifyChunk .priduct .w-F2 .rightBox div{
     width:32%;
     height: 295px;
     display: flex;
     flex-direction: column;
     align-items: center;
     background-color: #fff;
     margin-bottom: 12.5px;
     box-sizing: border-box;
     text-align: center;
     transition: all .5s;
     /* margin-right: 10px; */
   }
   .classifyChunk .priduct .w-F2 .rightBox div img{
     width:100%;
     margin-bottom: 10px;
     padding: 10px;
   }
   .classifyChunk .priduct .w-F2 .rightBox div:hover{
     transform: translatey(-10px);
     box-shadow: 0 0 5px #999;
   }
   .classifyChunk .priduct .w-F2 .rightBox div h5{
     text-overflow: ellipsis;
     height: 36px;
     color:#191919;
     /* font-size: 1.5rem; */
     margin-bottom: 10px;
   }
   .classifyChunk .priduct .w-F2 .rightBox div .title{
     font: 1.2rem;
     color: #b7b7b7;
   }
   .classifyChunk .priduct .w-F2 .rightBox div .price{
     color:#00eef3;
     font-size: 1.5rem;
   }
   /* f5 热门商品 */
   .classifyChunk .w-F5{
     margin-top: 40px;
   }
    .classifyChunk .priduct .F5_Box::before{
    content:"";
    display: table;
  }
  .classifyChunk .w-F5 h3{
    font-size: 2.2rem;
    color:#333;
    margin-top: 30px;
    margin-bottom: 20px;
    padding: 5px;
  }
  .classifyChunk .w-F5 .F5_Box{
    width: 100%;
  }
  .classifyChunk .w-F5 .F5_Box div:last-child{
    margin-right: 0;
  }
  .classifyChunk .w-F5 .F5_Box div{
    width:20%;
    height: 295px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: #fff;
    box-sizing: border-box;
    margin-right: 10px;
    transition: all .5s
  }
  .classifyChunk .priduct .w-F5 .F5_Box div h5{
     text-overflow: ellipsis;
     height: 36px;
     color:#191919;
     /* font-size: 1.5rem; */
     margin-bottom: 10px;
   }
  .classifyChunk .w-F5 .F5_Box div .title{
    font: 1.2rem;
    color: #b7b7b7;
  }
  .classifyChunk .w-F5 .F5_Box div .price{
    color:#00eef3;
    font-size: 1.5rem;
  }
  .classifyChunk .priduct .w-F5 .F5_Box div:hover{
     transform: translatey(-10px);
     box-shadow: 0 0 5px #999;
   }
</style>