<style type="text/less" lang="less">
  @import "../assets/less/index";
  @keyframes turn{
      100%{-webkit-transform:rotate(360deg);}
    }
  .page-header {
    box-shadow: 0 10px 60px 0 rgba(29,29,31,0.07);
    opacity: 0.98;
    width: 100%;
    height: 80px;
    .img{
      display:inline-block;
      width:60px;
      height:60px;
      border-radius: 30px;
      &:hover{
        animation:turn 0.1s ease-in infinite; 
      }
    }
    .header-container{
      width: 90%;
      margin: 0 auto;
      display: flex;
      align-items: center;
      height: 80px;
      justify-content: space-between;
    }
  }
</style>
<template>
  <header class="page-header" :style="$route.name === 'index' ? 'box-shadow:none' : 'box-shadow:0 10px 60px 0 rgba(29,29,31,0.07)'">
    <div class="header-container">
      <router-link :to="{name: 'index'}"><img src="../assets/img/logo.png"  class="img"></router-link>
      <router-link :to="{name: 'giud'}">组件</router-link>
    </div>
  </header>
</template>

<script>
  export default {
    data () {
      return {

      }
    },
    mounted(){

    }
  }
</script>
