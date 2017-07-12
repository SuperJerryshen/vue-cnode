/**
 * Created by jerryshen on 2017/7/12.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import content from './modules/content'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    content
  }
})
