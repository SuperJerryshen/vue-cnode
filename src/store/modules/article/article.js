/**
 * Created by jerryshen on 2017/7/13.
 */
import * as types from './article-mutation-types'

const state = {
  articleData: {
    id: '',
    author_id: '',
    tab: 'all',
    content: '',
    title: '',
    last_reply_at: '1970-00-00T00:00:00.000Z',
    good: true,
    top: false,
    reply_count: 0,
    visit_count: 0,
    create_at: '1970-00-00T00:00:00.000Z',
    author: {
      loginname: '',
      avatar_url: ''
    },
    replies: [],
    is_collect: false
  }
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
  initArticleData ({commit}, data) {
    commit(types.INIT_ARTICLE_DATA, data)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
