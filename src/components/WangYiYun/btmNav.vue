<template>
   <!-- 底部导航栏 -->
    <div class="btmNav fixed-bottom bg-white flex justify-between w-100">
      <div class="btmNavLeftBox flex align-center">
        <img :src="this.$store.getters.getSongPic ? this.$store.getters.getSongPic : pic">
        <div class="flex-column ml-1">
          <p style="height:20px;line-height:20px">{{this.$store.getters.getSongName}}</p>
          <p style="height:20px;line-height:20px" class="text-muted">{{lyricInfo}}</p>
        </div>
      </div>
      <div class="btmNavRightBox mr-1 flex justify-center align-center">
        <img @click="toggle" class="playImg mr-1" :src="bool ? playImg : pausedImg">
        <img class="foldImg" src="../../assets/NECMusicImg/折叠_btmNav.png">
      </div>
       <audio id="a3" @ended="nextSong()" @timeupdate="showLyric" slot="music" :src="this.$store.getters.getSongUrl"></audio>
    </div>
</template>
<script>
export default {
  data(){
    return{
      lyricInfo:"",  //当前时间对应的歌词
      lyricArr:[],   //所有时间对应的歌词
      // index:0,
      recentSong:[], //用户播放记录
      bool:true,
      pic:require("../../assets/NECMusicImg/以歌搜歌.png"),
      playImg:require("../../assets/NECMusicImg/播放_btmNav.png"),
      pausedImg:require("../../assets/NECMusicImg/暂停_btmNav.png")
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
    getSongUrl(songId){
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
          // this.songPic=res.data.songs[0].al.picUrl;
          console.log(this.$store.getters.getSongPic)
          })
      }).then(res=>{
        var a3=document.getElementById("a3");
          a3.play();
          console.log(a3)
      })
    },
    // 自动播放下一首
    nextSong(){
      console.log(1)
      this.$store.commit("addIndex");
      var songId=this.recentSong[this.$store.getters.getIndex].song.id;
      if(this.$store.getters.getIndex<this.recentSong.length){
        this.getSongUrl(songId,this.$store.getters.getIndex)
      }else{
        this.$store.commit("setIndex",0)
        this.getSongUrl(songId,this.$store.getters.getIndex)
      }
       this.axios.get("/song/detail",{
          params:{
            ids:songId
          }
        }).then(res=>{
          console.log(res);
          this.$store.commit("setSongName",res.data.songs[0].name)
          // this.songPic=res.data.songs[0].al.picUrl;
          }).then(res=>{
            this.getLyric();
          })
    },
    toggle(){
      // 当当前用音乐播放时才触发切换
      if(this.$store.getters.getSongUrl){
          if(a3.paused){
          a3.play()
          this.bool=false
        }else{
          a3.pause()
          this.bool=true
        }
      }
    },
    // 获取当前歌曲的歌词
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
    // 显示当前时间歌曲的歌词
    showLyric(){
        var a3=document.getElementById("a3");
        var currentTime=parseInt(a3.currentTime);
        if(!a3.paused){
          if(this.$store.getters.getLyricArr[currentTime]==undefined){
            this.lyricInfo=this.lyricInfo
          }else{
            this.lyricInfo=this.$store.getters.getLyricArr[currentTime]
          }
          // console.log(this.lyricArr.indexOf(currentTime))
          // console.log(currentTime);
      }else{
        return;
      }
    }
  },
  created(){
    this.recentlyPlayed();
  },
  mounted(){
  }
}
</script>
<style scoped>
  /* 底部固定栏 */
 .btmNav{
   height: 4rem;
 }
 .btmNav .btmNavRightBox .playImg,
 .btmNav .btmNavRightBox .foldImg{
   width:2.5rem;
 }
 /* 左边歌曲图片 */
 .btmNav .btmNavLeftBox img{
   width:3.5rem;
   height: 3.5rem;
   border-radius: 50%;
   margin-left: 10px;
 }
</style>