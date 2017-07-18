import Vue from 'vue'
import Router from 'vue-router'
import Article from '../components/Article/Article'
import Content from '../components/Content/Content'
import UserDetail from '../components/UserDetail/UserDetail'

Vue.use(Router)

// 输出三个组件的路由：
// ① 主页
// ② 文章详情页
// ③ 用户详情页
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Content
    },
    {
      path: '/article/:id',
      name: 'article',
      component: Article
    },
    {
      path: '/user/:loginname',
      name: 'user',
      component: UserDetail
    }
  ]
})
