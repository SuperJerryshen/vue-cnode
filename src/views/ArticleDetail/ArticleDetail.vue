<template>
  <div class="article-wrap">
    <div class="article"
         v-show="!isLoading"
         v-if="articleData">
      <back-bar :title="articleData.title"></back-bar>
      <div class="article-content">
        <div class="header">
          <h1 class="title">{{ articleData.title }}</h1>
          <span class="top"
                v-if="articleData.top">置顶</span>
          <span class="good"
                v-if="articleData.good">精华</span> ·
          <span class="publish-time"
                v-if="articleData.create_at">发布于{{ articleData.create_at | timeFormat }}
          </span> ·
          <span class="author"
                v-if="articleData.author.loginname">作者 {{ articleData.author.loginname }}
          </span> ·
          <span class="visit-count">{{ articleData.reply_count }}次浏览</span> ·
          <span class="last-reply"
                v-if="articleData">最后回复于{{ articleData.last_reply_at | timeFormat }}
          </span> ·
          <span class="tab">{{ tabTypes[articleData.tab] }}</span>
        </div>
        <div class="content"
             v-html="articleData.content"></div>
        <Comments :comments="articleData.replies"></Comments>
        <bottom-bar :topicId="articleData.id"
                    :isCollect="articleData.is_collect"
                    :isLogin="isLogin"
                    :isSelf="isSelf"
                    :accesstoken="this.userData.accesstoken"></bottom-bar>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapGetters } from 'vuex';
import BackBar from '@/components/BackBar';
import BottomBar from './BottomBar/BottomBar.vue';
import timeFormat from '../../common/utils/timeFormat';
import Comments from './Comments.vue';

export default {
  data() {
    return {
      tabTypes: {
        share: '分享',
        ask: '问答',
        job: '招聘',
        dev: '客户端测试',
      },
    };
  },
  computed: {
    ...mapGetters(['articleData', 'isLogin', 'userData', 'isLoading']),
    isSelf() {
      return this.articleData.author.loginname === this.userData.loginname;
    },
  },
  filters: {
    timeFormat,
  },
  activated() {
    // 在载入路由之前
    // 异步获取数据，并且显示加载界面
    this.$store.dispatch('changeLoadingStatus', true);
    this.axios
      .get(`https://cnodejs.org/api/v1/topic/${
        this.$route.params.id
      }?accesstoken=${this.userData.accesstoken}`)
      .then((res) => {
        this.$store.dispatch('changeLoadingStatus', false);
        this.$store.dispatch('initArticleData', res.data.data);
      });
  },
  deactivated() {
    // 离开路由之前，将加载的状态还原为true
    this.isLoading = true;
    window.scrollTo(0, 0);
    this.$store.dispatch('cancel_reply_at');
  },
  components: {
    BackBar,
    BottomBar,
    Comments,
  },
};
</script>

<style lang="scss" rel="stylesheet/scss">
.article-wrap {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #eff2f7;
  /*屏幕宽度小于450px的设备*/
  @media screen and (max-width: 1200px) {
    .article {
      width: 100%;
    }
  }
  /*屏幕宽度大于1200px的设备*/
  @media screen and (min-width: 1200px) {
    .article {
      width: 1200px;
    }
  }
  .article {
    margin: 0 auto;
    position: relative;
    height: 100%;
    .article-content {
      width: 100%;
      min-height: 100%;
      overflow: scroll;
      -webkit-overflow-scrolling: touch;
      overflow-scrolling: touch;
      padding-top: 48px;
      padding-bottom: 56px;
      .header {
        padding: 10px 15px 15px 15px;
        margin-bottom: 15px;
        background: #ffffff;
        font-size: 10px;
        border-bottom: 1px solid #d3dce6;
        line-height: 20px;
        .title {
          color: #1f2d3d;
          font-size: 20px;
          padding: 5px 0;
          word-wrap: break-word;
        }
        .top {
          background-color: #20a0ff;
          color: #ffffff;
          padding: 2px 5px;
          border-radius: 6px;
        }
        .good {
          color: #ff4949;
        }
      }
      .content {
        .markdown-text {
          padding: 25px 20px;
        }
      }
    }
  }
}
</style>
