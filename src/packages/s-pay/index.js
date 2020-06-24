import Pay from './src/index.vue'
Pay.install = function (Vue) {
  Vue.component(Pay.name, Button)
}
export default Pay