<template>
  <div class="signin w-100">
    <div class="w-90 back flex">
      <img @click="back" src="../../assets/NECMusicImg/返回箭头.png">
      <span>手机号登录</span>
    </div>
    <div class="w-90 input">
      <a class="w-fr mt-1" href="javascript:;">忘记密码？</a>
      <input class="w-80" v-model="key" type="text" placeholder="请输入密码">
    </div>
    <button @click="signIn"  class="w-90 btn">登录</button>
  </div>
</template>
<script>
export default {
  data(){
    return{
      key:""
    }
  },
  methods:{
    signIn(){
      // 调用vuex中的getters获取手机号
      var phone=this.$store.getters.getPhone;
      this.axios.get("/login/cellphone",{
        params:{
          phone:phone,
          password:this.key
        }
      }).then(res=>{
        // 登录成功
        console.log(res)
        if(res.data.code==200){
          this.$toast("登录成功");
          this.$router.push("/NECMusic");
          // this.$store.commit("setUserId",res.data.account.id)
        localStorage.setItem("uid",res.data.account.id);
        // localStorage.setItem("token",res.data.token);
        this.$store.commit("setToken",res.data.token);
        console.log(localStorage.getItem("uid"));
        console.log(localStorage.getItem("token"))
        }else{
          this.$toast("密码不正确");
        }
      })
      // console.log(this.$store.getters.getPhone)
    },
    back(){
      this.$router.push("/phoneLogin")
    }
  }
}
</script>
<style scoped>
  .signin .back{
    height: 40px;
    line-height: 40px;
    margin: 0 auto;
  }
  .signin .back img{
    width:30px;
    margin-right: 10px;
  }
   .signin .back span{
     font-size: 1.5rem;
     font-weight: 600;
   }
   .signin .input{
     margin: 0 auto;
     margin-top: 40px;
     border-bottom: 1px solid #666;
   }
   .signin .input input{
     border: none;
     height: 4rem;
     caret-color: red;
     outline-color: #fff;
     /* padding:10px 0 10px 0; */
     font-size: 1.8rem;
     color: #999;
   }
   .signin .btn{
     height: 4rem;
     margin-left: 5%;
     margin-top: 3rem;
     background-color: #f00;
     color: #fefefe;
     font-size: 1.6rem;
     border-radius: 28px;
   }
</style>