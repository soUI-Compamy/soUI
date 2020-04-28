# Button 按钮
#### 常用的按钮操作
----
### 基础用法
使用```type```、```plain```和```round```属性来定义 Button 的样式。

  <div class="demo-block">
    <div>
      <so-button>默认按钮</so-button>
      <so-button type="primary">主要按钮</so-button>
      <so-button type="success">成功按钮</so-button>
      <so-button type="info">信息按钮</so-button>
      <so-button type="warning">警告按钮</so-button>
      <so-button type="danger">危险按钮</so-button>
    </div>
    <div class="m-10">
      <so-button plain>朴素按钮</so-button>
      <so-button type="primary" plain>主要按钮</so-button>
      <so-button type="success" plain>成功按钮</so-button>
      <so-button type="info" plain>信息按钮</so-button>
      <so-button type="warning" plain>警告按钮</so-button>
      <so-button type="danger" plain>危险按钮</so-button>
    </div>
    <div class="m-10">
      <so-button round>圆形按钮</so-button>
      <so-button type="primary" round>主要按钮</so-button>
      <so-button type="success" round>成功按钮</so-button>
      <so-button type="info" round>信息按钮</so-button>
      <so-button type="warning" round>警告按钮</so-button>
      <so-button type="danger" round>危险按钮</so-button>
    </div>
  </div>

::: demo
```html

    <div>
      <so-button>默认按钮</so-button>
      <so-button type="primary">主要按钮</so-button>
      <so-button type="success">成功按钮</so-button>
      <so-button type="info">信息按钮</so-button>
      <so-button type="warning">警告按钮</so-button>
      <so-button type="danger">危险按钮</so-button>
    </div>
    <div class="m-10">
      <so-button plain>朴素按钮</so-button>
      <so-button type="primary" plain>主要按钮</so-button>
      <so-button type="success" plain>成功按钮</so-button>
      <so-button type="info" plain>信息按钮</so-button>
      <so-button type="warning" plain>警告按钮</so-button>
      <so-button type="danger" plain>危险按钮</so-button>
    </div>
    <div class="m-10">
      <so-button round>圆形按钮</so-button>
      <so-button type="primary" round>主要按钮</so-button>
      <so-button type="success" round>成功按钮</so-button>
      <so-button type="info" round>信息按钮</so-button>
      <so-button type="warning" round>警告按钮</so-button>
      <so-button type="danger" round>危险按钮</so-button>
    </div>

```
:::
### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
   |
| type     | 类型   | string    |   primary,success,warning,danger,info |

