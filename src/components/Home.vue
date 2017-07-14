<template>
  <div class="home">
    <nav-bar></nav-bar>
    <content-list></content-list>
  </div>
</template>

<script type="text/ecmascript-6">
  import NavBar from './navBar/navBar'
  import ContentList from './Content/Content'
  export default {
    components: {
      NavBar,
      ContentList
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  .home {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
</style>
