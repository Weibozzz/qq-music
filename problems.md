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

- [keep-alive](https://cn.vuejs.org/v2/guide/components-dynamic-async.html#%E5%9C%A8%E5%8A%A8%E6%80%81%E7%BB%84%E4%BB%B6%E4%B8%8A%E4%BD%BF%E7%94%A8-keep-alive)

## 搜索字体图标         
- 引入字体文件

## 搜索 onQueryChange
- 开发搜索历史的时候需要这个

## 子路由跳转
- <router-view></router-view>

## transition name值 
- https://cn.vuejs.org/v2/guide/transitions.html
## user 浏览器默认li的样式
- main.js引入reset.css
## 图片懒加载
