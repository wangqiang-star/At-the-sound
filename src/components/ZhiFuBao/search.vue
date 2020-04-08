<template>
  <div class="leftSearch">
    <img src="../../font/icon/搜索.png" alt="">
    <input type="text" :placeholder="placeholder">
    <img src="../../font/icon/话筒.png" alt="">
  </div>
</template>
<script>
export default {
  props:{
    placeholder:{
      type:String
    }
  }
}
</script>
<style scoped>
    /* 搜索框 */
   .leftSearch{
    width: 70%;
    height:30px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.938);
    margin-top:15px;
    margin-left:10px; ;
  }
  .leftSearch>img{
    width:18px;
  }
  .leftSearch input{
    outline: none;
    border: none;
    background-color:rgba(200,200, 190, 0);
    padding-left:20px;
    padding-bottom: 8px;
    margin-top:10px; 
    color:#fff;
  }
</style>