/**
 * Created by jerryshen on 2017/7/17.
 */
import * as types from './navbar-mutation-types'

const state = {
  isAboutMeShow: false
}

const getters = {
  isAboutMeShow: state => state.isAboutMeShow
}

const mutations = {
  [types.CHANGE_ABOUT_ME_SHOW] (state) {
    state.isAboutMeShow = !state.isAboutMeShow
  }
}

const actions = {
  changeAboutMeShow ({ commit }) {
    commit(types.CHANGE_ABOUT_ME_SHOW)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
