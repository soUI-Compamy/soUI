/***
 * 自定义button组件  暴露组件
 */
// install 是默认的方法,供按需引入。
// 当外界在 use 这个组件的时候，就会调用本身的 install 方法，同时传一个 Vue 这个类的参数。
import Button from './src/button.vue'
Button.install = function (Vue) {
  Vue.component(Button.name, Button)
}
export default Button
