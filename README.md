# CNode-Vue

## 前言
> 感谢[CNode社区](https://cnodejs.org/)提供的API，项目的来源就是因为在CNode官网看到了API接口，所以才萌生了做一个Vue项目的想法。

## 项目地址

**源码地址**：[用力点我](https://github.com/SuperJerryshen/Vue-CNode)

**预览地址**：[使劲点我](http://106.14.179.237:8082)

你也可以扫描下面的二维码预览线上项目：
[![二维码](https://github.com/SuperJerryshen/Vue-CNode/blob/master/src/pic/QR-Code.png?raw=true)](http://106.14.179.237:8082)

## 技术栈
```
Vue2.0: 构建项目，属于底层框架
Vue-Router: 通过hash值的变化，从而改变页面结构的路由。
Vuex: Vue官方提供的状态管理模式。
Axios, Vue-Axios: http请求模块
ES6: 最新的Javascript语法
Sass: CSS预编译器
```

## 版本

v0.2

## 功能需求分析
> 根据需求，我做了一张分析图，如下。

![CNode需求分析图](/src/pic/CNode功能需求分析.png)

## 项目结构
```$xslt
.
├── README.md
├── build
│   ├── build.js
│   ├── check-versions.js
│   ├── dev-client.js
│   ├── dev-server.js
│   ├── utils.js
│   ├── vue-loader.conf.js
│   ├── webpack.base.conf.js
│   ├── webpack.dev.conf.js
│   └── webpack.prod.conf.js
├── config
│   ├── dev.env.js
│   ├── index.js
│   └── prod.env.js
├── index.html
├── package.json
├── src
│   ├── App.vue
│   ├── common
│   │   ├── fonts
│   │   │   ├── iconfont.eot
│   │   │   ├── iconfont.svg
│   │   │   ├── iconfont.ttf
│   │   │   └── iconfont.woff
│   │   └── style
│   │       ├── base.scss
│   │       └── icon.scss
│   ├── components
│   │   ├── Article
│   │   │   └── Article.vue
│   │   ├── Content
│   │   │   ├── ArticleCard.vue
│   │   │   └── Content.vue
│   │   ├── Home.vue
│   │   ├── Loading
│   │   │   └── Loading.vue
│   │   └── navBar
│   │       ├── cnodejs_light.svg
│   │       └── navBar.vue
│   ├── main.js
│   ├── pic
│   │   └── CNode功能需求分析.png
│   ├── router
│   │   └── index.js
│   └── store
│       ├── modules
│       │   ├── article-mutation-types.js
│       │   ├── article.js
│       │   ├── content-mutation-types.js
│       │   └── content.js
│       └── store.js
└── static

```

## 功能实现情况
 - [x] 首页列表
 - [x] 无限懒加载文章列表
 - [x] 切换内容主题
 - [x] 文章详情
 - [x] 在文章详情页时，可以后退至主页
 - [x] 回到顶部功能
 - [x] 关于
 - [x] 用户登录
 - [x] 用户退出
 - [x] 个人主页
 - [x] 点击用户头像，可以进入该用户的简介页面
 - [ ] 登陆以后，在文章详情页时，可以点赞和评论
 - [ ] 消息通知，消息设置已读


## 心得体会

 > 本项目算是本人第一个完整的手机和pc都兼容，有关于文章展示的项目。整个项目做下来，遇到的Bug很多，自然收获也是很多。总结下来如下：

 1.很长的单词会超出边界，导致可视区域变宽。

   解决办法：通过`word-wrap: break-word;`实现打断效果。

 2.第二次进入文章时，会残留（暂未解决）。

   解决办法：通过路由的钩子函数beforeRouteEnter，来获取数据，未成功获取数据时，显示Loading页面，加载完成后，显示文章详情页，从而解决这个问题。

 3.回到首页时，不能保留原来的状态（暂未解决）。

   解决办法：

   ①此方法为容易固定高度的解决办法。（具体方法：用vuex和vue-router的钩子函数来解决这个问题，即通过scroll事件动态保存此时的scrollTop直，当路由的beforeRouteEnter出发时，恢复其scrollTop的值。）

   ② 如果没有固定高度，直接通过Vue自带的keep-alive组件，保留组件状态。

## 安装

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
