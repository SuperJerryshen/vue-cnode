/**
 * Created by jerryshen on 2017/7/17.
 */
import * as types from './navbar-mutation-types';

const state = {
  isAboutMeShow: false,
  messageCount: 0,
};

const getters = {
  isAboutMeShow: state => state.isAboutMeShow,
  messageCount: state => state.messageCount,
};

const mutations = {
  [types.CHANGE_ABOUT_ME_SHOW](state) {
    state.isAboutMeShow = !state.isAboutMeShow;
  },
  [types.GET_MESSAGE_COUNT](state, count) {
    state.messageCount = count;
  },
};

const actions = {
  changeAboutMeShow({ commit }) {
    commit(types.CHANGE_ABOUT_ME_SHOW);
  },
  get_message_count({ commit }, count) {
    commit(types.GET_MESSAGE_COUNT, count);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
