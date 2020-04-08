<template>
  <div class="phoneLogin">
    <div>
      <img @click="back" src="../../assets/NECMusicImg/返回箭头.png"><span>手机号登录</span>
    </div>
    <p>未注册手机号登录后将自动创建账号</p>
    <input v-model="phone" type="text" placeholder="请输入手机号">
    <!-- <input type="text" placeholder="请输入密码"> -->
    <a @click="detection" href="javascript:;">下一步</a>
  </div>
</template>
<script>
export default {
  data(){
    return{
      phone:""
    }
  },
  methods:{
    back(){
      this.$router.push("/NECMusicLogin")
    },
    detection(){
      // 修改vuex中的phone
      this.$store.commit("setPhone",this.phone);
      // 判断是否输入手机号
       if(!this.phone){
        this.$toast("请输入手机号");
        return;
      }
      console.log(this.phone)
      var reg=/1[2-9]{2}\d{8}/;
      // 检验手机号格式正确
      if(reg.test(this.phone)){
        // 判断该手机号是否注册
        console.log(1)
        this.axios.get("/cellphone/existence/check",{
          params:{phone:this.phone}
          }).then(res=>{
          console.log(res)
          if(res.data.exist==1){
          //如果注册就跳转手机登录完成登录
          this.$router.push("/NECMusicSignIn")
          }else{
          // 否侧跳转到注册页并发送验证码
          this.axios.get("/captcha/sent",{
          params:{
          phone:this.phone
         }
         })
          this.$router.push("/NECMusicAuthCode")
          }
          })
      }else{
        this.$toast("该手机号不存在");
        return;
      }
    }
  }
}
</script>
<style scoped>
  .phoneLogin{
    width:100%;
    display: flex;
    flex-direction: column;
  }
  .phoneLogin div{
    display: flex;
    border-bottom: 1px solid #ccc;
    padding: 5px;
  }
  .phoneLogin img{
    width: 30px;
    margin-right: 10px;
    margin-left: 5px;
  }
  .phoneLogin span{
    font-size: 2rem;
    font-weight: 600;
  }
  .phoneLogin p{
    width: 90%;
    color: #999;
    margin-left: 20px;
    font-size: 1.4rem;
    margin-top: 20px;
  }
  .phoneLogin input{
    width: 90%;
    border: none;
    border-bottom: 1px solid #000;
    font-size: 1.8rem; 
    margin-left: 20px;
    margin-top: 20px;
    outline-color:#fff;
  }
  .phoneLogin a{
    width:90%;
    height: 35px;
    border:1px solid #f00;
    background-color: #f00;
    margin-left: 20px;
    margin-top: 25px;
    border-radius: 25px;
    color:#fff;
    font-size: 1.6rem;
    text-align: center;
    line-height: 35px;
  }
</style>