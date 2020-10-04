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
    alias: {//import或require的别名，让模块引入更简单
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      //让引入模块更简单，比如static文件夹下得东西，引入时候可以不加类似../，直接加static别名
      static: path.resolve(__dirname, 'static')
    },
    aliasFields: ["browser"],//解析的规范，默认broeser
    descriptionFiles: ["package.json"],//描述的json文件，
    enforceExtension: false,//设置true，引入文件必须带扩展名的才可以正常工作，默认false可以不带扩展，引入也可以工作
    enforceModuleExtension: false,//对模块扩展要求
    extensions: ['.js', '.vue', '.json'],//自动解析确定的扩展，引入时候可以不带扩展
    mainFields: ["browser", "module", "main"],//设置package。json中的导入模块顺序，package中会定义browser，module，main三个属性的地址
                                      //通过这里的定义，确定package从哪个字段默认解析文件
    mainFiles: ["index"],//解析目录时要使用的文件名
    // modules: [path.resolve(__dirname, "src"), "node_modules"]，解析模块设置的目录，自己添加一个目录到模块搜索目录，此目录优先于node_modules
    // unsafeCache: //可以用布尔值或者正则，用于匹配文件路径或者缓存某些模块
    plugins:[
      
    ]
    
  },
  module: {
    noParse: function(content){//忽略正则匹配的文件，不解析，忽略的文件中不应该含有import， require，define的调用，或任何其他调用机制
      return /jquery|lodash/.test(content);
    },
    rules: [
      //issuer被请求资源的模块文件的绝对路径，导入时的位置，resource请求文件的绝对路径
      //oneOf规则数组，当匹配时，只使用第一个规则
      //options和query是Rule.use:[{options}]的简写
      ...(config.dev.useEslint ? [createLintingRule()] : []),
      {
        test: /\.scss$/,
        // oneOf:[{resourceQuery: /inline/,use: 'url-loader'},{}],
        loaders: ['style', 'css', 'sass'],//Rule.use别名
        parser:{//解析器，定义是否使用
          amd:false,
          commonjs:false
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',//Rule.use:[{loader}]简写
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
