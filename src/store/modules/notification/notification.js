import * as types from './notification-mutation-types';

const state = {
  messageData: {
    has_read_messages: [],
    hasnot_read_messages: [],
  },
};

const getters = {
  messageData: state => state.messageData,
};

const mutations = {
  [types.GET_MESSAGES](state, data) {
    state.messageData = data;
  },
  [types.MARK_ONE](state, id) {
    // 移除已读并加入已读列表
    state.messageData.hasnot_read_messages.forEach((item, idx, arr) => {
      if (item.id === id) {
        arr.splice(idx, 1);
        state.messageData.has_read_messages.unshift(item);
      }
    });
  },
  [types.MARK_ALL](state) {
    // 合并未读消息和已读消息
    state.messageData.has_read_messages = state.messageData.hasnot_read_messages.concat(state.messageData.has_read_messages);
    state.messageData.hasnot_read_messages = [];
  },
};

const actions = {
  get_messages({ commit }, data) {
    commit(types.GET_MESSAGES, data);
  },
  mark_one({ commit }, id) {
    commit(types.MARK_ONE, id);
  },
  mark_all({ commit }) {
    commit(types.MARK_ALL);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
