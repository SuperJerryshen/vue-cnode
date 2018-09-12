<template>
  <div class="message"
       :class="{'has-not-read': !hasRead}">
    <router-link :to="{
      name: 'user', params: {loginname: data.author.loginname}
    }">{{ data.author.loginname }}</router-link>
    回复了你的文章
    <router-link :to="{
      name: 'article', params: {id: data.topic.id}
    }">{{ data.topic.title }}</router-link>
    <p class="reply-time">回复于{{ data.reply.create_at | timeFormat }}</p>
    <div class="mark"
         v-if="!hasRead"
         @click="markOne(data.id)">标记已读</div>
    <div class="content">
      <h2>详细内容：</h2>
      <div class="markdown-text"
           v-html="data.reply.content"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import timeFormat from '@/common/utils/timeFormat';

export default {
  methods: {
    markOne(id) {
      this.axios
        .post(`https://cnodejs.org/api/v1/message/mark_one/${id}`, {
          accesstoken: this.accesstoken,
        })
        .then(
          () => {
            this.$store.dispatch('add_success', { content: '标记成功' });
            this.$store.dispatch('mark_one', id);
          },
          () => {
            this.$store.dispatch('add_fail', { content: '标记失败' });
          }
        );
    },
  },
  filters: {
    timeFormat,
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
    hasRead: {
      type: Boolean,
      default: true,
    },
    accesstoken: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" rel="stylesheet/scss">
.message {
  &.has-not-read {
    padding-right: 80px;
  }
  position: relative;
  padding: 15px 10px 0 20px;
  border-bottom: 1px solid #d3dce6;
  .reply-time {
    line-height: 20px;
    font-size: 12px;
  }
  .mark {
    position: absolute;
    top: 15px;
    right: 10px;
    width: 64px;
    height: 36px;
    line-height: 36px;
    border-radius: 8px;
    background-color: #8492a6;
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
