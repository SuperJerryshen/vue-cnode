/**
 * Created by jerryshen on 2017/7/13.
 */
import * as types from './article-mutation-types'

const state = {
  articleData: {}
}

const getters = {
  articleData: state => state.articleData
}

const mutations = {
  [types.INIT_ARTICLE_DATA] (state, data) {
    state.articleData = data
  }
}

const actions = {
  initArticleData ({ commit }, data) {
    commit(types.INIT_ARTICLE_DATA, data)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
