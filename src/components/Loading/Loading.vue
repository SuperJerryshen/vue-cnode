<template>
  <div class="loading" v-show="isLoading">
    <div class="loading-content">
      <img src="./loading.svg" alt="loading" class="loading-pic">
      <p class="text">玩命加载中</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      // 该属性暂时放置在store/modules/content下
      'isLoading',
    ]),
  },
};
</script>

<style lang="scss" rel="stylesheet/scss">
.loading {
  position: fixed;
  z-index: 4000;
  top: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  background-color: #f8f8f9;
  .loading-content {
    height: 76px;
    margin: 50% auto 0;
    .loading-pic {
      width: 48px;
      height: 48px;
      animation: loading 1s linear infinite;
    }
    .text {
      padding-top: 10px;
      font-size: 14px;
      color: #8492a6;
      font-family: "Heiti SC", "Microsoft YaHei", "微软雅黑", sans-serif;
    }
  }
}
</style>
