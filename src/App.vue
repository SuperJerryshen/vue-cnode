<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import NavBar from './components/navBar/navBar'
  import './common/style/icon.scss'

  export default {
    name: 'app',
    components: {
      NavBar
    }
  }
</script>

<style lang="scss">
  @import "./common/style/base";
</style>
