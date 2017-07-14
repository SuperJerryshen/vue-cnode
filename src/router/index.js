import Vue from 'vue'
import Router from 'vue-router'
import Article from '../components/Article/Article'
import Home from '../components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/article/:id',
      name: 'article',
      component: Article
    }
  ]
})
