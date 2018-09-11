/**
 * Created by jerryshen on 2017/7/17.
 */
import * as types from './login-mutation-types';
import * as cookie from '../../../common/utils/cookie';

const allCookie = cookie.getAllCookies();

const state = {
  isLogin: false,
  userData: {
    avatar_url: '',
    id: '',
    loginname: '',
    accesstoken: '',
  },
  myCollections: [],
};

if (allCookie.isLogin === 'true') {
  state.isLogin = true;
  state.userData = {
    avatar_url: allCookie.avatar_url,
    id: allCookie.id,
    loginname: allCookie.loginname,
    accesstoken: allCookie.accesstoken,
  };
}

const getters = {
  isLogin: state => state.isLogin,
  userData: state => state.userData,
  myCollections: state => state.myCollections,
};

const mutations = {
  [types.INIT_USER_DATA](state, data) {
    // 首先修改登录状态（包括vuex和cookie）
    state.isLogin = true;
    cookie.setCookie('isLogin', true);
    // 再修改用户数据
    state.userData = data;
    Object.keys(data).forEach((i) => {
      cookie.setCookie(i, data[i]);
    });
  },
  [types.LOGIN_OUT](state) {
    state.isLogin = false;
    state.userData = {
      avatar_url: '',
      id: '',
      loginname: '',
      accesstoken: '',
    };
    cookie.setCookie('isLogin', false);
    Object.keys(state.userData).forEach((i) => {
      cookie.deleteCookie(i);
    });
  },
  [types.INIT_MY_COLLECTIONS](state, data) {
    state.myCollections = data;
  },
};

const actions = {
  initUserData({ commit }, data) {
    commit(types.INIT_USER_DATA, data);
  },
  loginOut({ commit }) {
    commit(types.LOGIN_OUT);
  },
  init_my_collections({ commit }, data) {
    commit(types.INIT_MY_COLLECTIONS, data);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
