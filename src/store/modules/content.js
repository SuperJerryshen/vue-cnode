/**
 * Created by jerryshen on 2017/7/12.
 */
import * as types from './content-mutation-types'

const state = {
  /*
  * articleLists: 展示的文章列表的数据
  * selectedTab: 选中显示的内容，默认为全部
  * */
  articleLists: [],
  selectedTab: 'all',
  pageCount: 1,
  isLoading: false
}

const getters = {
  articleLists: state => state.articleLists,
  selectedTab: state => state.selectedTab,
  pageCount: state => state.pageCount,
  isLoading: state => state.isLoading
}

const mutations = {
  [types.CHANGE_TAB] (state, tab) {
    state.selectedTab = tab
    state.pageCount = 1
  },
  [types.CHANGE_TAB_DATA] (state, tabData) {
    state.articleLists = tabData
  },
  [types.LOAD_MORE_DATA] (state, data) {
    data.forEach(item => {
      state.articleLists.push(item)
    })
    state.pageCount++
    state.isLoading = false
  },
  [types.CHANGE_LOAD_STATUS] (status) {
    state.isLoading = true
  }
}

const actions = {
  changeTab ({ commit }, tab) {
    commit(types.CHANGE_TAB, tab)
  },
  changeTabData ({ commit }, tabData) {
    commit(types.CHANGE_TAB_DATA, tabData)
  },
  loadMoreData ({ commit }, data) {
    commit(types.LOAD_MORE_DATA, data)
  },
  changeLoadingStatus ({ commit }) {
    commit(types.CHANGE_LOAD_STATUS)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
