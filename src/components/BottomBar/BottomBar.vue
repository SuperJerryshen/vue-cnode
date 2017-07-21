<template>
  <div class="bottom-bar">
    <div class="collect" @click="collectIt">
      <i class="iconfont" :class="[isCollect ?  'icon-collected' : 'icon-collect']"></i>
      <p><span v-if="isCollect">已</span>收藏</p>
    </div>
    <router-link class="edit" v-if="isLogin && isSelf" :to="{path: '/publish', query: {update: true, topic_id: topicId}}">
      <i class="iconfont icon-edit"></i>
      <p>编辑</p>
    </router-link>
    <div class="input">
      <input type="text" placeholder="在此输入回复" :value="replyData" ref="input">
    </div>
    <div class="reply" @click="pushReply">
      <i class="iconfont icon-fabu1"></i>
      <p>回复</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters([
        'replyData',
        'replyAtId',
        'userData',
        'isFocus'
      ])
    },
    watch: {
      isFocus (val, oldVal) {
        if (val) {
          this.$refs.input.focus()
        }
      }
    },
    mounted () {
      this.$refs.input.addEventListener('input', (e) => {
        this.$store.dispatch('sync_reply_data', e.target.value)
      })
      this.$refs.input.addEventListener('blur', e => {
        this.$store.dispatch('focus_is_false')
      })
    },
    methods: {
      collectIt () {
        if (!this.isLogin) {
          this.$store.dispatch('add_warn', {
            content: '请登录后使用'
          })
          return false
        }
        if (this.isCollect) {
          this.axios.post('https://cnodejs.org/api/v1/topic_collect/de_collect', {
            accesstoken: this.accesstoken,
            topic_id: this.topicId
          }).then(res => {
            console.log(res)
            if (res.data.success) {
              this.$store.dispatch('deCollect')
            }
          }, () => {
            this.$store.dispatch('connect_fail')
          })
        } else if (!this.isCollect) {
          this.axios.post('https://cnodejs.org/api/v1/topic_collect/collect', {
            accesstoken: this.accesstoken,
            topic_id: this.topicId
          }).then(res => {
            if (res.data.success) {
              this.$store.dispatch('collect')
            }
          }, () => {
            this.$store.dispatch('connect_fail')
          })
        }
      },
      pushReply () {
        if (this.isLogin) {
          this.axios.post(`https://cnodejs.org/api/v1/topic/${this.topicId}/replies`, {
            accesstoken: this.accesstoken,
            content: this.replyData,
            reply_id: this.replyAtId
          }).then(res => {
            if (res.data.success) {
              // 成功发送回复后，
              // 将内容添加到评论列表中
              this.$store.dispatch('add_success', {
                content: '评论成功'
              })
              this.$store.dispatch('add_reply', {
                idx: this.replyAtId,
                data: {
                  id: res.data.reply_id,
                  author: {
                    loginname: this.userData.loginname,
                    avatar_url: this.userData.avatar_url
                  },
                  content: `<div class="markdown-text">${this.replyData}</div>`,
                  ups: [],
                  create_at: new Date().toISOString(),
                  reply_id: this.replyAtId,
                  is_uped: false
                }
              })
              this.$store.dispatch('cancel_reply_at')
            }
          }, () => {
            this.$store.dispatch('connect_fail')
          })
        } else {
          this.$store.dispatch('add_warn', {
            content: '请登录后使用'
          })
        }
      }
    },
    props: {
      // 父组件向其传入以下参数：
      // topicId, isCollect, isLogin
      topicId: {
        type: String,
        required: true,
        default: ''
      },
      isCollect: {
        type: Boolean,
        required: true,
        default: false
      },
      isLogin: {
        type: Boolean,
        required: true,
        default: false
      },
      isSelf: {
        type: Boolean,
        required: true,
        default: false
      },
      accesstoken: {
        type: String,
        required: true,
        default: ''
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  .bottom-bar {
    display: flex;
    position: fixed;
    height: 56px;
    width: 100%;
    bottom: 0;
    left: 0;
    background: rgba(7, 17, 27, .8);
    -webkit-backdrop-filter: blur(8px);
    z-index: 2000;
    .collect, .edit, .reply, .collected {
      flex: 0 0 56px;
      color: #ffffff;
      text-align: center;
      font-size: 8px;
      padding-top: 4px;
      .iconfont {
        font-size: 36px;
      }
    }
    .input {
      flex: 1;
      input {
        width: 100%;
        height: 40px;
        margin-top: 8px;
        border-radius: 5px;
        padding: 0 5px;
        font-size: 14px;
      }
    }
  }
</style>
