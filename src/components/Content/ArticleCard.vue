<template>
  <div class="article-card">
    <span class="top" v-if="articleOverview.top">置顶</span><span v-if="articleOverview.top"> ·</span>
    <span class="good" v-if="articleOverview.good">精华</span><span v-if="articleOverview.good"> ·</span>
    <span class="tab">{{ this.tabTypes[articleOverview.tab] }}</span> ·
    <span class="last-reply-time">{{ articleOverview.last_reply_at.slice(0, 10)}}</span>
    <h1 class="title">{{ articleOverview.title }}</h1>
    <div class="author">
      <img class="avatar" :src="articleOverview.author.avatar_url" alt="articleOverview.author.loginname">
      <p class="loginname">{{ articleOverview.author.loginname }}</p>
    </div>
    <div class="info">
      <i class="iconfont icon-clickQuery"></i>
      <span class="visit-count">{{ articleOverview.visit_count }}</span>
      <i class="iconfont icon-pinglun"></i>
      <span class="reply-count">{{ articleOverview.reply_count }}</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        tabTypes: {
          'good': '精华',
          'share': '分享',
          'ask': '问答',
          'job': '招聘',
          'dev': '客户端测试'
        }
      }
    },
    props: {
      articleOverview: {
        type: Object
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  /*屏幕宽度小于450px的设备*/
  @media screen and (max-width: 1200px){
    .article-card {
      width: 100%;

    }
  }
  /*屏幕宽度大于1200px的设备*/
  @media screen and (min-width: 1200px){
    .article-card {
      width: 1200px;
    }
  }
  .article-card {
    margin: 0 auto;
    padding: 12px 24px;
    border-bottom: 1px solid #EFF2F7;
    background-color: #ffffff;
    font-size: 10px;
    position: relative;
    min-height: 100px;
    /*对置顶，精华，和类型分配颜色样式*/
    .top {
      color: #FF4949;
    }
    .good {
      color: #F7BA2A;
    }
    .tab {
      color: #20A0FF;
    }
    /*标题样式*/
    .title {
      font-size: 16px;
      padding: 10px 60px 10px 0;
    }
    /*用户头像及用户名*/
    .author {
      position: absolute;
      bottom: 50%;
      transform: translateY(50%);
      right: 10px;
      text-align: center;
      width: 48px;
      .avatar {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        border: 1px solid #EFF2F7;
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
      border: 1px solid #E5E9F2;
      display: inline-block;
      .iconfont {
        font-size: 12px;
      }
    }
  }

</style>
