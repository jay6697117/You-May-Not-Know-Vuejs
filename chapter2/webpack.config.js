module.exports = {
  // 入口文件
  entry: './src/app.js',
  // 编译输出文件
  output: {
    filename: 'build.js'
  },
  resolve: {
    alias: {
      // 因为我们这里用的是 require 引入方式，所以应该使用vue.common.js/vue.js/vue.min.js
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  devServer: {
    // 这里定义 webpack-dev-server 开启的web服务的根目录
    contentBase: './'
  }
}
