import Qrcode from './src/index.vue'
Qrcode.install = function (Vue) {
  Vue.component(Qrcode.name, Button)
}
export default Qrcode