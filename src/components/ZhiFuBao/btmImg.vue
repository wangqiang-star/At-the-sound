<template>
  <div>
    <img :src="focused? selectedImage : nomarImage" slot="icon">
  </div>
</template>
<script>
export default {
  props:{
    focused:{
      type:Boolean
    },
    nomarImage:{
      type:String
    },
    selectedImage:{
      type:String
    }
  }
}
</script>
<style scoped>
  img{
    width:30px;
  }
</style>