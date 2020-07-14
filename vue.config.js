const webpack = require('webpack');
module.exports = {
  publicPath: '',
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery'
      })
    ]
  },
  chainWebpack: config => config.resolve.symlinks(false), //https://github.com/vuejs/vue-cli/issues/2948
  devServer: {
    https: false,
    sockHost: process.env.HOST_URL,
    proxy: {
      '^/cgi/': {
        target: 'http://localhost:3000',
        changeOrigin: true, // so CORS doesn't bite us. 
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        pathRewrite: {
          '^/cgi/': ''
        }
      }
    }
  }
}
