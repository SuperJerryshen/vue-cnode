<template>
  <div class="nav-bar">
    <div class="nav-bar-wrap">
      <img src="./cnodejs_light.svg" alt="CNode" class="logo" width="120" height="28">
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style>
  .nav-bar {
    width: 100%;
    background: #1F2D3D;
    padding: 10px;
    flex: 0 0 50px;
  }

  /*屏幕宽度小于450px的设备*/
  @media screen and (max-width: 1200px){
    .nav-bar .nav-bar-wrap {
      width: 100%;
      margin: 0 auto;
    }
  }
  /*屏幕宽度大于1200px的设备*/
  @media screen and (min-width: 1200px){
    .nav-bar .nav-bar-wrap {
      width: 1200px;
      margin: 0 auto;
    }
  }
</style>
