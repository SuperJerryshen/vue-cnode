/**
 * Created by jerryshen on 2017/7/13.
 */
import * as types from './article-mutation-types';

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
      avatar_url: '',
    },
    replies: [],
    is_collect: false,
  },
  replyData: '',
  replyAtId: '',
  addReplyAt: 0,
  isFocus: false,
  sortingMethod: 'default',
};

const getters = {
  articleData: state => state.articleData,
  replyData: state => state.replyData,
  replyAtId: state => state.replyAtId,
  addReplyAt: state => state.addReplyAt,
  isFocus: state => state.isFocus,
  sortingMethod: state => state.sortingMethod,
};

const mutations = {
  [types.INIT_ARTICLE_DATA](state, data) {
    state.articleData = data;
  },
  [types.COLLECT](state) {
    state.articleData.is_collect = true;
  },
  [types.DE_COLLECT](state) {
    state.articleData.is_collect = false;
  },
  [types.REPLY_AT](state, replyUser) {
    state.replyData = `@${replyUser.name} `;
    state.replyAtId = replyUser.id;
    state.addReplyAt = replyUser.num;
    state.isFocus = true;
  },
  [types.CANCEL_REPLY_AT](state) {
    state.replyAtId = '';
    state.replyData = '';
    state.addReplyAt = 0;
  },
  [types.ADD_REPLY](state, reply) {
    state.articleData.replies.splice(reply.idx, 0, reply.data);
  },
  [types.SYNC_REPLY_DATA](state, data) {
    state.replyData = data;
  },
  [types.SYNC_REPLY_UP](state, data) {
    state.articleData.replies.forEach((item) => {
      if (item.id === data.id) {
        if (data.action === 'up') {
          item.is_uped = true;
          item.ups.push(data.uper);
        } else if (data.action === 'down') {
          item.is_uped = false;
          item.ups.forEach((up, idx, arr) => {
            if (up === data.uper) {
              arr.splice(idx, 1);
            }
          });
        }
      }
      return true;
    });
  },
  [types.FOCUS_IS_FALSE](state) {
    state.isFocus = false;
  },
  [types.CHANGE_COMMENT_SORTING](state, method) {
    state.sortingMethod = method;
  },
};

const actions = {
  initArticleData({ commit }, data) {
    commit(types.INIT_ARTICLE_DATA, data);
  },
  collect({ commit }) {
    commit(types.COLLECT);
  },
  deCollect({ commit }) {
    commit(types.DE_COLLECT);
  },
  reply_at({ commit }, username) {
    commit(types.REPLY_AT, username);
  },
  cancel_reply_at({ commit }) {
    commit(types.CANCEL_REPLY_AT);
  },
  add_reply({ commit }, reply) {
    commit(types.ADD_REPLY, reply);
  },
  sync_reply_data({ commit }, data) {
    commit(types.SYNC_REPLY_DATA, data);
  },
  sync_reply_up({ commit }, data) {
    commit(types.SYNC_REPLY_UP, data);
  },
  focus_is_false({ commit }) {
    commit(types.FOCUS_IS_FALSE);
  },
  change_comment_sorting({ commit }, method) {
    commit(types.CHANGE_COMMENT_SORTING, method);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
