<template>
  <div class="NECMusicSignUp w-100">
    <div class="w-90 back flex">
      <img @click="back" src="../../assets/NECMusicImg/返回箭头.png">
      <span>手机号登录</span>
    </div>
    <div class="flex-column mt-2 input">
      <input class="w-80 mb-1" v-model="nickname" type="text" placeholder="请输入昵称">
      <input class="w-80" v-model="password" type="text" placeholder="请输入密码">
    </div>
    <button @click="signUp" class="w-80 btn">确定</button>
  </div>
</template>
<script>
export default {
  data(){
    return{
      nickname:"",
      password:""
    }
  },
  methods:{
    // 返回
    back(){
      this.$router.push("/phoneLogin")
    },
    // 注册
    signUp(){
      var phone=this.$store.getters.getPhone;
      var captcha=this.$store.getters.getCaptcha;
      this.axios.get("/register/cellphone",{
        params:{
          phone:phone,
          password:this.password,
          captcha:captcha,
          nickname:this.nickname
        }
      }).then(res=>{
        this.$toast("注册成功");
        this.$router.push("/NECMusicSignIn");
      })
    }
  }
}
</script>
<style scoped>
  .NECMusicSignUp .back{
    height: 40px;
    line-height: 40px;
    margin: 0 auto;
  }
  .NECMusicSignUp .back img{
    width:30px;
    margin-right: 10px;
  }
   .NECMusicSignUp .back span{
     font-size: 1.5rem;
     font-weight: 600;
   }
   .NECMusicSignUp .btn{
     height: 4rem;
     margin-left: 10%;
     margin-top: 3rem;
     background-color: #f00;
     color: #fefefe;
     font-size: 1.6rem;
     border-radius: 28px;
   }
   .NECMusicSignUp .input{
     width: 100%;
     margin-left: 10%;
   }
    .NECMusicSignUp .input input{
      height:4rem;
      border: none;
      border-bottom: 1px solid #999;
      outline-color: #fff;
      font-size: 1.6rem;
      caret-color: #f00;
    }
</style>