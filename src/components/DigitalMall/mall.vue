<template>
  <div class="mall">
    <headers></headers>
    <carousel></carousel>
    <mains></mains>
  </div>
</template>
<script>
import Headers from "./header"
import Login from './Login'
import carousel from './carousel'
import Mains from './main'
export default {
  components:{
    Headers,
    Login,
    carousel,
    Mains
  }
}
</script>
<style>
    html{
      font-size: 10px;
    }
    ul,p,h1,h2,h3,h4,h5,h6,div,a{
      margin: 0;
      padding: 0;
      outline: none;
      box-sizing: border-box;
    }
    a{
      text-decoration: none;
    }
    a:hover{
      text-decoration: none;
    }
    ul{
      list-style: none;
    }
    .container{
      width:1200px;
      margin: 0 auto;
      padding: 0;
    }
    .w-flex_sa{
      display: flex;
      justify-content:space-around;
      align-items: center;
    }
    .w-flex_sb{
      display: flex;
      justify-content:space-between;
      align-items: center;
    }
    .w-flex_c{
      display: flex;
      flex-direction:column; 
      align-items: center;
    }
</style>