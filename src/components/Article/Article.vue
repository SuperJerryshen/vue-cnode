<template>
  <div class="article-wrap">
    <div class="article" v-show="!isLoading" v-if="articleData">
      <div class="article-bar" v-if="this.devicePixelRatio > 1">
        <span class="iconfont icon-houtui" @click="backToHome"></span><h1 class="bar-article">{{ articleData.title }}</h1>
      </div>
      <div class="article-content">
        <div class="header">
          <h1 class="title">{{ articleData.title }}</h1>
          <span class="top" v-if="articleData.top">置顶</span>
          <span class="good" v-if="articleData.good">精华</span> · <span class="publish-time" v-if="articleData.create_at">发布于{{ articleData.create_at | timeFormat }}</span> · <span class="author" v-if="articleData.author.loginname">作者 {{ articleData.author.loginname }}</span> · <span class="visit-count">{{ articleData.reply_count }}次浏览</span> · <span class="last-reply" v-if="articleData">最后回复于{{ articleData.last_reply_at | timeFormat }}</span> · <span class="tab">{{ tabTypes[articleData.tab] }}</span>
        </div>
        <div class="content" v-html="articleData.content"></div>
        <div class="reply">
          <h1 class="title">{{ articleData && articleData.replies.length }} 回复</h1>
          <ul class="comments">
            <li class="comment" v-for="(item,idx) in articleData.replies">
              <div class="reply-author">
                <img class="avatar" :src="item.author.avatar_url" alt="author" />
                <span class="loginname">{{ item.author.loginname }}</span>
                <span class="floor">{{ idx + 1 }}楼</span> ·
                <span class="time">{{ item.create_at | timeFormat }}</span>
              </div>
              <div class="ups">
                <i class="iconfont icon-praise"></i><span>{{ item.ups.length }}</span>
              </div>
              <div class="text" v-html="item.content"></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <loading v-show="isLoading"></loading>
  </div>
</template>

<script type="text/ecmascript-6">
  import { mapGetters } from 'vuex'
  import Loading from '../Loading/Loading'
  import timeFormat from '../../common/utils/timeFormat'

  export default {
    data () {
      return {
        isLoading: true,
        tabTypes: {
          'share': '分享',
          'ask': '问答',
          'job': '招聘',
          'dev': '客户端测试'
        }
      }
    },
    computed: {
      ...mapGetters([
        'articleData'
      ]),
      devicePixelRatio () {
        return window.devicePixelRatio
      }
    },
    filters: {
      'timeFormat': timeFormat
    },
    methods: {
      backToHome () {
        this.$router.back()
      }
    },
    beforeRouteEnter (to, from, next) {
      next(vm => {
        console.log(vm.isLoading)
        vm.axios.get(`https://cnodejs.org/api/v1/topic/${vm.$route.params.id}`)
          .then(res => {
            vm.isLoading = false
            vm.$store.dispatch('initArticleData', res.data.data)
          })
      })
    },
    beforeRouteLeave (to, from, next) {
      this.isLoading = true
      next()
    },
    components: {
      Loading
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  .slide-enter-active, .slide-leave-active {
    transition: transform .5s ease;
  }
  .slide-enter, .slide-leave-to {
    transform: translateX(100%);
  }
  .article-wrap {
    flex: 1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #EFF2F7;
    /*屏幕宽度小于450px的设备*/
    @media screen and (max-width: 1200px){
      .article {
        width: 100%;
      }
    }
    /*屏幕宽度大于1200px的设备*/
    @media screen and (min-width: 1200px){
      .article {
        width: 1200px;
      }
    }
    .article {
      margin: 0 auto;
      position: relative;
      height: 100%;
      display: flex;
      flex-direction: column;
      .article-bar {
        width: 100%;
        height: 48px;
        line-height: 48px;
        flex: 0 0 48px;
        background-color: #1F2D3D;
        color: #ffffff;
        position: absolute;
        z-index: 9999;
        .icon-houtui {
          line-height: 28px;
          font-size: 24px;
          padding: 10px 20px 10px 10px;
          position: absolute;
          left: 0;
        }
        .bar-article {
          margin: 0 auto;
          text-align: center;
          font-size: 14px;
          max-width: 16em;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
      }
      .article-content {
        flex: 1;
        width: 100%;
        overflow: scroll;
        -webkit-overflow-scrolling: touch;
        overflow-scrolling: touch;
        padding-top: 48px;
        .header {
          padding: 10px 15px 15px 15px;
          margin-bottom: 15px;
          background: #ffffff;
          font-size: 10px;
          border-bottom: 1px solid #D3DCE6;
          line-height: 20px;
          .title {
            color: #1F2D3D;
            font-size: 20px;
            padding: 5px 0;
            word-wrap: break-word;
          }
          .top {
            background-color: #20A0FF;
            color: #ffffff;
            padding: 2px 5px;
            border-radius: 6px;
          }
          .good {
            color: #FF4949;
          }
        }
        .content {
          .markdown-text {
            padding: 25px 20px;
          }
        }
        .reply {
          .title {
            font-size: 14px;
            padding-bottom: 10px;
            text-indent: 1.5em;
            color: #475669;
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
                right: 20px;
                color: #4f6275;
                .icon-praise {
                  font-size: 18px;
                  padding-right: 2px;
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
      }
    }
  }
</style>
