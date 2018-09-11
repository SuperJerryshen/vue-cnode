<template>
  <div class="back-bar">
    <i class="iconfont icon-houtui" @click="backTo"></i>
    <h1 class="bar-article">{{ title }}</h1>
    <i class="iconfont icon-home" @click="backHome"></i>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  methods: {
    backTo() {
      this.$router.back();
    },
    backHome() {
      this.$router.push('/');
    },
  },
  props: {
    title: {
      type: String,
      default: '标题',
      required: true,
    },
  },
};
</script>

<style lang="scss" rel="stylesheet/scss">
.back-bar {
  width: 100%;
  height: 48px;
  line-height: 48px;
  background-color: rgba(7, 17, 27, 0.8);
  -webkit-backdrop-filter: blur(8px);
  color: #ffffff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 4000;
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
  .icon-home {
    line-height: 28px;
    font-size: 24px;
    padding: 10px 20px 10px 10px;
    position: absolute;
    right: 0;
    top: 0;
  }
}
</style>
