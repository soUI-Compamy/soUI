/**
 * 引入UI组件库
 * 使用代码显示组件  markDown支持 组件
 * 引入需要的主体样式
 */
import Vue from 'vue'
import App from './App'
import router from './router'
import demoBlock from './components/demo-block.vue'
import SoUI from '../packages/index.js'
import '../packages/theme-default/index.less'
Vue.component('demo-block', demoBlock)
Vue.config.productionTip = false
console.log('%c ','background-image:url("https://static.soyoung.com/sy-pre/7942002eda6ddac2-1571297816113.gif");background-size:120% 120%;background-repeat:no-repeat;background-position:center center;line-height:100px;padding:30px 120px;');
Vue.use(SoUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
