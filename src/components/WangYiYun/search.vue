<template>
  <div class="searchDetails">
    <div class="fixed">
      <!-- 搜索栏 -->
      <div class="flex justify-between align-center search">
        <img @click="$router.go(-1)" class="back" src="../../assets/NECMusicImg/返回箭头.png">
        <div class="w-90 flex justify-between align-center ml-1">
          <input @keydown="songSearch" type="text" :placeholder="defaults" v-model="keywords">
          <img @click="keywords=''" class="singer" src="../../assets/NECMusicImg/叉.png" :class="{hide:!keywords}">  
        </div>
      </div>
      <!-- 搜索弹出框 -->
      <div @click="searchSong" class="w-70 alert" :class="{hide:bool}">
        <p class="text-hover-info">搜索"{{keywords}}"</p>
      </div>
      <!-- 功能分类 -->
      <!-- 选项导航栏 -->
      <mt-navbar v-model="view">
        <mt-tab-item id="active0" @click.native="classifySearch(1018)">综合</mt-tab-item>
        <mt-tab-item id="active1" @click.native="classifySearch(1)">单曲</mt-tab-item>
        <mt-tab-item id="active2">云村</mt-tab-item>
        <mt-tab-item id="active3" @click.native="classifySearch(1014)">视频</mt-tab-item>
        <mt-tab-item id="active4" @click.native="classifySearch(100)">歌手</mt-tab-item>
        <mt-tab-item id="active5" @click.native="classifySearch(10)">专辑</mt-tab-item>
        <mt-tab-item id="active6" @click.native="classifySearch(1000)">歌单</mt-tab-item>
        <mt-tab-item id="active7" @click.native="classifySearch(1009)">电台</mt-tab-item>
        <mt-tab-item id="active8" @click.native="classifySearch(1002)">用户</mt-tab-item>
      </mt-navbar>
    </div>
    <!-- tab-container -->
    <mt-tab-container v-model="view">
      <!-- 综合 -->
      <mt-tab-container-item id="active0">
        <!-- 歌曲 -->
        <div class="composite mt-2">
          <!-- 单曲 -->
          <div v-if="getSongDetails().song">
            <div class="flex justify-between align-center pt-1 row title">
              <h4 class="titleInfo">单曲</h4>
              <a href="javascript:;" class="text-hover-dark flex align-center">
                <img src="../../assets/NECMusicImg/播放_btmNav.png">
                <span>播放全部</span>
              </a>
            </div>
            <ul class="row songList">
              <li v-for="(item,i) of getSongDetails().song.songs"  @click="getSongUrl(item.id)" class="mb-2 w-100 flex justify-between align-center" :key="i">
                <div>
                  <h5 class="text-hover-info mb_5">{{item.name}}</h5>
                  <p class="text-secondary">{{item.ar[0].name}}</p>
                </div>
                <img style="width:3rem" src="../../assets/NECMusicImg/三个点.png">
              </li>
            </ul>
            <div class="flex justify-center align-center" style="height:40px">
              <span class="text-secondary">{{getSongDetails().song.moreText}}</span>
              <img style="width:20px" src="../../assets/NECMusicImg/大于.png">
            </div>
          </div>
          <!-- 歌单 -->
          <div class="songList row" v-if="getSongDetails().playList">
            <div class="row">
              <h4 class="mt-1 titleInfo mb-2">歌单</h4>
            </div>
            <div class="w-100 flex justify-between align-center" v-for="(item,i) of getSongDetails().playList.playLists" :key="i">
              <img class="w-30 mb_5" :src="item.coverImgUrl">
              <div class="w-70 flex-column ml-1">
                <h5 class="text-body mb_5" style="font-size:1.4rem">{{item.name}}</h5>
                <p class="text-muted">{{item.creator.nickname}}</p>
              </div>
            </div>
            <div @click="view='active1'" class="flex row justify-center align-center" style="height:40px">
              <span class="text-secondary">{{getSongDetails().playList.moreText}}</span>
              <img style="width:20px" src="../../assets/NECMusicImg/大于.png">
            </div>
          </div>
          <!-- 视频 -->
          <div class="video" v-if="getSongDetails().video">
            <div class="row">
              <h4 class="mt-1 titleInfo mb-2">视频</h4>
            </div>
            <div class="row" v-for="(item,i) of getSongDetails().video.videos" :key="i">
              <div class="w-100 flex justify-between align-center mb_5">
                <img class="w-40" style="border-radius:4px" :src="item.coverUrl">
                <div class="w-60 align-center flex-column ml-1">
                  <h5 class="text-body mb_5" style="font-size:1.4rem">{{item.title}}</h5>
                  <p class="text-muted">{{item.creator[0].userName}}</p>
                </div>
              </div>
            </div>
            <div class="flex justify-center align-center" style="height:40px">
              <span class="text-secondary">{{getSongDetails().video.moreText}}</span>
              <img style="width:20px" src="../../assets/NECMusicImg/大于.png">
            </div>
          </div>
          <!-- Mlog -->
          <div class="Mlog" v-if="getSongDetails().mlog">
            <div class="row">
              <h4 class="mt-1 titleInfo mb-2">Mlog</h4>
            </div>
            <div class="row MlogBox">
              <div v-for="(item,i) of getSongDetails().mlog.mlogs" :key="i">
                <div class="bgImg">
                  <img class="w-100" style="border-radius:4px" :src="item.resource.userProfile.avatarUrl">
                  <a href="javascript:;">{{item.matchFieldContent}}</a>
                </div>
                <div class="mt_5">
                  <p class="slogan">{{item.resource.mlogBaseData.text}}</p>
                </div>
                <div class="flex align-center mt_5">
                  <img style="width:20px;border-radius:50%" :src="item.resource.userProfile.avatarUrl">
                  <span style="font-size:5px" class="text-muted ml-1" >{{item.resource.userProfile.nickname}}</span>
                </div>
              </div>
              <div class="flex justify-center align-center" style="height:40px">
                <span class="text-secondary">{{getSongDetails().mlog.moreText}}</span>
                <img style="width:20px" src="../../assets/NECMusicImg/大于.png">
              </div>
            </div>
          </div>
          <!-- 主题 -->
          <div class="theme" v-if="getSongDetails().talk">
            <div class="row">
              <h4 class="mt-1 titleInfo mb-2">主题</h4>
            </div>
            <div class="row">
              <div class="w-100 flex align-center" v-for="(item,i) of getSongDetails().talk.talks" :key="i">
              <img class="w-30 mt_5" style="border-radius:4px;height:100px" :src="item.showCover.url">
              <div class="ml-1 w-60">
                <h5 style="font-size:16px">#{{item.talkName}}</h5>
                <div class="mt_5" style="font-size:14px">
                  <span class="mr-1 text-secondary">{{item.follows}}人关注</span>
                  <span class="text-secondary">{{item.participations}}参与</span>
                </div>
              </div>
            </div>
            </div>
          </div>
          <!-- 歌手 -->
          <div class="singer row" v-if="getSongDetails().artist">
            <div>
              <h4 class="mt-1 titleInfo mb-2">歌手</h4>
            </div>
            <div class="w-100 flex justify-between align-center" v-for="(item,i) of getSongDetails().artist.artists" :key="i">
              <div class="w-70 flex justify-between align-center">
                <img class="w-50 mt-1" style="border-radius:50%" :src="item.picUrl">
                <span class="text-body">{{item.name}}</span>
              </div>
              <div class="flex justify-between align-center">
                <img style="width:20px" class="mr-1" src="../../assets/NECMusicImg/用户.png">
                <span class="text-secondary">已入驻</span>
              </div>
            </div>
            <div class="flex justify-center align-center w-100" style="height:40px">
              <span class="text-secondary">{{getSongDetails().artist.moreText}}</span>
              <img style="width:20px" src="../../assets/NECMusicImg/大于.png">
            </div>
          </div>
          <!-- 专辑 -->
          <div v-if="getSongDetails().album">
            <div class="row">
              <h4 class="mt-1 titleInfo mb-2">专辑</h4>
            </div>
            <div class="row">
              <div class="w-100 mt_5 flex align-center " v-for="(item,i) of getSongDetails().album.albums" :key="i">
                <img class="w-30" style="border-radius:4px" :src="item.blurPicUrl">
                <div class="ml-1">
                  <p class="text-hover-info mb_5" style="font-size:1.4rem">{{item.name}}</p>
                  <p class="text-muted">{{item.artist.name}}</p>
                </div>
              </div>
            </div>
            <div class="flex justify-center align-center w-100" style="height:40px">
              <span class="text-secondary">{{getSongDetails().album.moreText}}</span>
              <img style="width:20px" src="../../assets/NECMusicImg/大于.png">
            </div>
          </div>
          <!-- 电台 -->
          <div class="Radio row" v-if="getSongDetails().djRadio">
            <div>
              <h4 class="mt-1 titleInfo mb-2">电台</h4>
            </div>
            <div>
              <div class="w-100 flex align-center" v-for="(item,i) of getSongDetails().djRadio.djRadios" :key="i">
                <img class="w-30" style="border-radius:4px" :src="item.picUrl">
                <div class="ml-1">
                  <p class="text-hover-info mb_5" style="font-size:1.4rem">{{item.name}}</p>
                  <p class="text-secondary">{{item.dj.nickname}}</p>
                </div>
              </div>
            </div>
            <div class="flex justify-center align-center w-100" style="height:40px">
              <span class="text-secondary">{{getSongDetails().djRadio.moreText}}</span>
              <img style="width:20px" src="../../assets/NECMusicImg/大于.png">
            </div>
          </div>
          <!-- 用户 -->
          <div class="row" v-if="getSongDetails().user">
            <div>
              <h4 class="mt-1 titleInfo mb-2">用户</h4>
            </div>
            <div>
              <div class="w-100 flex justify-between align-center" v-for="(item,i) of getSongDetails().user.users" :key="i">
                <div class="flex align-center w-60">
                   <img class="w-30" style="border-radius:50%" :src="item.avatarUrl">
                  <div class="ml-1">
                    <div class="flex align-center mb_5">
                      <p class="mr-1 text-hover-info" style="font-size:1.4rem">{{item.nickname}}</p>
                      <img style="width:15px" :src=" item.gender ==1? manIcon:womanIcon">
                    </div>
                    <p class="text-muted">{{item.signature}}</p>
                  </div>
                </div>
                <a href="javascript:;" style="border-radius:28px;border:1px solid red;padding:5px 10px 5px 10px;color:red;text-align:canter">+关注</a>
              </div>
            </div>
            <div class="flex justify-center align-center w-100" style="height:40px">
              <span class="text-secondary">{{getSongDetails().user.moreText}}</span>
              <img style="width:20px" src="../../assets/NECMusicImg/大于.png">
            </div>
          </div>
        </div>
      </mt-tab-container-item>
      <!-- 单曲 -->
      <mt-tab-container-item id="active1">
        <div class="single" v-if="singleList.length>0">
          <div class="row flex align-center pt-1 justify-between">
            <div class="flex align-center">
              <img class="mr-1" style="width:2.5rem" src="../../assets/NECMusicImg/播放_btmNav.png">
              <span>播放全部</span>
            </div>
            <div class="flex align-center">
              <img class="mr-1" style="width:2.5rem" src="../../assets/NECMusicImg/折叠_btmNav.png">
              <span>多选</span>
            </div>
          </div>
          <ul class="row songList">
            <li v-for="(item,i) of singleList"  @click="getSongUrl(item.id)" class="mb-2 w-100 flex justify-between align-center" :key="i">
              <div>
                <h5 class="text-hover-info mb_5">{{item.name}}</h5>
                <p class="text-secondary">{{item.artists[0].name}}</p>
              </div>
              <img style="width:3rem" src="../../assets/NECMusicImg/三个点.png">
            </li>
          </ul>
          <div class="text-center" v-if="singleList.length>=29">
            <span @click="loadmore(1)" style="font-size:1.4rem">加载更多</span>
          </div>
        </div>
        <div v-if="!singleList.length>0" class="text-center">
          <h3 style="font-size:1.6rem" class="text-danger">没有找到相关歌曲</h3>
        </div>
      </mt-tab-container-item>
      <!-- 云村 -->
      <mt-tab-container-item id="active2">
        2
      </mt-tab-container-item>
      <!-- 视频 -->
      <mt-tab-container-item id="active3">
        <div class="videoList" v-if="videoList.length>0">
          <div class="row" v-for="(item,i) of videoList" :key="i">
            <div class="w-100 flex justify-between align-center mb_5">
              <img class="w-40" style="border-radius:4px" :src="item.coverUrl">
              <div class="w-60 align-center flex-column ml-1">
                <h5 class="text-body mb_5" style="font-size:1.4rem">{{item.title}}</h5>
                <p class="text-muted">{{item.creator[0].userName}}</p>
              </div>
            </div>
          </div>
          <div class="text-center" v-if="videoList.length>=30">
            <span @click="loadmore(1014)" style="font-size:1.4rem">加载更多</span>
          </div>
        </div>
        <div v-if="!videoList.length>0" class="text-center">
          <h3 style="font-size:1.6rem" class="text-danger">没有找到相关视频</h3>
        </div>
      </mt-tab-container-item>
      <!-- 歌手 -->
      <mt-tab-container-item id="active4">
        <div class="singerList row" v-if="singerList.length>0">
          <div class="w-100 mb-1 flex justify-between align-center" style="height:60px" v-for="(item,i) of singerList" :key="i">
            <div class="w-70 flex justify-between align-center">
              <img style="border-radius:50%;height:55px" class="w-30" :src="item.picUrl">
              <span class="text-body">{{item.name}}</span>
            </div>
            <div class="flex justify-between align-center">
              <img style="width:20px" class="mr-1" src="../../assets/NECMusicImg/用户.png">
              <span class="text-secondary">已入驻</span>
            </div>
          </div>
          <div class="text-center w-100" v-if="singerList.length>=30">
            <span @click="loadmore(100)" style="font-size:1.4rem">加载更多</span>
          </div>
        </div>
        <div v-if="!singerList.length>0" class="text-center">
          <h3 style="font-size:1.6rem" class="text-danger">没有找到相关歌手</h3>
        </div>
      </mt-tab-container-item>
      <!-- 专辑 -->
      <mt-tab-container-item id="active5">
        <div class="albumList row" v-if="albumList.length>0">
          <div class="w-100 mt_5 flex align-center " v-for="(item,i) of albumList" :key="i">
            <img class="w-30" style="border-radius:4px" :src="item.blurPicUrl">
            <div class="ml-1">
              <p class="text-hover-info mb_5" style="font-size:1.4rem">{{item.name}}</p>
              <p class="text-muted">{{item.artist.name}}</p>
            </div>
          </div>
          <div class="text-center" v-if="singleList.length>=30">
            <span @click="loadmore(10)" style="font-size:1.4rem">加载更多</span>
          </div>
        </div>
        <div v-if="!albumList.length>0" class="text-center">
          <h3 style="font-size:1.6rem" class="text-danger">没有找到相关专辑</h3>
        </div>
      </mt-tab-container-item>
      <!-- 歌单 -->
      <mt-tab-container-item id="active6">
        <div class="playlist row" v-if="Playlist.length>0">
          <div class="w-100 flex justify-between align-center" v-for="(item,i) of Playlist" :key="i">
              <img class="w-30 mb_5" :src="item.coverImgUrl">
              <div class="w-70 flex-column ml-1">
                <h5 class="text-body mb_5" style="font-size:1.4rem">{{item.name}}</h5>
                <p class="text-muted">{{item.creator.nickname}}</p>
              </div>
          </div>
          <div class="text-center" v-if="Playlist.length>=30">
            <span @click="loadmore(1000)" style="font-size:1.4rem">加载更多</span>
          </div>
        </div>
        <div v-if="!Playlist.length>0" class="text-center">
          <h3 style="font-size:1.6rem" class="text-danger">没有找到相关歌单</h3>
        </div>
      </mt-tab-container-item>
      <!-- 电台 -->
      <mt-tab-container-item id="active7">
        <div class="rideoList row" v-if="rideoList.length>0">
          <div class="w-100 flex align-center" v-for="(item,i) of rideoList" :key="i">
            <img class="w-30" style="border-radius:4px" :src="item.picUrl">
            <div class="ml-1">
              <p class="text-hover-info mb_5" style="font-size:1.4rem">{{item.name}}</p>
              <p class="text-secondary">{{item.dj.nickname}}</p>
            </div>
          </div>
          <div class="text-center" v-if="rideoList.length>=30">
            <span @click="loadmore(1009)" style="font-size:1.4rem">加载更多</span>
          </div>
        </div>
        <div v-if="!rideoList.length>0" class="text-center">
          <h3 style="font-size:1.6rem" class="text-danger">没有找到相关电台</h3>
        </div>
      </mt-tab-container-item>
      <!-- 用户 -->
      <mt-tab-container-item id="active8">
        <div class="userList row" v-if="userList.length>0">
          <div class="w-100 flex justify-between align-center" v-for="(item,i) of userList" :key="i">
            <div class="flex align-center w-60">
                <img class="w-30" style="border-radius:50%" :src="item.avatarUrl">
              <div class="ml-1">
                <div class="flex align-center mb_5">
                  <p class="mr-1 text-hover-info" style="font-size:1.4rem">{{item.nickname}}</p>
                  <img style="width:15px" :src=" item.gender ==1? manIcon:womanIcon">
                </div>
                <p class="text-muted">{{item.signature}}</p>
              </div>
            </div>
            <a href="javascript:;" style="border-radius:28px;border:1px solid red;padding:5px 10px 5px 10px;color:red;text-align:canter">+关注</a>
          </div>
        </div>
        <div v-if="!userList.length>0" class="text-center">
          <h3 style="font-size:1.6rem" class="text-danger">没有找到相关用户</h3>
        </div>
      </mt-tab-container-item>
    </mt-tab-container>
    <btm-nav></btm-nav>
  </div>
