# CNode-Vue

## 前言
> 感谢[CNode社区](https://cnodejs.org/)提供的API，项目的来源就是因为在CNode官网看到了API接口，所以才萌生了做一个Vue项目的想法。现在项目的基本功能都已经做完，但仍需要后续的完善。

## 项目地址

**源码地址**：[用力点我](https://github.com/SuperJerryshen/Vue-CNode)

**预览地址**：[使劲点我](http://cnode.jerryshen.cn)

你也可以扫描下面的二维码预览线上项目：

[![二维码](https://github.com/SuperJerryshen/Vue-CNode/blob/master/src/pic/QR-Code.png?raw=true)](http://106.14.179.237:8082)

## 技术栈
```
Vue2.0: 构建项目，属于底层框架
Vue-Router: 通过hash值的变化，从而改变页面结构的路由。
Vuex: Vue官方提供的状态管理模式。
Axios, Vue-Axios: http请求模块
ES6: 较新的Javascript语法
Sass: CSS预编译器
```

> 用到的一些工具包括iconfont来做字体图标，引入mavon-editor插件，优化编辑文章时的markdown书写体验。

## 版本

v0.4.1 beta

## 功能需求分析
> 根据需求，我做了一张分析图，如下。

![CNode需求分析图](/src/pic/CNode-requirement-analysis.png)

## 项目结构
```
.
├── build                               // webpack设置
│   ├── build.js
│   ├── check-versions.js
│   ├── dev-client.js
│   ├── dev-server.js
│   ├── utils.js
│   ├── vue-loader.conf.js
│   ├── webpack.base.conf.js
│   ├── webpack.dev.conf.js
│   └── webpack.prod.conf.js
├── config                              // 项目开发和打包设置
│   ├── dev.env.js
│   ├── index.js
│   └── prod.env.js
├── src                                 // 项目文件位置
│   ├── App.vue                         // 组件总入口
│   ├── common                          // 通用文件
│   │   ├── fonts                       // 字体
│   │   │   ├── iconfont.eot
│   │   │   ├── iconfont.svg
│   │   │   ├── iconfont.ttf
│   │   │   └── iconfont.woff
│   │   ├── style                       // 样式
│   │   │   ├── animation.scss          // 动画
│   │   │   ├── base.scss               // 基本样式
│   │   │   └── icon.scss               // iconfont的字体图标样式
│   │   └── utils                       // 工具函数
│   │       ├── cookie.js               // cookie存取和删除
│   │       └── timeFormat.js           // 格式化时间函数
│   ├── components                      // 所有组件
│   │   ├── AboutMe                     // 关于
│   │   │   └── AboutMe.vue
│   │   ├── Article                     // 文章详情页
│   │   │   └── Article.vue
│   │   ├── ArticleCard                 // 文章列表的单个文章卡片
│   │   │   └── ArticleCard.vue
│   │   ├── BackBar                     // 顶部的返回栏（返回主页和后退）
│   │   │   └── BackBar.vue
│   │   ├── BottomBar                   // 底部的回复栏（还包含收藏和编辑文件）
│   │   │   └── BottomBar.vue
│   │   ├── Content                     // 主页
│   │   │   └── Content.vue
│   │   ├── Loading                     // 正在加载组件
│   │   │   ├── Loading.vue
│   │   │   └── loading.svg
│   │   ├── Login                       // 登录
│   │   │   └── Login.vue
│   │   ├── MessageCard                 // 单个通知的详情卡片
│   │   │   └── MessageCard.vue
│   │   ├── MyCollect                   // 我的收藏页
│   │   │   └── MyCollect.vue
│   │   ├── Notification                // 通知页
│   │   │   └── Notification.vue
│   │   ├── Publish                     // 发布文章和发布更新页
│   │   │   └── Publish.vue
│   │   ├── UserDetail                  // 用户详情页
│   │   │   └── UserDetail.vue
│   │   └── navBar                      // 主页的顶部导航栏
│   │       ├── cnodejs_light.svg
│   │       └── navBar.vue
│   ├── main.js                         // 项目的总入口
│   ├── pic                             // 和代码无关，README.md中的图片
│   │   ├── CNode-requirement-analysis.png
│   │   └── QR-Code.png
│   ├── router                          // 路由设置
│   │   └── index.js
│   └── store                           // 状态管理
│       ├── modules
│       │   ├── article                 // 文章详情页
│       │   │   ├── article-mutation-types.js
│       │   │   └── article.js
│       │   ├── content                 // 主页
│       │   │   ├── content-mutation-types.js
│       │   │   └── content.js
│       │   ├── login                   // 登录页
│       │   │   ├── login-mutation-types.js
│       │   │   └── login.js
│       │   ├── navbar                  // 主页导航栏
│       │   │   ├── navbar-mutation-types.js
│       │   │   └── navbar.js
│       │   ├── notification            // 通知页
│       │   │   ├── notification-mutation-types.js
│       │   │   └── notification.js
│       │   └── user                    // 用户详情页
│       │       ├── user-mutation-types.js
│       │       └── user.js
│       └── store.js                    // 状态管理总入口
├── README.md
├── index.html
└── package.json
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
 - [x] 我的收藏
 - [x] 点击用户头像，可以进入该用户的简介页面
 - [x] 登陆后，可在文章详情页点赞和评论
 - [x] 登陆后，在主页显示发布主题按钮，可以发布主题
 - [x] 消息通知，消息设置已读功能
 - [x] 对自己的文章可以进行编辑更新
 - [x] 操作成功或失败后的消息提醒
 - [x] 增加markdown的编辑器组件和预览器组件，依赖于`mavon-editor`
 - [ ] 评论排序功能


## 心得体会&技术难点

 > 本项目算是本人第一个完整的手机和pc都兼容，有关于文章展示的项目。整个项目做下来，遇到的Bug很多，自然收获也是很多。总结下来如下：

 1.很长的单词会超出边界，导致可视区域变宽。

   解决办法：通过`word-wrap: break-word;`实现打断效果。

 2.第二次进入文章时，会残留。

   解决办法：通过路由的钩子函数beforeRouteEnter，来获取数据，未成功获取数据时，显示Loading页面，加载完成后，显示文章详情页，从而解决这个问题。

 3.回到首页时，不能保留原来的状态。

   解决办法：

   ①此方法为容易固定高度的解决办法。（具体方法：用vuex和vue-router的钩子函数来解决这个问题，即通过scroll事件动态保存此时的scrollTop直，当路由的beforeRouteEnter出发时，恢复其scrollTop的值。）

   ② 如果没有固定高度，直接通过Vue自带的keep-alive组件，保留组件状态。

 4.载入中的动画效果如何做？

 解决办法：之前是通过CSS3绘制一个图形，但是后来发现太丑了，就直接用了Iconfont上的svg图，并添加了动画效果。

 5.如何实现主页文章列表的懒加载？

 解决办法：判断滑动的总高度 - 滑动距离顶部的距离 <= 屏幕的可用高度，也就是以下公式：
 ```javascript
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
 ```javascript
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
 ```javascript
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

 11.发布新文章或更新跳转至文章详情页面后，再按后退，怎么实现回到主页？
 
 解决办法：现在初步是使用，路由跳转的时候，先跳到主页，再跳到文章详情页，再按后退时，就会回到主页。
 
 12.如何实现点击评论右侧的回复按钮，添加@信息，并focus输入框？
 
 解决办法：通过vuex来实时记录回复相关的信息，并通过watch输入框的value来判断是否focus。

 13.有一个很奇怪的bug：ios下，如果在文章详情页返回主页时，此时的`window.scrollY`会保持文章详情页时的`window.scrollY`，如果此值满足异步加载更多数据的条件时，会导致异常加载数据。
 
 解决办法：不得已，只好在`beforeRouteEnter`钩子中，绑定滚动事件的函数加一个定时器，使其在100ms后绑定事件，所以此时的`window.scrollY`就会变成之前的值。
 
 14.如何实现全局的消息提醒？
 
 解决办法：我是通过一个和路由同级的组件`Messages`，并且创建了一个状态管理的模块`messages`，在其中通过`state: messages`存放现在显示的的通知数据，利用`Messages`组件和`vuex`的`actions`控制其显示。
 
 15.因为Publish组件中加入了`mavon-editor`，所以使得整个应用完全加载会非常耗时，怎样实现异步加载Publish组件？
 
 解决办法：可以通过webpack提供的`code-split`，具体代码如下：
 ```javascript
 // 通过this.a.app来访问Vue实例对象，实现dispatch来增加加载状态
const Publish = resolve => {
  this.a.app.$store.dispatch('changeLoadingStatus', true)
  require.ensure(['../components/Publish/Publish'], () => {
    resolve(require('../components/Publish/Publish'))
  }).then(() => {
    // this.$store.dispatch('changeLoadingStatus', false)
    this.a.app.$store.dispatch('changeLoadingStatus', false)
  })
}
```
16.bug：进入用户详情页时，再进入另外一个用户的详情页时，因为用的是同一个组件，路由变化了，但是数据没有变化。

解决办法：通过`watch`，监听`route`变化，发生变化就请求数据并更新数据。并且将`UserDetail`设置为不保存其状态的组件，即`keep-alive`选项中添加`exclude="UserDetail"`(因为保存其在内存中的话，会出现路由`/user/undefined`，会出现一直显示正在加载页面的bug)。

具体代码如下：
```javascript
export default {
  // 其他代码省略
    methods: {
      getUserData () {
        // 异步获取数据代码，此处省略
      }
    },
    watch: {
      '$route': 'getUserData'
    },
    created () {
      this.getUserData()
    }
  }
```

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
