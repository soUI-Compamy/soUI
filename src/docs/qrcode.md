# 二维码组件
----
### 基础用法

 <div class="demo-block">
     <div class="wrp_code"><so-qrcode :qrcodeurl="qrcodeurl" :size="180" @changeColor="changeColor" :fgColor="fgColor"></so-qrcode></div>
  </div>

::: demo

```html
    <div class="wrp_code">
        <so-qrcode :qrcodeurl="qrcodeurl" @imgData="imgData" :size="282"></so-qrcode>
    </div>
    <script>
        export default{
            data(){
                return{
                    qrcodeurl:'https://www.soyoung.com/',
                    fgColor:'#2CC7C5'
                }
            },
            methods:{
                imgData(){
                    console.log('绘制')
                },
                changeColor(){
                    this.fgColor =   "#"+ (Math.random() * 0x1000000 | 0).toString(16)
                }
            }
        }
    </script>
```
:::

### 接受参数
| 参数 | 说明 | 类型 | 默认值  |
| :----:| :----: | :----: | :----:    |
| qrcodeurl| 二维码显示地址| String| https://www.soyoung.com
| size| 二维码尺寸| Number,String| 100|
| level| 尺寸类型| String| -|
| bgColor| 背景颜色| String| #ffffff|
| fgColor| 二维码绘制颜色| String| #000000|