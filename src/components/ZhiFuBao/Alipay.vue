<template>
  <div class="Alipay">
    <mt-tab-container v-model="active">
      <mt-tab-container-item id="item">
        <!-- 首页内容 -->
        <div class="homePage">
          <!-- 顶部固定框 -->
          <div class="fixedBox">
            <div class="fixedBoxLeft">
              <img src="../../font/icon/richscan_icon.png" alt="">
              <img src="../../font/icon/付钱.png" alt="">
              <img src="../../font/icon/shouqianma.png" alt="">
              <img src="../../font/icon/sousuo.png" alt="">
              <img src="../../font/icon/jia.png" alt="">
            </div>
          </div>
          <!-- 头部搜索 -->
          <div class="searchBox">
            <!-- 左边搜索 -->
            <div class="d-f f-ard">
              <search :placeholder="placeholder"></search>
              <!-- 右边按钮 -->
              <img class="iconTXL" src="../../font/icon/tongxunlu.png" alt="">
              <img class="iconJIA" src="../../font/icon/jia.png" alt="">
            </div>
            <!-- 底部导航 -->
            <div>
              <ul class="d-f f-ard btmNav">
                <li>
                  <a href="javascript:;">
                    <img src="../../font/icon/richscan_icon.png" alt="">
                  </a>
                  <p>扫一扫</p>
                </li>
                <li>
                  <a href="javascript:;">
                    <img src="../../font/icon/付钱.png" alt="">
                  </a>
                  <p>付钱</p>
                </li>
                <li>
                  <a href="javascript:;">
                    <img src="../../font/icon/shouqianma.png" alt="">
                  </a>
                  <p>收钱</p>
                </li>
                <li>
                  <a href="javascript:;">
                    <img src="../../font/icon/kabao_line.png" alt="">
                  </a>
                  <p>卡包</p>
                </li>
              </ul>
            </div>
          </div>
          <!-- 中间功能选项 -->
          <div class="options">
            <ul class="optionNav">
              <li>
                <img src="../../font/icon/zhuanzhang.png" alt="">
                <p>转账</p>
              </li>
              <li>
                <img src="../../font/icon/chongzhizhongxin.png" alt="">
                <p>充值中心</p>
              </li>
              <li>
                <img src="../../font/icon/yuebao.png" alt="">
                <p>余额宝</p>
              </li>
              <li>
                <img src="../../font/icon/didichuhang.png" alt="">
                <p>滴滴出行</p>
              </li>
              <li>
                <img src="../../font/icon/zhimaxinyong-.png" alt="">
                <p>芝麻信用</p>
              </li>
              <li>
                <img src="../../font/icon/jipiaohuochepiao.png" alt="">
                <p>火车票机票</p>
              </li>
              <li>
                <img src="../../font/icon/huabei.png" alt="">
                <p>花呗</p>
              </li>
              <li>
                <img src="../../font/icon/gengduo.png" alt="">
                <p>更多</p>
              </li>
            </ul>
          </div>
          <!-- 信息提示 -->
          <div class="msgPrompt d-f">
            <div class="d-f prompt">
              <img class="leftIcon" src="../../font/icon/蚂蚁之家.png" alt="">
              <div class="d-cf f-ard">
                <p class="titleInfo font-w">你的步数又可以做公益就了</p>
                <p class="titleInfo font-w">你又有新的绿色能量待收取</p>
              </div>
              <div class="d-cf">
                <p class="timeInfo ">1小时前</p>
                <p class="timeInfo ">8小时前</p>
              </div>
            </div>
            <img class="rightIcon" src="../../font/icon/大于.png" alt="">
          </div>
          <!-- 信息轮播 -->
          <div class="carousel">
            <mt-swipe :auto="4000">
              <mt-swipe-item>
                <img class="img1" src="../../font/icon/01.jpg" alt="">
              </mt-swipe-item>
              <mt-swipe-item>
                <img class="img2" src="../../font/icon/02.jpg" alt="">
              </mt-swipe-item>
              <mt-swipe-item>
                <img class="img3" src="../../font/icon/03.jpg" alt="">
              </mt-swipe-item>
            </mt-swipe>
          </div>
          <!-- 热门信息-->
          <!-- 热门信息1 -->
          <div class="popularInfo1">
            <h3 class="popularInfoTitle">抗击新冠肺炎</h3>
            <div class="d-center d-f">
              <!-- box1 -->
              <div class="InfoBox">
                <div class="infoTitle">
                  <h4>事实数据</h4>
                  <h5>疫情动态追踪</h5>
                </div>
                <img src="../../font/icon/中国地图.png" alt="">
              </div>
              <!-- box2 -->
              <div  class="InfoBox">
                <div class="infoTitle">
                  <h4>滚动资讯</h4>
                  <h5>实时权威发布</h5>
                </div>
                <img src="../../font/icon/资讯.png" alt="">
              </div>
              <!-- box3 -->
              <div  class="InfoBox">
                <div class="infoTitle">
                  <h4>宅家吃零食</h4>
                  <h5>超市零食送上门</h5>
                </div>
                <img src="../../font/icon/零食.png" alt="">
              </div>
              <!-- box4 -->
              <div  class="InfoBox">
                <div class="infoTitle">
                  <h4>米面粮油集合</h4>
                  <h5>宅家采购更安全</h5>
                </div>
                <img src="../../font/icon/米面粮油.png" alt="">
              </div>
            </div>
          </div>
          <!-- 热门信息2 -->
          <div class="popularInfo1">
            <h3 class="popularInfoTitle">惠支付</h3>
            <div class="d-center d-f">
              <!-- box1 -->
              <div class="InfoBox">
                <div class="infoTitle">
                  <h4>猜股市涨跌</h4>
                  <h5>抢领100万红包</h5>
                </div>
                <img src="../../font/icon/股市.png" alt="">
              </div>
              <div class="InfoBox">
                <div class="infoTitle">
                  <h4>天天有大红包</h4>
                  <h5>付款直接抵扣</h5>
                </div>
                <img src="../../font/icon/红包.png" alt="">
              </div>
            </div>
          </div>
          <!-- 热门信息3 -->
          <div class="popularInfo3">
            <h3>每日必抢<span>淘宝提供服务</span></h3>
            <div class="infoContainer d-center d-f">
              <div class="infoBox">
                <img src="../../font/icon/05.jpg" alt="">
                <h4>红包待使用</h4>
                <h5>10元红包可购物</h5>
              </div>
              <div class="infoBox">
                <img src="../../font/icon/07.jpg" alt="">
                <h4>淘宝专享红包</h4>
                <h5>最多得45元</h5>
              </div>
              <div class="infoBox">
                <img src="../../font/icon/07.jpg" alt="">
                <h4>话费充值</h4>
                <h5>抢十元红包</h5>
              </div>
              <div class="infoBox">
                <img src="../../font/icon/手机.jpeg" alt="">
                <h4>精选手机</h4>
                <h5>红包价<span style="color:#f30">4383元</span></h5>
              </div>
              <div class="infoBox">
                <img src="../../font/icon/平板电脑.jpg" alt="">
                <h4>平板电脑</h4>
                <h5>红包价<span style="color:#f30">395元</span></h5>
              </div>
              <div class="infoBox">
                <img src="../../font/icon/游戏机.jpg" alt="">
                <h4>游戏机</h4>
                <h5>红包价<span style="color:#f30">120元</span></h5>
              </div>
              <div class="infoBox1">
                <p>更多精选精品</p>
                <img src="../../font/icon/大于.png" alt="">
              </div>
            </div>
          </div>
          <!-- 底部样式 -->
          <div class="btm">
            <div class="left"></div>
            <div class="center">我是有底线的</div>
            <div class="right"></div>
          </div>
        </div>
      </mt-tab-container-item>  
      <mt-tab-container-item id="item1">
        财富  
      </mt-tab-container-item>  
      <mt-tab-container-item id="item2">
        <public-praise></public-praise>
      </mt-tab-container-item>  
      <mt-tab-container-item id="item3">
        朋友
      </mt-tab-container-item>  
      <mt-tab-container-item id="item4">
        我的
      </mt-tab-container-item>      
    </mt-tab-container>
    <!-- 底部导航栏 -->
    <div class="btmNav">
      <mt-tabbar v-model="active" fixed>
        <mt-tab-item id="item" @click.native="toggle(0)">
          <btm-img
          :focused="list[0].isselect"
          :nomarImage="require('../../font/icon/zhifubao (2).png')"
          :selectedImage="require('../../font/icon/zhifubao.png')"
          ></btm-img>
          首页
        </mt-tab-item>
        <mt-tab-item id="item1" @click.native="toggle(1)">
          <btm-img
          :focused="list[1].isselect"
          :nomarImage="require('../../font/icon/caifu (2).png')"
          :selectedImage="require('../../font/icon/caifu.png')"
          ></btm-img>
          财富
        </mt-tab-item>
        <mt-tab-item id="item2" @click.native="toggle(2)">
          <btm-img
          :focused="list[2].isselect"
          :nomarImage="require('../../font/icon/koubei (2).png')"
          :selectedImage="require('../../font/icon/koubei.png')"
          ></btm-img>
          口碑
        </mt-tab-item>
        <mt-tab-item id="item3" @click.native="toggle(3)">
          <btm-img
          :focused="list[3].isselect"
          :nomarImage="require('../../font/icon/pengyou (2).png')"
          :selectedImage="require('../../font/icon/pengyou.png')"
          ></btm-img>
          朋友
        </mt-tab-item>
        <mt-tab-item id="item4" @click.native="toggle(4)">
          <btm-img
          :focused="list[4].isselect"
          :nomarImage="require('../../font/icon/wode (2).png')"
          :selectedImage="require('../../font/icon/wode.png')"
          ></btm-img>
          我的
        </mt-tab-item>
      </mt-tabbar>
    </div>
  </div>
