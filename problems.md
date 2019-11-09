## 解决 js ../ css ../
解决项目中全局路径的配置
`vue.config.js`

> 要注意的是如果你想要引用一个 npm 依赖中的文件，
或是想要用 webpack alias，则需要在路径前加上 ~ 的前缀来避免歧义

```
// js中
chainWebpack (config) {
    config.resolve.alias
      .set('@', resolve('src'))
  }
```
- https://cli.vuejs.org/zh/config/#chainwebpack
## eslint

- https://cli.vuejs.org/zh/config/#lintonsave
- 删除package.json 中 eslintConfig字段
- 增加 .eslintrc目录
  - 0 "off"
  - 1 "warn"
  - 2 "error"

## swiper 未滑动 (暂不进行改动)

## 跨域处理未解决

利用中间人角色解决跨域、referer问题
- https://webpack.docschina.org/configuration/dev-server/#devserver-before

## axios全局配置
## 推荐上部分固定
## 左右滑动数据缓存
## 标题档直播
