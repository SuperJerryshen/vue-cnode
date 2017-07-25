<template>
  <div class="my-notification">
    <back-bar :title="'我的通知'"></back-bar>
    <div class="not-read">
      <h2 class="title">未读消息</h2>
      <div class="mark-all" v-if="messageData.hasnot_read_messages.length" @click="markAll">标记所有已读</div>
      <ul class="not-read-list" v-if="messageData.hasnot_read_messages.length">
        <li v-for="msg in messageData.hasnot_read_messages">
          <message-card :data="msg" :hasRead="false" :accesstoken="userData.accesstoken"></message-card>
        </li>
      </ul>
      <p v-if="!messageData.hasnot_read_messages.length" class="no-msg">暂无消息</p>
    </div>
    <div class="has-read">
      <h2 class="title">已读消息</h2>
      <ul class="has-read-list" v-if="messageData.has_read_messages.length">
        <li v-for="msg in messageData.has_read_messages">
          <message-card :data="msg" :accesstoken="userData.accesstoken"></message-card>
        </li>
      </ul>
      <p v-if="!messageData.has_read_messages.length" class="no-msg">暂无消息</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BackBar from '../BackBar/BackBar'
  import MessageCard from '../MessageCard/MessageCard'
  import { mapGetters } from 'vuex'

  export default {
    components: {
      BackBar,
      MessageCard
    },
    computed: {
      ...mapGetters([
        'userData',
        'messageData'
      ])
    },
    methods: {
      markAll () {
        this.axios.post('https://cnodejs.org/api/v1/message/mark_all', {
          accesstoken: this.userData.accesstoken
        }).then(res => {
          this.$store.dispatch('add_success', {content: '标记成功'})
          this.$store.dispatch('mark_all')
        }, () => {
          this.$store.dispatch('add_fail', {content: '标记失败'})
        })
      }
    },
    activated () {
      window.scrollTo(0, 0)
      this.$store.dispatch('changeLoadingStatus', true)
      this.axios.get(`https://cnodejs.org/api/v1/messages?accesstoken=${this.userData.accesstoken}`)
        .then(res => {
          this.$store.dispatch('changeLoadingStatus', false)
          this.$store.dispatch('get_messages', res.data.data)
        })
    },
    deactivated () {
      // 离开路由之前，将加载的状态还原为true
      this.isLoading = true
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  .my-notification {
    width: 100%;
    min-height: 100%;
    padding-top: 48px;
    .not-read, .has-read {
      width: 100%;
      position: relative;
      .title {
        background-color: #EFF2F7;
        padding-left: 20px;
        height: 50px;
        line-height: 50px;
        font-size: 20px;
      }
      .no-msg {
        padding-left: 20px;
        line-height: 48px;
      }
    }
    .not-read {
      .mark-all {
        position: absolute;
        top: 7px;
        right: 20px;
        width: 96px;
        height: 36px;
        line-height: 36px;
        border-radius: 8px;
        background-color: #8492A6;
        color: #f9fafc;
        font-size: 12px;
        text-align: center;
        &:active {
          background-color: #475669;
        }
      }
    }
  }
</style>
