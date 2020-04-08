<template>
  <div class="authCode w-100">
    <div class="back flex w-100">
      <img @click="back" src="../../assets/NECMusicImg/返回箭头.png">
      <span>手机号验证码</span>
    </div>
    <div class="acquire">
      <h5 class="text-success">验证码已发送至</h5>
      <div class="trigger w-flex_sb">
        <p>+86{{this.$store.getters.getPhone}}</p>
        <a class="send text-info" href="javascript:;">{{n}}</a>
      </div>
    </div>
    <div class="input w-80 flex">
      <input v-for="(item,n) of i" :key="n" v-model="value[n]" maxlength="1" type="text">
    </div>
    <button @click="confirm" class="w-80 btn">确定</button>
  </div>
</template>
<script>
export default {
  data(){
    return{
      value:['','','',''],
      n:60,
      i:4
    }
  },
  methods:{
    // 返回上一页
    back(){
      this.$router.push("/phoneLogin")
    },
    // 发送数据
    send(){
      // 获取触发事件元素
      var a=document.querySelector(".authCode .acquire .send");
      // 添加事件
      a.addEventListener("click",()=>{
        this.axios.get("/captcha/sent",{
        params:{
          phone:this.$store.getters.getPhone
        }
      })
      })
    },
    reduce(){
      // 功能：60秒后重新发送
      var time=setInterval(()=>{
        this.n--
      if(this.n==0){
        this.n="重新获取";
        this.send();
        clearInterval(time);
      }
        },1000)
    },
    confirm(){
      var captcha="";
      for(var key of this.value){
        captcha+=key;
      }
      // console.log(captcha)
      // console.log(this.$store.getters.getPhone)
      // 发送请求验证验证码是否正确
      this.axios.get("/captcha/verify",{
        params:{
          phone:this.$store.getters.getPhone,
          captcha:captcha
        }
      }).then(res=>{
        console.log(res)
        this.$store.commit("setCaptcha",captcha);
        this.$router.push("/NECMusicSignUp");
      }).catch(err=>{this.$toast("验证码不正确")})
    }
  },
  created(){
    this.reduce()
  }
}
</script>
<style scoped>
  /* 返回栏  */
  .authCode .back{
    height:30px;
    margin-top: 1rem;
  }
  .authCode .back img{
    width:3rem;
    margin-right: 2rem;
    margin-left: 1rem;
  }
  .authCode .back span{
    font-size: 1.4rem;
    line-height: 30px;
    color: #000;
    font-weight: 400;
  }
  /* 获取验证码 */
  .authCode .acquire{
    padding: 10px;
    margin-top: 4rem;;
  }
  .authCode .acquire h5{
    font-size: 1.4rem;
    font-weight: 600;
  }
  .authCode .acquire .trigger p{
    color: #999;
    font-size: 1.4rem;
  }
  .authCode .acquire .trigger a{
    font-size: 1.5rem;
  }
  .authCode .input{
    margin: 0 auto;
    margin-top: 3rem;
  }
  .authCode .input input{
    width: 33.3%;
    margin-right: 10px;
    border:none;
    border-bottom: 1px solid #999;
    outline-color: #fff;
    font-size: 1.8rem;
  }
  .authCode .input input:last-child{
    margin-right: 0;
  }
  .authCode .btn{
     height: 4rem;
     margin-left: 10%;
     margin-top: 3rem;
     background-color: #f00;
     color: #fefefe;
     font-size: 1.6rem;
     border-radius: 28px;
   }
</style>