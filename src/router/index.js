import Vue from 'vue';
import Router from 'vue-router';

const HomePage = () => import('@/views/HomePage');
const UserLogin = () => import('@/views/UserLogin');
const UserDetail = () => import('@/views/UserDetail');
const UserNotification = () => import('@/views/UserNotification');
const MyCollection = () => import('@/views/MyCollection');
const ArticlePublish = () => import('@/views/ArticlePublish');
const ArticleDetail = () => import('@/views/ArticleDetail');

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
      component: ArticleDetail,
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
      component: ArticlePublish,
    },
    {
      path: '/collect/:loginname',
      name: 'collect',
      component: MyCollection,
    },
    {
      path: '/notification',
      name: 'notification',
      component: UserNotification,
    },
  ],
});
