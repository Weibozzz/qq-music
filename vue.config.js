module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg',
        changeOrigin: true,
        pathRewrite: {'^/api' : ''}
      }
    }
  }
}
