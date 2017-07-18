/**
 * Created by jerryshen on 2017/7/17.
 */
import * as types from './login-mutation-types'
import * as cookie from '../../../common/utils/cookie'

const allCookie = cookie.getAllCookies()

const state = {
  isLogin: false,
  userData: {
    avatar_url: '',
    id: '',
    loginname: ''
  },
  isLoginShow: false
}

if (allCookie.isLogin === 'true') {
  state.isLogin = true
  state.userData = {
    avatar_url: allCookie.avatar_url,
    id: allCookie.id,
    loginname: allCookie.loginname
  }
}

const getters = {
  isLogin: state => state.isLogin,
  userData: state => state.userData,
  isLoginShow: state => state.isLoginShow
}

const mutations = {
  [types.INIT_USER_DATA] (state, data) {
    // 首先修改登录状态（包括vuex和cookie）
    state.isLogin = true
    cookie.setCookie('isLogin', true)
    // 再修改用户数据
    state.userData = data
    Object.keys(data).forEach(i => {
      cookie.setCookie(i, data[i])
    })
  },
  [types.CHANGE_LOGIN_SHOW] (state) {
    state.isLoginShow = !state.isLoginShow
  },
  [types.LOGIN_OUT] (state) {
    state.isLogin = false
    state.userData = {
      avatar_url: '',
      id: '',
      loginname: ''
    }
    cookie.setCookie('isLogin', false)
    Object.keys(state.userData).forEach(i => {
      cookie.deleteCookie(i)
    })
  }
}

const actions = {
  initUserData ({ commit }, data) {
    commit(types.INIT_USER_DATA, data)
  },
  changeLoginShow ({ commit }) {
    commit(types.CHANGE_LOGIN_SHOW)
  },
  loginOut ({ commit }) {
    commit(types.LOGIN_OUT)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
