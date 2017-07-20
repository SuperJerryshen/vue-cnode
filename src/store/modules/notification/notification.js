import * as types from './notification-mutation-types'

const state = {
  messageData: {
    has_read_messages: [],
    hasnot_read_messages: []
  }
}

const getters = {
  messageData: state => state.messageData
}

const mutations = {
  [types.GET_MESSAGES] (state, data) {
    state.messageData = data
  },
  [types.MARK_ONE] (state, id) {
    state.messageData.hasnot_read_messages.forEach((item, idx, arr) => {
      if (item.id === id) {
        arr.splice(idx, 1)
      }
    })
  },
  [types.MARK_ALL] (state) {
    state.messageData.hasnot_read_messages.forEach((item) => {
      state.messageData.has_read_messages.unshift(item)
    })
    state.messageData.hasnot_read_messages = []
  }
}

const actions = {
  get_messages ({commit}, data) {
    commit(types.GET_MESSAGES, data)
  },
  mark_one ({ commit }, id) {
    commit(types.MARK_ONE, id)
  },
  mark_all ({ commit }) {
    commit(types.MARK_ALL)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
