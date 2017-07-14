/**
 * Created by jerryshen on 2017/7/12.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import content from './modules/content'
import article from './modules/article'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    content,
    article
  }
})
