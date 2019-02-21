const path = require('path')
const SizePlugin = require('size-plugin')
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')

const isProductionEnvFlag = process.env.NODE_ENV === 'production'

function resolveRealPath(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  // 部署时所在服务器目录
  publicPath: '/',
  // 打包后的文件夹名
  outputDir: 'dist',
  // 开启 eslint 代码检查警告
  lintOnSave: true,

  runtimeCompiler: false,
  // 在生产环境生成 sourceMap
  productionSourceMap: process.env.NODE_ENV !== 'production',

  css: {
    loaderOptions: {
      // 向 CSS 相关的 loader 传递选项
      less: {
        javascriptEnabled: true
      }
    }
  },

  chainWebpack: config => {
    // 配置项目中使用的路径别名
    config.resolve.alias
      .set('vue$', 'vue/dist/vue.esm.js')
      .set('@plugins', resolveRealPath('src/plugins'))
      .set('@pages', resolveRealPath('src/pages'))
      .set('@assets', resolveRealPath('src/assets'))
      .set('@router', resolveRealPath('src/router'))
      .set('@mixins', resolveRealPath('src/mixins'))
      .set('@components', resolveRealPath('src/components'))

    // 自动在.vue组件中导入mixins.less
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type =>
      addLessResource(config.module.rule('less').oneOf(type))
    )
    // npm run analyz 命令时使用 分析打包时包的大小
    if (process.env.npm_config_report) {
      config
        .plugin('webpack-bundle-analyzer')
        .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
    }
  },

  configureWebpack: {
    plugins: [
      // 打包时显示包大小
      isProductionEnvFlag ? new SizePlugin() : () => {},
      // 使用 webpack 缓存，提高构建速度
      new HardSourceWebpackPlugin()
    ]
  },

  // webpack-dev-server 相关配置
  devServer: {
    https: false,
    port: '8888',
    // 设置代理
    proxy: {
      '/apis': {
        target: 'http://xxxx',
        changeOrigin: true,
        pathRewrite: {
          '^/apis': ''
        }
      },
      '/zhen': {
        target: 'http://xxxx',
        changeOrigin: true,
        pathRewrite: {
          '^/zhen': ''
        }
      }
    }
  }
}

// 自动在.vue组件中导入mixins.less
function addLessResource(rule) {
  rule
    .use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [path.resolve(__dirname, './src/assets/css/mixins.less')]
    })
}