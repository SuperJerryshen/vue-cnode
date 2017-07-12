import Vue from 'vue'
import Router from 'vue-router'
import Content from '../components/Content/Content'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Content
    }
  ]
})
