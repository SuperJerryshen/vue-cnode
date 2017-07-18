import Vue from 'vue'
import Router from 'vue-router'
import Article from '../components/Article/Article'
import Content from '../components/Content/Content'

Vue.use(Router)

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
    }
  ]
})
