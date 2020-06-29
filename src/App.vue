<template>
  <div id="app">
    <div class="background" :style="{'position':isIndex?'absolute':''}">
      <img :src="imgSrc" width="100%" height="100%" alt="" v-if="isIndex" />
      <mainHeader v-if="!isIndex"></mainHeader>
    </div>
      <div class="container" v-if="!isIndex">
        <sideNav class="nav"></sideNav>
        <router-view class="view"></router-view>
      </div>
      <router-view class="page" v-else></router-view>
      <mainFooter v-if="!isIndex"></mainFooter>
  </div>
</template>

<script>
  import mainHeader from './components/header.vue'
  import mainFooter from './components/footer.vue'
  import sideNav from './components/side-nav.vue'

  export default {
    name: 'app',
    data () {
      return {
        init: true,
        isIndex: true,
        imgSrc:'https://static.soyoung.com/sy-pre/user-register-backgroundimage-1593414600737.jpg'
      }
    },
    watch: {
      $route () {
        this.isIndex = this.$route.name === 'index'
      }
    },
    mounted () {
  
    },
    components: {
      mainHeader,
      sideNav,
      mainFooter
    }
  }
</script>

<style lang="less" type="text/less">
  @import "./assets/less/index";
.background{
    width:100%;  
    height:100%;  /**宽高100%是为了图片铺满屏幕 */
    z-index:-1;
}

  .container {
    margin: 48px auto;
    width: 90%;
    background-color: #fff;
    box-shadow: 0 4px 30px 0 rgba(223, 225, 230, 0.5);
    .nav {
      float: left;
      width: 210px;
    }
    .view {
      float: left;
      width: calc(~'100% - 215px');
      padding: 32px 48px 48px;
      box-sizing: border-box;
    }
  }

  .container:after {
    content: "";
    clear: both;
    display: block;
  }
</style>
