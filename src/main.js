/**
 * 引入UI组件库
 * 使用代码显示组件  markDown支持 组件
 * 引入需要的主体样式
 */
import Vue from 'vue'
import App from './App'
import router from './router'
import demoBlock from './components/demo-block.vue'
import SoUI from '../src/packages/index'
import './theme/index.less'
Vue.component('demo-block', demoBlock)
Vue.config.productionTip = false
Vue.use(SoUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
