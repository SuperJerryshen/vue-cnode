<template>
  <ul class="messages">
    <transition-group tag="ul" name="slide">
      <li v-for="(item,idx) in messages" class="message" :class="item.type" :key="idx">
        <i class="iconfont" :class="'icon-'+item.type"></i>
        <span class="content">{{ item.content }}</span>
      </li>
    </transition-group>
  </ul>
</template>

<script type="text/ecmascript-6">
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['messages']),
  },
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.messages {
  .message {
    position: fixed;
    top: 76px;
    left: 50%;
    z-index: 5000;
    transform: translateX(-50%);
    background-color: #f9fafc;
    list-style: none;
    padding: 8px 12px;
    border-radius: 5px;
    box-shadow: 0 0 8px 0 #8492a6;
    .content {
      color: #324057;
      font-size: 14px;
      vertical-align: text-top;
    }
    .iconfont {
      font-size: 20px;
    }
    &.success {
      .iconfont {
        color: #19be6b;
      }
    }
    &.warn {
      .iconfont {
        color: #ff9900;
      }
    }
    &.fail {
      .iconfont {
        color: #ed3f14;
      }
    }
    &.loading {
      max-width: 110px;
      height: 36px;
      .iconfont {
        color: #2d8cf0;
        display: inline-block;
        font-size: 20px;
        animation: loading 0.5s linear infinite;
      }
    }
  }
}
</style>