</template>
<script>
import { mapGetters,mapMutations } from 'vuex'
import btmNav from "./btmNav"
export default {
  inject:['reload'],
  components:{
    btmNav
  },
  data(){
    return{
      show:false, //控制广告显示
      bool:true,  //控制弹出框显示
      keywords:"", //双向绑定输入的内容
      searchSongDetails:[], //保存返回数据内容
      historyInfo:[],  //保存搜索历史记录
      topSearchList:[], //保存热搜歌词
      singleList:[],//单曲列表
      videoList:[],//视频列表
      singerList:[],//歌手列表
      albumList:[],//专辑列表
      Playlist:[],//歌单列表
      userList:[],//用户列表
      rideoList:[],
      defaults:"",
      view:"active0",
      options:["综合","单曲","云村","视频","歌手","专辑","歌单","电台","用户"],
      manIcon:require("../../assets/NECMusicImg/性别男.png"),
      womanIcon:require("../../assets/NECMusicImg/性别女icon.png")
    }
  },
  methods:{
     ...mapMutations(['setSongDetails','setSearchKeyWorld']),
    ...mapGetters(['getSearchKeyWorld','getSongDetails']),
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
        // this.$router.push("/search")
        this.reload()
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
    },
    // 搜索分类
    classifySearch(val){
      if(!this.getSearchKeyWorld()){
        return;
      }
      this.axios.get("/search",{
        params:{
          keywords:this.getSearchKeyWorld(),
          type:val
        }
      }).then(res=>{
        console.log(res);
        // 如果type为1则，用户搜索的是单曲
        if(val==1&&res.data.result.songs.length>0){
          this.singleList=res.data.result.songs;
          console.log(this.singleList)
          return;
        }else{
          this.singleList=[];
        }
        // 如果type为1014则，用户搜索的是视频
        if(val==1014&&res.data.result.videos.length>0){
          this.videoList=res.data.result.videos;
          console.log(this.videoList)
          return;
        }
        // 如果type为100则，用户搜索的是歌手
        if(val==100&&res.data.result.artists.length>0){
          this.singerList=res.data.result.artists;
          console.log( this.singerList)
          return;
        }
        // 如果type为10则，用户搜索的是专辑
        if(val==10&&res.data.result.albums.length>0){
          this.albumList=res.data.result.albums;
          console.log(this.albumList);
          return;
        }
        // 如果type为1000则，用户搜索的是歌单
        if(val==1000&&res.data.result.playlists.length>0){
          this.Playlist=res.data.result.playlists;
          console.log(this.Playlist);
          return;
        }
         // 如果type为1009则，用户搜索的是电台
        if(val==1009&&res.data.result.djRadios.length>0){
          this.rideoList=res.data.result.djRadios;
          console.log(this.rideoList);
          return;
        }
        // 如果type为1002则，用户搜索的是用户
        if(val==1002&&res.data.result.userprofiles.length>0){
          this.userList=res.data.result.userprofiles;
          console.log(this.userList);
          return;
        }
      })
    },
    // 加载更多
    loadmore(val){
      if(!this.getSearchKeyWorld()){
        return;
      }
      this.axios.get("/search",{
        params:{
          keywords:this.getSearchKeyWorld(),
          type:val
        }
      }).then(res=>{
        console.log(res);
        if(val==1){
        this.singleList=this.singleList.concat(res.data.result.songs);
          console.log(this.singleList)
          return;
        }
        if(val==1014){
          this.videoList=this.videoList.concat(res.data.result.videos);
          console.log(this.videoList)
          return;
        }
        if(val==100){
          this.singerList=this.singerList.concat(res.data.result.artists);;
          console.log( this.singerList)
          return;
        }
        if(val==10){
          this.albumList=this.albumList.concat(res.data.result.albums);;
          console.log( this.albumList)
          return;
        }
         if(val==1000){
           this.Playlist= this.Playlist.concat(res.data.result.playlists);
          console.log( this.Playlist)
          return;
        }
         if(val==1009){
           this.rideoList= this.rideoList.concat(res.data.result.djRadios);
          console.log( this.rideoList)
          return;
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
          this.$store.commit("setSongName",res.data.songs[0].name)
          // this.songPic=res.data.songs[0].al.picUrl;
          console.log(this.$store.getters.getSongPic)
          })
      }).then(res=>{
        var a3=document.getElementById("a3");
          a3.play();
          console.log(a3)
      }).then(res=>{
        this.getLyric(songId);
      })
    },
    // 获取当前歌曲的歌词
    getLyric(songId){
      if(this.$store.getters.getLyricArr.length>0){
        this.$store.commit("setLyricArr",[])
      }
      this.axios.get("/lyric",{
        params:{
          id:songId
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
.hide{
  display: none;
}
.searchDetails{
  margin-bottom: 40px;
  position: relative;
}
  /* 固定栏 */
.searchDetails .fixed{
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 10;
  background-color: #fff;
}
  /* 搜索栏 */
.search{
  height: 4rem;
  width: 90%;
  margin: 0 auto;
  margin-top: 1rem;
}
.search>div{
border-bottom: 1px solid #999;
}
.search>div input{
  width: 70%;
  height: 3.5rem;
  border: none;
  padding: 0;
  outline-color: #fff;
  caret-color: black;
  font-size: 1.4rem;
}
.search .back,
.search .singer{
  width: 30px;
}
/* 搜索弹出框 */
.alert{
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
.alert>p{
  margin-left: 10px;
  font-size: 1.4rem;
  font-weight: 600;
}
 /* 选项导航栏  */
  .mint-navbar{
    border-bottom: 1px solid #cccaaa;
  }
  .mint-navbar .mint-tab-item.is-selected{
    font-size: 1.4rem;
    color:red;
    border-bottom: 3px solid #f00;
  }
  .mint-tab-item-label{
    width:5rem !important;
  }
  /* 综合 标题 */
  .searchDetails .composite,
  .searchDetails .single,
  .searchDetails .videoList,
  .searchDetails .singerList,
  .searchDetails .albumList,
  .searchDetails .playlist,
  .searchDetails .rideoList,
  .searchDetails .userList{
    margin-top: 100px;
  }
  .searchDetails .titleInfo{
    font-size: 1.5rem;
  }
  .searchDetails .composite .title img{
    width: 1.5rem;
    margin-right: 5px;
  }
  .searchDetails .composite .title a{
    font-size: 1.2rem;
    border: 1px solid #aaa;
    padding:2px 5px 2px 5px;
    border-radius: 28px;
  }
  .searchDetails .songList li{
    height: 40px;
  }
  .searchDetails .songList li:first-child{
    margin-top: 20px;
  }
  /* Mlog */
  .Mlog .MlogBox{
    box-sizing: border-box;
    display: flex;
    justify-content: space-evenly;
  }
  .Mlog .MlogBox>div{
    width: 47%;
    margin-right: 10px;
  }
  .Mlog .MlogBox .bgImg{
     position: relative;
  }
  .Mlog .MlogBox>div:last-child{
    margin-right: 0;
  }
  .Mlog .MlogBox>div a{
    color: #fff;
    background-color: rgba(100,100,100,.6);
    padding: 5px 10px 5px 10px;
    border-radius: 28px;
    position: absolute;
    left: 10px;
    bottom:10px;
  }
  .Mlog .MlogBox>div .slogan{
    height: 32px;
    font-size: 1.2rem;
    text-overflow: ellipsis;
    overflow: hidden;
  }
</style>