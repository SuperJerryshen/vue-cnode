<template>
  <div class="reply">
    <h1 class="title">{{ comments.length }} 回复</h1>
    <comment-sorter></comment-sorter>
    <ul class="comments">
      <li class="comment" v-for="(item,idx) in sortedComments">
        <div class="reply-author">
          <img @click="toAuthorDetail(item.author.loginname)" class="avatar" :src="item.author.avatar_url"
               alt="author"/>
          <span class="loginname">{{ item.author.loginname }}</span>
          <span class="floor">{{ idx + 1 }}楼</span> ·
          <span class="time">{{ item.create_at | timeFormat }}</span>
        </div>
        <div class="ups">
          <i class="iconfont icon-praise" @click="upReply(item.id)"
             :class="{'uped': item.is_uped}"></i><span>{{ item.ups.length }}</span>
          <i class="iconfont icon-reply"
             @click="replyAt({name: item.author.loginname, id: item.reply_id, num: idx + 1})"></i>
        </div>
        <div class="text" v-html="item.content"></div>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  import timeFormat from '../../common/utils/timeFormat'
  import { deepCopy } from '../../common/utils/deepCopy'
  import CommentSorter from './CommentSorter'
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters([
        'userData',
        'sortingMethod'
      ]),
      sortedComments () {
        // 根据sortingMethod的种类来进行排序
        if (this.sortingMethod === 'default') {
          return this.comments
        }
        var copy = deepCopy(this.comments)
        if (this.sortingMethod === 'time') {
          return copy.sort((a, b) => {
            return new Date(b.create_at) - new Date(a.create_at)
          })
        } else if (this.sortingMethod === 'hot') {
          return copy.sort((a, b) => {
            return b.ups.length - a.ups.length
          })
        }
      }
    },
    methods: {
      toAuthorDetail (name) {
        this.$router.push(`/user/${name}`)
      },
      replyAt (username) {
        this.$store.dispatch('reply_at', username)
      },
      upReply (id) {
        this.axios.post(`https://cnodejs.org/api/v1/reply/${id}/ups`, {
          accesstoken: this.userData.accesstoken
        }).then(res => {
          if (res.data.success) {
            this.$store.dispatch('sync_reply_up', {
              id,
              action: res.data.action,
              uper: this.userData.id
            })
          }
        }, () => {
          this.$store.dispatch('connect_fail')
        })
      }
    },
    filters: {
      timeFormat
    },
    props: {
      comments: {
        types: Array,
        default: [],
        required: true
      }
    },
    components: {
      CommentSorter
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  .reply {
    position: relative;
    .title {
      font-size: 14px;
      padding-bottom: 10px;
      text-indent: 1.5em;
      color: #475669;
    }
    .comment-sorter {
      position: absolute;
      top: 0;
      right: 15px;
    }
    .comments {
      background-color: #ffffff;
      .comment {
        padding-top: 5px;
        position: relative;
        .reply-author {
          height: 36px;
          line-height: 36px;
          font-size: 12px;
          padding-left: 15px;
          .avatar {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            border: 1px solid #EFF2F7;
            vertical-align: middle;
          }
          .loginname {
            color: #475669;
          }
          .floor, .time {
            color: #20A0FF;
          }
        }
        .ups {
          position: absolute;
          top: 12px;
          right: 0;
          color: #4f6275;
          .icon-praise {
            font-size: 20px;
            padding: 10px 2px 10px 10px;
            &.uped {
              color: #20a0ff;
            }
          }
          .icon-reply {
            font-size: 20px;
            padding: 10px 10px 10px 0;
          }
        }
        .text {
          font-size: 14px;
          .markdown-text {
            padding: 8px 25px;
          }
        }
      }
    }
  }
</style>
