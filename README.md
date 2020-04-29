# soui

> ui组件库

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```
For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
```
开发指南
第一步 新建路由 nac.config.json 添加路由
第二步  在packages下面添加组件包 命名规则 s-组件包名字 例如s-qrcode
第三步 在组件包下新建 src文件夹  和index.js文件
src下面新建index.vue  主要是组件开发 
组件名字规则SoXXX 例如SoQrcode
组件样式 可以写在theme文件下
index.js  主要是对外暴露组件
第四步 在组件包packages下的index 中引入组件
第五步 在docs下面写 以路由名字命名的md文件 例如qrcode.md  写法参考已经写好的组件md

```
