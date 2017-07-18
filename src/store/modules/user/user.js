/**
 * Created by jerryshen on 2017/7/17.
 */
import * as types from './user-mutation-types'

const state = {
  isLogin: false,
  userData: {
    avatar_url: '',
    id: '',
    loginname: '',
    success: false
  }
}

const getters = {
  isLogin: state => state.isLogin,
  userData: state => state.userData
}

const mutations = {
  [types.INIT_USER_DATA] (state, data) {
    state.userData = data
  }
}

const actions = {
  initUserData ({ commit }, data) {
    commit(types.INIT_USER_DATA, data)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
