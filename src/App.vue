<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
  import navBar from './components/navBar/navBar'
  import './common/style/icon.scss'

  export default {
    name: 'app',
    components: {
      navBar
    }
  }
</script>

<style lang="scss">
  @import "./common/style/base";
</style>
