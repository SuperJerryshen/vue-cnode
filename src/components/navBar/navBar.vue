<template>
  <div class="nav-bar">
    <div class="nav-bar-wrap">
      <a href="/"><img src="./cnodejs_light.svg" alt="CNode" class="logo" width="120" height="28"></a>
      <div class="info" @click="changeAboutMeShow"><i class="iconfont icon-about"></i></div>
      <div class="notification"><i class="iconfont icon-notification"></i></div>
      <div class="user"><i class="iconfont icon-user"></i></div>
    </div>
    <about-me v-show="isAboutMeShow"></about-me>
  </div>
</template>

<script type="text/ecmascript-6">
  import AboutMe from '../AboutMe/AboutMe'
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters([
        'isAboutMeShow'
      ])
    },
    methods: {
      changeAboutMeShow () {
        this.$store.dispatch('changeAboutMeShow')
      }
    },
    components: {
      AboutMe
    }
  }
</script>

<style lang="scss">
  .nav-bar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background: #1F2D3D;
    padding: 10px;
    z-index: 100;
    /*屏幕宽度小于450px的设备*/
    @media screen and (max-width: 1200px){
      .nav-bar-wrap {
        width: 100%;
        margin: 0 auto;
      }
    }
    /*屏幕宽度大于1200px的设备*/
    @media screen and (min-width: 1200px){
      .nav-bar-wrap {
        width: 1200px;
        margin: 0 auto;
      }
    }
    .nav-bar-wrap {
      .info, .notification, .user {
        position: absolute;
        top: 0;
        color: #ffffff;
        height: 50px;
        padding: 12px;
        .icon-about, .icon-notification, .icon-user {
          font-size: 26px;
          &:active {
            color: #58B7FF;
          }
        }
        &.info {
          right: 100px;
        }
        &.notification {
          right: 50px;
        }
        &.user {
          right: 0;
        }
      }
    }
  }
</style>
