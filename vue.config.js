const axios = require('axios')
const path = require('path');
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  lintOnSave: true,
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    },
    // 这个接口不可以直接请求，需要在项目中做后台数据的反向代理
    before(app) {
      app.get('/api/getDiscList', (req, res) => {
        var url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'
        axios.get(url, {
          headers: {
            referer: 'https://c.y.qq.com/',
            host: 'c.y.qq.com'
          },
          params: req.query    //需要前台返回数据，这里向qq音乐在发出请求
        })
          .then((response) => {
            res.json(response.data)   //数据返给前台
          })
          .catch((e) => {
            // console.log(e)
          })
      })
    }
  },
  chainWebpack (config) {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('common', resolve('src/common'))
  }
}
