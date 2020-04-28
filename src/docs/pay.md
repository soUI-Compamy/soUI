# 支付组件
----
### 基础用法
 <div class="demo-block">
    <so-pay ref="pays"
          :show="showPayModal"          
          @close="close"
          @forget="forget"
          @input-end="inputEnd"></so-pay>
  </div>

::: demo

```html
      <div>
        <so-pay 
          ref="pays"
          :show="showPayModal"           
          @close="close"
          @forget="forget"
          @input-end="inputEnd"
          >
        </so-pay>
      </div>
      <script>
        export default {
          data() {
            return {
              showPayModal: true,
            }
          },
          methods:{
            close(){
              console.log('关闭密码')
            },
            forget(){
              console.log('忘记密码')
            },
            inputEnd(val){
              console.log('输入的密码是:'+val)
            }
          }
        }
      </script>
```
:::
### 接受参数
| 参数 | 说明 | 类型 | 默认值  |
| :----:| :----: | :----: | :----:    |
| show | 密码框的显示隐藏 | Boolean |   false  |
| digit | 密码的位数	 | Number |   6   |
| ref | 获取当前插件实例	 | String |   -  |
| title | 弹窗标题	 | String |   请输入支付密码   |
| loading-text | 正在支付的文字提示	 | String |   正在支付   |
| finished-text | 支付成功的文字提示	 | String |   支付成功   |
| duration | 支付成功提示的显示时间	 | Number |   500   |
### 事件
| 事件名 |  说明  | 参数 |
| :----:| :----:| :----:|
| input-end| 密码输入完成的回调| -|
| close| 密码弹窗关闭后的回调| -|
| forget| 点击忘记密码的回调|-|



