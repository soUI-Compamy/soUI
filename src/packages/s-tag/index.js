import Tag from './src/index.vue'
Tag.install = function (Vue) {
  Vue.component(Tag.name, Button)
}
export default Tag