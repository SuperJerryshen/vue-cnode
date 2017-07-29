<script src="store/store.js"></script>
<template>
  <div id="app">
    <keep-alive exclude="UserDetail">
      <router-view></router-view>
    </keep-alive>
    <messages></messages>
    <loading></loading>
  </div>
</template>

<script>
  import './common/style/icon.scss'
  import Messages from './components/Messages/Messages'
  import Loading from './components/Loading/Loading'

  export default {
    name: 'app',
    components: {
      Messages,
      Loading
    }
  }
</script>

<style lang="scss">
  @import "./common/style/base";
  @import "./common/style/animation";
</style>
