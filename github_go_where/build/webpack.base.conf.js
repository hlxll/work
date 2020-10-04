'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const createLintingRule = () => ({
  test: /\.(js|vue)$/,
  loader: 'eslint-loader',
  enforce: 'pre',
  include: [resolve('src'), resolve('test')],
  options: {
    formatter: require('eslint-friendly-formatter'),
    emitWarning: !config.dev.showEslintErrorsInOverlay
  }
})

module.exports = {
  mode:"none",//选择模块，告诉webpack相应的使用内置优化
  context: path.resolve(__dirname, '../'),//基础目录，从配置中解析入口起点
  entry: {//入口
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,//output目录对应一个绝对路径
    filename: '[name].js',//输出文件名。[]是占位符，表示多个入口，文件名不同
    publicPath: process.env.NODE_ENV === 'production'//按需加载，或者加载外部资源文件来说很重要，浏览器引用的，相对服务器或者协议的，还有把数据
      ? config.build.assetsPublicPath // 存在cdn上的，必须要用
      : config.dev.assetsPublicPath,
    chunkLoadTimeout: 120000,// 加载快超时的时间
    crossOriginLoading: "anonymous",// 只在对象是web时候，jsonp加载快时候，跨域
    hashDigest: 'hex',//生成hash时候使用的编码方式
  },
  resolve: {
    //自动解析，在引入时候可以不带扩展名
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      //让引入模块更简单，比如static文件夹下得东西，引入时候可以不加类似../，直接加static别名
      static: path.resolve(__dirname, 'static')
    }
  },
  module: {
    noParse: function(content){//忽略正则匹配的文件，不解析，忽略的文件中不应该含有import， require，define的调用，或任何其他调用机制
      return /jquery|lodash/.test(content);
    },
    rules: [
      ...(config.dev.useEslint ? [createLintingRule()] : []),
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
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
