import * as types from './notification-mutation-types'

const state = {
  messageData: {
    has_read_messages: [
      {
        id: '',
        type: 'reply',
        has_read: true,
        author: {
          loginname: '',
          avatar_url: ''
        },
        topic: {
          id: '',
          title: '',
          last_reply_at: ''
        },
        reply: {
          id: '',
          content: '',
          ups: [],
          create_at: ''
        },
        create_at: ''
      }
    ],
    hasnot_read_messages: [
      {
        id: '',
        type: 'reply',
        has_read: false,
        author: {
          loginname: '',
          avatar_url: ''
        },
        topic: {
          id: '',
          title: '',
          last_reply_at: ''
        },
        reply: {
          id: '',
          content: '',
          ups: [],
          create_at: ''
        },
        create_at: ''
      }
    ]
  }
}

const getters = {
  messageData: state => state.messageData
}

const mutations = {
  [types.GET_MESSAGES] (state, data) {
    state.messageData = data
  }
}

const actions = {
  get_messages ({commit}, data) {
    commit(types.GET_MESSAGES, data)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
