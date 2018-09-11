import * as types from './messages-mutation-types';

const state = {
  messages: [],
};

const getters = {
  messages: state => state.messages,
};

const mutations = {
  [types.ADD_NEW_MESSAGE](state, data) {
    state.messages.push({
      type: data.type,
      content: data.content,
    });
  },
  [types.DELETE_NEW_MESSAGE](state) {
    state.messages.shift();
  },
};

const actions = {
  add_warn({ commit }, data) {
    data.type = 'warn';
    commit(types.ADD_NEW_MESSAGE, data);
    window.setTimeout(() => {
      commit(types.DELETE_NEW_MESSAGE);
    }, 1500);
  },
  add_success({ commit }, data) {
    data.type = 'success';
    commit(types.ADD_NEW_MESSAGE, data);
    window.setTimeout(() => {
      commit(types.DELETE_NEW_MESSAGE);
    }, 1500);
  },
  add_fail({ commit }, data) {
    data.type = 'fail';
    commit(types.ADD_NEW_MESSAGE, data);
    window.setTimeout(() => {
      commit(types.DELETE_NEW_MESSAGE);
    }, 1500);
  },
  add_loading({ commit }) {
    commit(types.ADD_NEW_MESSAGE, {
      type: 'loading',
      content: '加载中...',
    });
  },
  delete_message({ commit }) {
    commit(types.DELETE_NEW_MESSAGE);
  },
  connect_fail({ commit }) {
    commit(types.ADD_NEW_MESSAGE, {
      type: 'fail',
      content: '连接失败！',
    });
    window.setTimeout(() => {
      commit(types.DELETE_NEW_MESSAGE);
    }, 1500);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
