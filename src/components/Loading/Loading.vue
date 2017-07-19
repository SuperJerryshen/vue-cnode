<template>
  <div class="loading">
    <div class="loading-content">
      <img src="./loading.svg" alt="loading" class="loading-pic">
      <p class="text">玩命加载中</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style lang="scss" rel="stylesheet/scss">
  .loading {
    width: 100%;
    text-align: center;
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
        color: #8492A6;
        font-family: "Heiti SC", "Microsoft YaHei", "微软雅黑", sans-serif;
      }
    }
  }
</style>
