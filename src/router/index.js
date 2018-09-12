import Vue from 'vue';
import Router from 'vue-router';
import Article from '../components/Article/Article.vue';
import UserDetail from '../components/UserDetail/UserDetail.vue';
import MyCollect from '../components/Content/MyCollect/MyCollect.vue';
import Notification from '../components/Notification/Notification.vue';

const HomePage = () => import('@/views/HomePage');
const UserLogin = () => import('@/views/UserLogin');

// 异步加载Publish发布文章组件，因为此组件较大
// 加载时显示加载页面
const Publish = (resolve) => {
  this.a.app.$store.dispatch('changeLoadingStatus', true);
  require
    .ensure(['../components/Publish/Publish'], () => {
      resolve(require('../components/Publish/Publish'));
    })
    .then(() => {
      // this.$store.dispatch('changeLoadingStatus', false)
      this.a.app.$store.dispatch('changeLoadingStatus', false);
    });
};

Vue.use(Router);

// 输出七个组件的路由：
// ① 主页
// ② 文章详情页
// ③ 用户详情页
// ④ 用户登录页
// ⑤ 发布文章页
// ⑥ 用户收藏页
// ⑦ 我的通知页

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: HomePage,
    },
    {
      path: '/article/:id',
      name: 'article',
      component: Article,
    },
    {
      path: '/user/:loginname',
      name: 'user',
      component: UserDetail,
    },
    {
      path: '/login',
      name: 'userLogin',
      component: UserLogin,
    },
    {
      path: '/publish',
      name: 'publish',
      component: Publish,
    },
    {
      path: '/collect/:loginname',
      name: 'collect',
      component: MyCollect,
    },
    {
      path: '/notification',
      name: 'notification',
      component: Notification,
    },
  ],
});
