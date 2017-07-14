# CNode-Vue

##前言
> 感谢[CNode社区](https://cnodejs.org/)提供的API，项目的来源就是因为在CNode官网看到了API接口，所以才萌生了做一个Vue的项目。

## 技术栈
```$xslt
Vue2.0: 构建项目，属于底层框架
Vue-Router: 通过hash值的变化，从而改变页面结构的路由。
Vuex: Vue官方提供的状态管理模式。
Axios, Vue-Axios: http请求模块
ES6: 最新的Javascript语法
Sass: CSS预编译器
```

## 功能需求分析
> 根据需求，我做了一张分析图，如下。

![CNode需求分析图](/src/pic/CNode功能需求分析.png)

## 功能实现情况
 - [x] 首页列表
 - [x] 拖至页面底部时，自动加载后续内容
 - [x] 切换内容主题
 - [x] 文章详情
 - [x] 在文章详情页时，可以后退至主页
 - [ ] 登陆以后，在文章详情页时，可以点赞和评论
 - [ ] 用户登录
 - [ ] 用户退出
 - [ ] 个人主页
 - [ ] 关于
 
 ## 心得体会
 > 本项目算是本人第一个完整的手机和pc都兼容，有关于文章展示的项目。整个项目做下来，体会也是非常多的。

## Build Setup

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
