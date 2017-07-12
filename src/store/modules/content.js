/**
 * Created by jerryshen on 2017/7/12.
 */
import * as types from '../mutation-types'

const state = {
  /*
  * articleLists: 展示的文章列表的数据
  * selectedTab: 选中显示的内容，默认为全部
  * */
  articleLists: [],
  selectedTab: 'all'
}

const getters = {
  articleLists: state => state.articleLists
}

const mutations = {
  [types.CHANGE_TAB] (state, tab) {}
}

const actions = {
  changeTab ({ commit }, tab) {}
}

export default {
  state,
  getters,
  mutations,
  actions
}
