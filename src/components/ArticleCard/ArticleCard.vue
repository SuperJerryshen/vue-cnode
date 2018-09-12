<template>
  <div class="article-card">
    <span v-if="!simpleMode">
      <span class="top"
            v-if="article.top">置顶</span>
      <span v-if="article.top"> ·</span>
      <span class="good"
            v-if="article.good">精华</span>
      <span v-if="article.good"> ·</span>
      <span class="tab">{{ this.tabTypes[article.tab] }}</span> ·
    </span>
    <span class="last-reply-time">{{ article.last_reply_at | timeFormat}}</span>
    <h1 class="title">
      <router-link :to="{
        name: 'article', params: {id: article.id}
      }">{{ article.title }}</router-link>
    </h1>
    <div class="author"
         @click="toAuthorDetail">
      <img class="avatar"
           :src="article.author.avatar_url"
           alt="article.author.loginname">
      <p class="loginname">{{ article.author.loginname }}</p>
    </div>
    <div class="info"
         v-if="!simpleMode">
      <i class="iconfont icon-clickQuery"></i>
      <span class="visit-count">{{ article.visit_count }}</span>
      <i class="iconfont icon-pinglun"></i>
      <span class="reply-count">{{ article.reply_count }}</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import timeFormat from '@/common/utils/timeFormat';

export default {
  data() {
    return {
      tabTypes: {
        good: '精华',
        share: '分享',
        ask: '问答',
        job: '招聘',
        dev: '客户端测试',
      },
    };
  },
  methods: {
    toAuthorDetail() {
      this.$router.push(`/user/${this.article.author.loginname}`);
    },
  },
  filters: {
    timeFormat,
  },
  props: {
    article: {
      type: Object,
      required: true,
    },
    simpleMode: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" rel="stylesheet/scss">
/*屏幕宽度小于450px的设备*/
@media screen and (max-width: 1200px) {
  .article-card {
    width: 100%;
  }
}

/*屏幕宽度大于1200px的设备*/
@media screen and (min-width: 1200px) {
  .article-card {
    width: 1200px;
  }
}

.article-card {
  margin: 0 auto;
  padding: 12px 24px;
  border-bottom: 1px solid #eff2f7;
  background-color: #ffffff;
  font-size: 10px;
  position: relative;
  min-height: 100px;
  &:hover {
    background-color: #f9fafc;
  }
  /*对置顶，精华，和类型分配颜色样式*/
  .top {
    color: #ff4949;
  }
  .good {
    color: #f7ba2a;
  }
  .tab {
    color: #20a0ff;
  }
  /*标题样式*/
  .title {
    font-size: 16px;
    padding: 10px 60px 10px 0;
    word-wrap: break-word;
  }
  /*用户头像及用户名*/
  .author {
    position: absolute;
    bottom: 50%;
    transform: translateY(50%);
    right: 20px;
    text-align: center;
    width: 48px;
    .avatar {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      border: 1px solid #eff2f7;
    }
    .loginname {
      color: #475669;
      font-size: 10px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .info {
    font-size: 12px;
    color: #475669;
    padding: 2px 5px;
    border-radius: 10px;
    border: 1px solid #e5e9f2;
    display: inline-block;
    .iconfont {
      font-size: 12px;
    }
  }
}
</style>
