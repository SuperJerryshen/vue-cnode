<template>
  <div class="loading">
    <div class="circle">
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
    </div>
    <p class="text">玩命加载中</p>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style lang="scss" rel="stylesheet/scss">
  .loading {
    width: 100%;
    text-align: center;
    .circle {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background-color: #D3DCE6;
      margin: 50% auto 0;
      position: relative;
      padding: 20px;
      animation: loading 1s ease infinite;
      .point {
        position: absolute;
        width: 10%;
        height: 10%;
        background-color: #8492A6;
        border-radius: 50%;
        transform-origin: 30px 30px 0;
        &:nth-child(1) {
          transform: rotate(0deg);
        }
        &:nth-child(2) {
          transform: rotate(30deg);
        }
        &:nth-child(3) {
          transform: rotate(60deg);
        }
        &:nth-child(4) {
          transform: rotate(90deg);
        }
        &:nth-child(5) {
          transform: rotate(120deg);
        }
        &:nth-child(6) {
          transform: rotate(150deg);
        }
      }
    }
    .text {
      padding-top: 10px;
      font-size: 14px;
      color: #8492A6;
      font-family: "Heiti SC", "Microsoft YaHei", "微软雅黑", sans-serif;
    }
  }
</style>
