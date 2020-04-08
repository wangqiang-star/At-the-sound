<template>
  <div class="NECMusicLogin">
    <!-- 上面的内容-->
    <div class="topBox">
      <img src="../../assets/NECMusicImg/音乐.png">
    </div>
    <!-- 下面的内容-->
    <div class="btmBox">
      <a @click="phoneLogin" class="btn1">手机号登录</a>
      <router-link to="/NECMusic"  class="btn2">立即体验</router-link>
      <div>
        <router-link to="/" v-for="(item,i) of icons" :key="i">
          <img :src="item.img">
        </router-link>
      </div>
      <div class="checkBox animated" :class="{swing:bool}">
        <input @change="isChecked" type="checkbox"><span>同意&lt;&lt;用户登录&gt;&gt;和&lt;&lt;隐私政策&gt;&gt;</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      checked:false,
      bool:false,
      icons:[{img:require('../../assets/NECMusicImg/微信登录.png')},
             {img:require('../../assets/NECMusicImg/QQ登录.png')},
             {img:require('../../assets/NECMusicImg/微博登录.png')},
             {img:require('../../assets/NECMusicImg/邮箱登录.png')}],
    }
  },
  methods:{
    phoneLogin(){
      setTimeout(()=>{this.bool=false},1000)
      if(this.checked==false){
        this.$toast("请先勾选同意<<用户登录>>和<<隐私政策>>")
        this.bool=true;
        // console.log(this.checked)
      }else{
        this.$router.push("/phoneLogin")
        // console.log(this.checked)
      }
    },
    isChecked(e){
      this.checked=e.target.checked
    }
  }
}
</script>
<style scoped>
  html,body{
    height: 100%;
    padding: 0;
    margin: 0;
  }
  .NECMusicLogin{
    height: 100%;
    background-color: #77598b;
  }
  /* 上面的块 */
 .NECMusicLogin .topBox{
    width:100%;
    height:450px;
 }
 .NECMusicLogin .topBox img{
   position: absolute;
   left: 45%;
   top:30%;
 }
 /* 下面的块 */
 .NECMusicLogin .btmBox{
   width:100%;
   position: absolute;
   background-color: #77598b;
   top:449px;
   bottom: 0;
   left: 0;
   display: flex;
   flex-direction: column;
   align-items: center;
   box-sizing: border-box;
 }
 .NECMusicLogin .btmBox .btn1{
   width:70%;
   height: 50px;
   font-size: 2rem;
   text-align: center;
   background-color: #fff;
   color:#cc5555;
   border:1px solid #cc5555;
   border-radius:25px;
   line-height: 50px;
   font-weight: 600;
   margin-bottom: 20px;
 }
 .NECMusicLogin .btmBox .btn2{
    width:70%;
   height: 50px;
   font-size: 2rem;
   text-align: center;
   background-color: #cc3333;
   color:#fff;
   border:1px solid #fff;
   border-radius:25px;
   line-height: 50px;
   font-weight: 600;
 }
 /* 登录图标 */
 .NECMusicLogin .btmBox img{
   width:40px;
   background-color: #fff;
   border-radius:50%; 
   margin-right: 10px;
   border: 1px solid #fff;
   margin-top: 10px;
 }
 .NECMusicLogin .btmBox .checkBox{
   width:100%;
   display: flex;
   justify-content: center;
   align-items: center;
   color:rgb(230, 212, 212);
   font-weight: 400;
   margin-top: 10px;
 }
</style>
