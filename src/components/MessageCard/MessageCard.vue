<template>
  <div class="message">
    <router-link :to="{ name: 'user', params: {loginname: data.author.loginname}}">{{ data.author.loginname }}</router-link>
    回复了你的文章
    <router-link :to="{ name: 'article', params: {id: data.topic.id}}">{{ data.topic.title }}</router-link>
    <p class="reply-time">回复于{{ data.reply.create_at | timeFormat }}</p>
    <div class="mark" v-if="!hasRead">标记已读</div>
    <div class="content">
      <h2>详细内容：</h2>
      <div class="markdown-text" v-html="data.reply.content"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import timeFormat from '../../common/utils/timeFormat'

  export default {
    filters: {
      timeFormat
    },
    props: {
      data: {
        type: Object,
        required: true
      },
      hasRead: {
        type: Boolean,
        default: true
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  .message {
    position: relative;
    padding: 15px 10px 0 20px;
    border-bottom: 1px solid #D3DCE6;
    .reply-time {
      line-height: 20px;
      font-size: 12px;
    }
    .mark {
      position: absolute;
      top: 15px;
      right: 20px;
      width: 64px;
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
    .content {
      h2 {
        font-size: 16px;
        line-height: 32px;
      }
      .markdown-text {
        border: none;
        padding: 0;
        font-size: 14px;
      }
    }
  }
</style>
