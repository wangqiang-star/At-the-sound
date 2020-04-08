<template>
  <!-- 最近播放页面 -->
  <div class="recentPlay">
    <!-- 顶部返回 -->
    <div class="back flex w-100 justify-between">
      <div class="flex align-center">
        <img @click="back" src="../../assets/NECMusicImg/返回箭头.png">
        <span>最近播放</span>
      </div>
      <div>
        <a class="text-dark clearAll mr-1" href="javascript:;">清空</a>
      </div>
    </div>
    <!-- 选项导航栏 -->
    <mt-navbar v-model="view">
      <mt-tab-item v-for="(item,i) of options" :id="'active'+i" :key="i">{{item}}</mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="view">
      <!-- 歌曲 -->
      <mt-tab-container-item id="active0">
        <!-- 播放栏 -->
        <div class="flex justify-between song">
          <div class="ml-1 songPlay flex align-center">
            <img class="mr-1" src="../../assets/NECMusicImg/播放_btmNav.png">
            <span class="text-hover-dark">播放全部</span>
            <span class="text-muted">(共{{recentSong.length}}首)</span>
          </div>
          <div class="mr-1 songOption flex align-center">
            <img class="mr-1" src="../../assets/NECMusicImg/折叠_btmNav.png" alt="">
            <span class="text-hover-dark">多选</span>
          </div>
        </div>
        <!-- 歌曲列表 -->
        <div class="songList">
          <div v-for="(item,i) of recentSong" @click="getSongUrl(item.song.id,i)" class="flex justify-between align-center songBox" :key="i">
            <div class="ml-1 w-80">
              <p class="songName">{{item.song.name}}</p>
              <p class="text-muted">{{item.song.ar[0].name}}</p>
            </div>
            <div>
              <img class="paly" src="../../assets/NECMusicImg/播放_play.png">
              <img class="fold" src="../../assets/NECMusicImg/三个点_song.png">
            </div>
          </div>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="active1">
        1
      </mt-tab-container-item>
      <mt-tab-container-item id="active2">
        2
      </mt-tab-container-item>
      <mt-tab-container-item id="active3">
        3
      </mt-tab-container-item>
      <mt-tab-container-item id="active4">
        4
      </mt-tab-container-item>
      <mt-tab-container-item id="active5">
        5
      </mt-tab-container-item>
    </mt-tab-container>
    <btm-nav></btm-nav>
  </div>
</template>
<script>
export default {
  data(){
    return{
      index:0,
      // songPic:"",
      // songUrl:"",
      recentSong:[],
      view:"active0",
      options:["歌曲","直播","视频","歌单","专辑","电台"]
    }
  },
  methods:{
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
    //  获取音乐Url
    getSongUrl(songId,i){
      this.index=i;
      this.$store.commit("setIndex",i)
      // console.log(i)
      console.log(songId)
      this.axios.get("/song/url",{
        params:{
          id:songId
        }
      }).then(res=>{
        // console.log(res)
        if(res.data.code==200){
          // 将返回的音乐url赋值到songUrl中
          // this.songUrl=res.data.data[0].url;
          this.$store.commit("setSongUrl",res.data.data[0].url)
          console.log(this.$store.getters.getSongUrl);
        }
        // 获取当前播放歌曲图片
        this.axios.get("/song/detail",{
          params:{
            ids:songId
          }
        }).then(res=>{
          console.log(res);
          this.$store.commit("setSongPic",res.data.songs[0].al.picUrl);
          this.$store.commit("setSongName",res.data.songs[0].name)
          // this.songPic=res.data.songs[0].al.picUrl;
          console.log(this.$store.getters.getSongPic)
          })
      }).then(res=>{
        var a3=document.getElementById("a3");
          a3.play();
          console.log(a3)
      }).then(res=>{
        this.getLyric();
      })
    },
    // 获取当前歌曲的歌词
    getLyric(){
      if(this.$store.getters.getLyricArr.length>0){
        this.$store.commit("setLyricArr",[])
      }
      this.axios.get("/lyric",{
        params:{
          id:this.recentSong[this.$store.getters.getIndex].song.id
        }
      }).then(res=>{
        if(res.data.nolyric){
          this.$store.commit("setLyricArr",[]);
          return;
        }
        var arr1=[];
        console.log(res.data)
        var lyric=res.data.lrc.lyric.split("\n");
        //创建正则 获取字符串中的时间
        var reg=/(\d{2}):(\d{2})\.(\d{2})/;
        // console.log(lyric);
        for(var i=0;i<=lyric.length;i++){
          if(reg.exec(lyric[i])){
            var arr=reg.exec(lyric[i]);
            // console.log(arr)
            // 获取分
            var min=parseFloat(arr[1]);
            // 获取秒
            var second=parseFloat(arr[2]);
            // 获取毫秒
            var msec=parseFloat(arr[3])
            var time=(min*60*1000+second*1000+msec)/1000;
            time=parseInt(time);
            // console.log(time)
            var lyricText=arr.input.split("]")[1];
            // console.log(lyricText)
            arr1[time]=lyricText;
          }
        }
        this.$store.commit("setLyricArr",arr1)
        console.log(arr1)
        })
    },
    // 返回上一页
    back(){
      this.$router.go(-1)
    }
  },
  created(){
    this.recentlyPlayed();
  }
}
</script>
<style scoped>
   /* 返回栏  */
  .recentPlay .back{
    height:30px;
    margin-top: 1rem;
  }
  .recentPlay .back img{
    width:3rem;
    margin-right: 2rem;
    margin-left: 1rem;
  }
  .recentPlay .back>div span{
    font-size: 1.4rem;
    line-height: 30px;
    color: #000;
    font-weight: 400;
  }
  .recentPlay .back .clearAll{
    line-height: 30px;
    font-size: 1.4rem;
  }
  /* 选项导航栏 */
  .mint-navbar .mint-tab-item.is-selected{
    font-size: 1.4rem;
    color:red;
    border-bottom: 3px solid #f00;
  }
  /* 歌曲 */
  .song{
    height: 4rem;
  }
  .song .songPlay img,
  .song .songOption img{
    width:2rem;
  }
  /* 歌曲列表 */
  .recentPlay .songList .songBox{
    padding: 10px;
    height: 5rem;
  }
  .recentPlay .songList .songBox .songName{
    width: 80%;
    font-size: 1.5rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .recentPlay .songList .songBox .paly,
  .recentPlay .songList .songBox .fold{
    width:3rem;
  }
</style>