</template>
<script>
import btmImg from './btmImg'
import search from './search'
import publicPraise from './publicPraise'
export default {
  data(){
    return{
      active:"item",
      placeholder:"备用金实时到账",
      list:[
        {isselect:true},
        {isselect:false},
        {isselect:false},
        {isselect:false},
        {isselect:false}
      ]
    }
  },
  methods:{
    toggle(idx){
      for(var i=0;i<this.list.length;i++){
        if(idx==i){
          this.list[i].isselect=true;
        }else{
          this.list[i].isselect=false;
        }
      }
    },
    show(){
      window.onscroll=function(){
        var scrollTop=document.body.scrollTop || document.documentElement.scrollTop
        var fixedBox=document.querySelector(".fixedBox")
        // console.log(fixedBox)
        if(scrollTop>150){
          fixedBox.style.display="block"
        }else{
          fixedBox.style.display="none"
        }
      }
    }
  },
  components:{
    btmImg,
    search,
    publicPraise
  },
  mounted(){
    this.show()
  }
}
</script>
<style scoped>
  .Alipay{
    width:100%;
    overflow: auto;
    margin-bottom: 75px;
  }
  .Alipay .homePage{
    width:100%;
  }
  .Alipay .homePage .searchBox{
    background-color: #1296db;
    margin-bottom: 10px;
  }
  .Alipay .homePage .searchBox::before{
    content: "";
    display: table;
  }
  /* 右侧图标 */
  .Alipay .searchBox .iconTXL,
  .Alipay .searchBox .iconJIA{
    width:30px;
    margin-top:15px; 
  }
  /* 底部导航 */
  .Alipay .searchBox .btmNav {
    padding-bottom: 7px;
  }
  .Alipay .searchBox .btmNav img{
    width:45px;
  }
  .Alipay .searchBox .btmNav li{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top:15px;
    color:#fff;
  }
  /* 中间功能选项 */
  .options{
    width: 100%;
    font-size: 1rem;
  }
  .options .optionNav{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  .options .optionNav li{
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
  }
  .options .optionNav li img{
    width: 45px;
  }
  /* 底部导航栏 */
  .mint-tabar > .mint-tabar-item.is-selected{
    color:  #26a2ff; 
    background-color: transparent;
  }
  .mint-tabar > .mint-tabar-item{
    color: #999;
  }
  /* 信息提示 */
  .msgPrompt{
    width:100%;
    justify-content: space-between;
    border-top:8px solid #ddd;
    border-bottom:8px solid #ddd;
  }
  .msgPrompt .prompt{
    justify-content: space-around;
  }
  .msgPrompt .leftIcon{
    width:40px;
    margin-left:10px; 
  }
  .msgPrompt .titleInfo::before{
    content:"";
    display: inline-block;
    width:5px;
    height: 5px;
    border-radius: 50%;
    background-color: #222;
    margin-right: 5px;
  }
  .msgPrompt .titleInfo{
    margin-right:20px; 
    margin-top:5px;
    margin-bottom:5px;
  }
  .msgPrompt .timeInfo{
    color:#aaa;
    margin-top:5px;
    margin-bottom:5px;
  }
  .msgPrompt .rightIcon{
    width:25px;
  }
  /* 信息轮播 */
  .Alipay .mint-swipe{
    height: 100px;
  } 
  .Alipay .img1,.img2,.img3{
    width: 100%;
  }
  /* 热门信息1 */
  .Alipay .popularInfo1{
    width: 100%;
  }
  .Alipay .popularInfo1 .popularInfoTitle{
    width: 100%;
    height: 60px;
    font-size: 1.3rem;
    font-weight: bolder;
    margin-left:2.5%;
    line-height:60px;
  }
  .Alipay .popularInfo1 .InfoBox{
    width:50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:15px 0 15px 0;
    border: 0.1px solid #ccc;
    box-shadow: 0 0 2px 0 #eee;
  }
  .Alipay .InfoBox .infoTitle h4{
    font-weight: bolder;
    font-size: 1rem;
    margin-bottom:7px; 
    margin-left:8px;
  }
  .Alipay .InfoBox .infoTitle h5{
    font-size: 0.9rem;
    color:#aaa;
    margin-left:8px;
  }
  .Alipay .InfoBox  img{
    width: 40px;
    border-radius: 50%;
    background-color: #ccc;
    margin-right: 8px;
  }
  /* 热门信息3 */
  .popularInfo3{
    width: 100;
  }
  .popularInfo3 h3{
    width: 100%;
    height: 60px;
    font-size: 1.3rem;
    font-weight: bolder;
    margin-left:2.5%;
    line-height:60px; 
  }
  .popularInfo3 h3 span{
    font-size: 1rem;
    color:#aaa;
    margin-left: 10px;
  }
  .popularInfo3 .infoContainer{
    border: 1px solid #aaa
  }
  .popularInfo3 .infoContainer .infoBox{
    width: 33.3333%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 7px;
  }
  .popularInfo3 .infoContainer .infoBox img{
    width:70%;
    height: 84px;
    margin-bottom:10px; 
  }
  .popularInfo3 .infoContainer .infoBox h4{
    font-weight: bolder;
    font-size: 1rem;
    margin-bottom:7px; 
  }
  .popularInfo3 .infoContainer .infoBox h5{
    font-size: 0.9rem;
    color:#aaa;
  }
  .popularInfo3 .infoContainer .infoBox1{
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin:10px;
  }
  .popularInfo3 .infoContainer .infoBox1 p{
    font-size: 1.1rem;
    font-weight: bold;
  }
  .popularInfo3 .infoContainer .infoBox1 img{
    width: 20px;
  }
  /* 底部提示信息 */
  .Alipay .homePage .btm{
    width: 80%;
    height:50px;
    margin: 0 auto;
    display: flex;
    text-align: center;
    margin-top: 20px;
  } 
  .Alipay .homePage .btm .left,
   .Alipay .homePage .btm .right{
    width: 30%;
    height:50%;
    border-bottom: 1px solid #aaa;
  }
  .Alipay .homePage .btm .center{
    line-height: 50px;
    color:#aaa;
  }
  /* 顶部固定框 */
  .Alipay .fixedBox{
    width:100%;
    display:flex;
    background-color: #1296db;
    justify-content: space-between;
    padding: 10px;
    position: fixed;
    top: 0;
    left: 0;
    display: none;
    box-sizing: border-box;
  }
  .Alipay .fixedBox img{
    width:35px;
  }
  .Alipay .fixedBox .fixedBoxLeft{
    width:100%;
    display: flex;
    justify-content: space-around;
    margin-right: 0;
  }
</style>