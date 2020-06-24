'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')
const MarkdownItContainer = require('markdown-it-container')
const striptags = require('./strip-tags')
const md = require('markdown-it')//引入markdown-it
const slugify = require('transliteration').slugify;
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const vueMarkdown = {
  //定义处理规则
  preprocess: (MarkdownIt, source) => {
    MarkdownIt.renderer.rules.table_open = function () {
      return '<table class="table">'
    }
    //对于代码块去除v-pre 添加高亮样式
    MarkdownIt.renderer.rules.fence = utils.wrapCustomClass(MarkdownIt.renderer.rules.fence)
    return source
  },
  use: [
    [require('markdown-it-anchor'),{
      level:2,//添加超链接锚点的最小标题级别 如：#标题不会添加锚点
      slugify:slugify,//自定义slugify 我们使用的是将中文转换成汉语拼音 最终胜出标题id属性
      permalink:false,//开启标题锚点
      permalinkBefore:true//在标题前创建锚点
    }],
    //MarkdownItContainer 的作用是自定义代码块
    [MarkdownItContainer, 'demo', {
      // 当我们写:::demo:::这样的语法时候才进入自定义渲染方法
      validate: params =>{
        return params.trim().match(/^demo\s*(.*)$/)
      },
      render: function(tokens, idx) {
        var m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
        if (tokens[idx].nesting === 1) {
          //获取正则捕获组件中的描述内容 即:::demo xxx 中的xxx
          var description = (m&&m.length>1)?m[1]:'';
          //获得内容
          var content = tokens[idx + 1].content;
          //解析过滤解码生成html字符串
          var html = utils.convertHtml(striptags.strip(content, ['script', 'style'])).replace(/(<[^>]*)=""(?=.*>)/g, '$1');
          //是否有描述需要渲染
          var descriptionHtml = description?md.render(description):'';
          return `<demo-block class="demo-box">
                        <div slot="source" class="source">${html}</div>
                        ${descriptionHtml}
                        <div slot="highlight" class="highlight">`;
        }
        return '</div></demo-block>\n';
      }
    }],
    [require('markdown-it-container'),'tip'],
    [require('markdown-it-container'),'warning']
  ]
}

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.md$/,
        loader: 'vue-markdown-loader',
        options:vueMarkdown
      }
    ]
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}
