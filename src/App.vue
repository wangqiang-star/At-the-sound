<template>
  <div id="app">
      <router-view v-if="isRouterAlive"/>
  </div>
</template>
<script>
export default {
  name:"app",
  provide(){
    return{
      reload:this.reload
    }
  },
  data(){
    return{
      isRouterAlive:true
    }
  },
  methods:{
    reload(){
      this.isRouterAlive=false;
      this.$nextTick(function(){
        this.isRouterAlive=true
      })
    }
  }
}
</script>
<style>
  /* 引入公共样式文件 */
  /* 引入样式文件 */
  @import url("./common/css/free.css");
  /* 引入小动画样式文件 */
  @import url("./common/css/animate.css");
  /* 引入icon文字样式文件 */
  @import url("./common/css/icon.css");
  ul,p,h1,h2,h3,h4,h5,h6,a{
    margin: 0;
    padding: 0;
  }
  ul{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  .d-f{
    display: flex;
    align-items: center;
    flex-wrap:wrap; 
  }
  .d-cf{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .f-btn{
    justify-content: space-between;
  }
  .f-ard{
    justify-content: space-around
  }
  .d-center{
    width: 95%;
    margin:0 auto;
  }
  .c-a{
    color:#aaa;
  }
  .font-w{
    font-weight: 600;
  }

   /* 重置样式 */
  html{
    font-size: 10px;
  }
  html,body{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  a{
    text-decoration: none;
  }
  ul{
    list-style: none;
  }
  .p-relative{
    position: relative;
  }
  .w-flex_sb{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .w-flex_sa{
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .w-flex_fc{
    display: flex;
    flex-direction:column; 
  }
  .w-100{
    width:100%;
  }
  .w-90{
    width:90%
  }
  .w-80{
    width: 80%;
  }
  .w-flex-center{
    align-items: center;
  }
  .row{
    width:90%;
    margin: 0 auto;
  }
  .w-fl{
    float: left;
  }
  .w-fr{
    float: right;
  }
</style>
