/**
 * 注册所有组件
 * soButton so-button
 * 暴露组件安装方法 支持 按需引入
 */
import SoButton from './s-button/index.js'
import SoPay from './s-pay/index.js'
import SoQrcode from './s-qrcode/index.js'
import SoModal from './s-modal/index.js'
import SoTag from './s-tag/index.js'
const components = [
    SoButton,
    SoPay,
    SoQrcode,
    SoModal,
    SoTag
]
const install = Vue=>{
    if(install.installed) return
    components.map(component => Vue.component(component.name, component))
}
console.log(components)
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
  }
  export default {
    install,
    SoButton,
    SoPay,
    SoQrcode,
    SoModal,
    SoTag
  }
