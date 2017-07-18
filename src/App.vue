<script src="store/store.js"></script>
<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import './common/style/icon.scss'

  export default {
    name: 'app'
  }
</script>

<style lang="scss">
  @import "./common/style/base";
  @import "./common/style/animation";
</style>
