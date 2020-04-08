<template>
  <div class="discover" style="background-color:#fff">
    <!-- 轮播图 -->
    <div class="carousel pt-1">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(item,i) of imgs" :key="i">
          <img :src="item.img">
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <!-- 选项列表 -->
    <div class="mt-2">
      <div class="flex row justify-between align-center text-center">
        <div v-for="(item,i) of icons" :key="i">
          <img :src="item.img">
          <p>{{item.msg}}</p>
        </div>
      </div>
    </div>
    <!-- 推荐歌单 -->
    <div class="row">
      <div class="flex justify-between align-center w-100 mt-1">
        <div>
          <p class="text-muted">推荐歌单</p>
          <h2>为你精挑细选</h2>
        </div>
        <div>
          <a class="viewMore" href="javasript:;">查看更多</a>
        </div>
      </div>
      <div class="w-100 flex justify-between align-center overflow-auto">
        <div class="mr-1" v-for="(item,i) of playList" :key="i">
          <div>
            <img style="width:120px;border-radius:5px" :src="item.picUrl">
          </div>
          <p style="height:30px;overflow:hidden">{{item.name}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    imgs:{
      type:Array
    }
  },
  data(){
    return{
      icons:[
        {img:require("../../assets/NECMusicImg/每日推荐.png"),msg:"每日推荐"},
        {img:require("../../assets/NECMusicImg/歌单推广_80.png"),msg:"歌单"},
        {img:require("../../assets/NECMusicImg/排行榜.png"),msg:"排行榜"},
        {img:require("../../assets/NECMusicImg/电台 2.png"),msg:"电台"},
        {img:require("../../assets/NECMusicImg/直播.png"),msg:"直播"}
      ],
      playList:[]
    }
  },
  methods:{
    // 获取推荐歌单
    recommendPlaylist(){
      this.axios.get("/personalized",{
        params:{
          limit:6
        }
      }).then(res=>{
        console.log(res);
        this.playList=res.data.result
      })
    }
  },
  created(){
    this.recommendPlaylist()
  }
}
</script>
<style scoped>
  .discover{
    width:100%;
  }
  /* 轮播图 */
  .discover .carousel{
    width:100%;
    height:150px;
  }
  .discover .carousel img{
    width:90%;
    height:150px;
    margin-left: 5%;
    border-radius: 5px;
  }
  /* 推荐歌单 */
  .discover .viewMore{
    padding:5px 10px 5px 10px;
    border: 1px solid #999;
    border-radius: 28px;
    color: rgba(0, 0, 0, 0.884);
  }
  .overflow-auto{
    overflow: auto;
  }
</style>