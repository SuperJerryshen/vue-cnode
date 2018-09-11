/**
 * Created by jerryshen on 2017/7/12.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import content from './modules/content/content';
import article from './modules/article/article';
import navbar from './modules/navbar/navbar';
import login from './modules/login/login';
import user from './modules/user/user';
import notification from './modules/notification/notification';
import messages from './modules/messages/messages';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    content,
    article,
    navbar,
    login,
    user,
    notification,
    messages,
  },
});
