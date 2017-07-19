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
 - [x] 回到顶部功能，并添加动画效果
 - [x] 关于
 - [x] 用户登录
 - [x] 用户退出
 - [x] 个人主页
 - [x] 点击用户头像，可以进入该用户的简介页面
 - [ ] 登陆后，可在文章详情页点赞和评论
 - [ ] 登陆后，在主页显示发布主题按钮，可以发布主题
 - [ ] 消息通知，消息设置已读


## 心得体会&技术难点

 > 本项目算是本人第一个完整的手机和pc都兼容，有关于文章展示的项目。整个项目做下来，遇到的Bug很多，自然收获也是很多。总结下来如下：

 1.很长的单词会超出边界，导致可视区域变宽。

   解决办法：通过`word-wrap: break-word;`实现打断效果。

 2.第二次进入文章时，会残留（暂未解决）。

   解决办法：通过路由的钩子函数beforeRouteEnter，来获取数据，未成功获取数据时，显示Loading页面，加载完成后，显示文章详情页，从而解决这个问题。

 3.回到首页时，不能保留原来的状态（暂未解决）。

   解决办法：

   ①此方法为容易固定高度的解决办法。（具体方法：用vuex和vue-router的钩子函数来解决这个问题，即通过scroll事件动态保存此时的scrollTop直，当路由的beforeRouteEnter出发时，恢复其scrollTop的值。）

   ② 如果没有固定高度，直接通过Vue自带的keep-alive组件，保留组件状态。

 4.载入中的动画效果如何做？

 解决办法：之前是通过CSS3绘制一个图形，但是后来发现太丑了，就直接用了Iconfont上的svg图，并添加了动画效果。

 5.如何实现主页文章列表的懒加载？

 解决办法：判断滑动的总高度 - 滑动距离顶部的距离 <= 屏幕的可用高度，也就是以下公式：
 ```
 document.documentElement.offsetHeight - window.scrollY
 <= window.screen.height
 ```
 这里会出现一个bug，满足条件时，继续滑动，会加载多次。在此可以加入一个状态，表示此时正在加载（详细参见源代码），从而解决此bug。

 6.回到顶部的动画怎么做？

 解决办法：可以把现在的`window.scrollY`分成`n`份，然后再设置一个定时器，每隔`m`秒，向上滚动一份的高度，当`window.scrollY >= 0`时，再终止定时器。（其中的`m, n`为任意数，根据情况设定）

 7.如何控制正在加载页面的显示？

 解决办法：因为加载数据是异步的，可以在加载之前和加载之后，分别更改一个类似于`isLoading`（名称自己设定）的状态，从而控制加载页面的显示。

 8.如何设置登录功能？

 解决办法：因为官方只提供了`access-token`，所以可以将此值和一些用户相关的数值，存入`document.cookie`中，存入的函数我单独写了一个`cookie`的工具函数，代码如下：
 ```
/**
 * Created by jerryshen on 2017/7/15.
 * 用户本地cookie的存取以及清空
 * 函数的功能分别是：
 * 设置单个，获取所有，获取单个，删除所有，删除单个
 */

export function setCookie (name, value, exdays = 30) {
  var time = new Date()
  time.setTime(time.getTime() + exdays * 24 * 3600 * 1000)
  var expires = 'expires=' + time.toGMTString()
  document.cookie = name + '=' + value + ';' + expires
}

export function getAllCookies () {
  if (document.cookie === '') {
    return {}
  }
  const cookies = document.cookie.split(';')
  const newCookies = {}
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].trim()
    const splitCookie = cookie.split('=')
    newCookies[splitCookie[0]] = splitCookie[1]
  }
  return newCookies
}

export function getCookie (name) {
  const cname = name + '='
  const cookies = document.cookie.split(';')
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].trim()
    if (cookie.indexOf(cname) === 0) {
      return {
        success: true,
        cookie: {
          name,
          value: cookie.split(cname)[1]
        }
      }
    } else {
      return {
        success: false,
        cookie: {
          name,
          value: undefined
        }
      }
    }
  }
}

export function deleteAllCookie () {
  document.cookie += ';expires=Thu, 01 Jan 1970 00:00:00 GMT'
}

export function deleteCookie (name) {
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT`
}
 ```

 9.如何将API中的时间转换成 => ..年前，..月前，..天前等等，这种类型的格式呢？

 解决办法：我自己写了一个格式化的工具函数，代码如下：
 ```
 export default function timeFormat (date) {
   // 获取当前时间和所传时间的Date对象
   const nowTime = new Date()
   const inDate = new Date(date)
   if (nowTime.getYear() - inDate.getYear() > 0) {
     // 年份差值 > 0，返回年
     return `${nowTime.getFullYear() - inDate.getFullYear()}年前`
   } else if (nowTime.getMonth() - inDate.getMonth() > 0) {
     // 月份差值 > 0，返回月
     return `${nowTime.getMonth() - inDate.getMonth()}个月前`
   } else if (nowTime.getDate() - inDate.getDate() > 0) {
     // 日期差值 > 0，返回日
     return `${nowTime.getDate() - inDate.getDate()}天前`
   } else if (nowTime.getHours() - inDate.getHours() > 0) {
     // 小时差值 > 0，返回时
     return `${nowTime.getHours() - inDate.getHours()}个小时前`
   } else if (nowTime.getMinutes() - inDate.getMinutes() > 0) {
     // 分钟差值 > 0，返回分钟
     return `${nowTime.getMinutes() - inDate.getMinutes()}分钟前`
   } else {
     // 其他情况，也就是秒数差值 > 0，返回秒钟
     return `${nowTime.getSeconds() - inDate.getSeconds()}秒前`
   }
 }
 ```

 10.BUG：当进入其他路由时，仍然会触发主页的scroll事件。

 解决办法：之前生命周期钩子用的是`mounted`，因此进入其他路由时，scroll事件仍然存在。所以现在改用`beforeRouteEnter`和`beforeRouteLeave`这两个路由的生命周期钩子，分别实现载入路由时的scroll事件挂载、离开路由时的scroll事件卸载。从而防止主页内容的懒加载一直触发。

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
