# 弹窗组件
----
### 基础用法
 <div class="demo-block">
      <so-button @click="modal1Click">modal1</so-button>
      <so-button @click="modal2Click">modal2</so-button>
      <so-button @click="modal3Click">modal3</so-button>
       <so-button @click="modal4Click">modal4</so-button>
      <so-modal
        :modalShow="modalShow"
        :type="modalType"
        :placeHolder="promptText"
        :promptKind="promptKind"
        @modalClose="modalClose"
      >
        <div style="width:600px;height:400px;text-align:center;background:#fff;" v-if="modalType === 'modal1'">
          modal1
        </div>
        <div  v-else-if="modalType === 'modal3'">
          modal3
        </div>
          <div  v-else-if="modalType === 'modal4'">
          modal4
        </div>
      </so-modal>
  </div>

::: demo

```html
    <div class="wrp_modal">
        <so-modal
        :modalShow="modalShow"
        :type="modalType"
        @modalClose="modalClose"
        :placeHolder="promptText"
        :promptKind="promptKind"
      >
        <div  v-if="modalType === 'modal1'">
          modal1
        </div>
        <div   v-else-if="modalType === 'modal3'">
          modal3
        </div>
        <div  style="width:200px;height:100px" v-else-if="modalType === 'modal4'">
          modal4
        </div>
      </so-modal>
    </div>
    <script>
        export default{
            data(){
                return{
                    modalShow: false,
                    modalType: 'modal2',
                    promptText: '操作成功',
                    promptKind: 'success',
                }
            },
            methods:{
                modal1Click: function() {
                    this.modalShow = true;
                    this.modalType = 'modal1';
                },
                modal2Click: function() {
                    this.modalShow = true;
                    this.modalType = 'modal2';
                },
                modal3Click: function() {
                    this.modalShow = true;
                    this.modalType = 'modal3';
                },
                 modal4Click: function() {
                    this.modalShow = true;
                    this.modalType = 'modal4';
                },
                modalClose: function() {
                    console.log('关闭弹窗')
                    this.modalShow = false;
                },
            }
        }
    </script>
```
:::

### 接受参数
| 参数 | 说明 | 类型 | 默认值  
| :----:| :----: | :----: | :----:    
|modalType| 弹窗类型| String| modal1| 
|modalShow| 弹窗显示| Boolean| false|
|placeHolder|modal2提示文案| String|操作成功|
|placeHolder|modal2提示icon|String|success|
|hideTime| modal2显示的持续时间| String| 1500|
|position| 弹窗位置| Object|{left:0,top:0}|
### 弹窗类型说明
|参数|说明|
|:----:|:----:|
|modal1|完全自定义对话框|
|modal2|成功，失败，警告提示|
|modal3|右侧拉显示弹窗|
|modal4|底部弹窗|
### 事件类型
|事件|说明|
|:----:|:----:|
|modalClose|弹窗关闭回调|
