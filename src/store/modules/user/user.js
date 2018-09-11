import * as types from './user-mutation-types';

const state = {
  userDetailData: {
    loginname: '',
    avatar_url: '',
    githubUsername: '',
    create_at: '',
    score: 0,
    recent_topics: [],
    recent_replies: [],
  },
};

const getters = {
  userDetailData: state => state.userDetailData,
};

const mutations = {
  [types.INIT_USER_DETAIL_DATA](state, data) {
    state.userDetailData = data;
  },
};

const actions = {
  initUserDetailData({ commit }, data) {
    commit(types.INIT_USER_DETAIL_DATA, data);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
