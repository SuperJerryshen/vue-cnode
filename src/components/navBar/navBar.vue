<template>
  <div class="nav-bar">
    <div class="nav-bar-wrap">
      <a href="/"><img src="./cnodejs_light.svg" alt="CNode" class="logo" width="120" height="28"></a>
      <div class="info" @click="changeAboutMeShow"><i class="iconfont icon-about"></i></div>
      <div class="notification"><i class="iconfont icon-notification"></i></div>
      <div class="user" @click="showUserDetail">
        <i class="iconfont icon-user" v-show="!isLogin"></i>
        <img class="user-avatar" :src="userData.avatar_url" alt="user-avatar" v-show="isLogin">
      </div>
      <transition name="pulldown">
        <ul class="user-menu" v-show="isUserMenuShow">
          <li><i class="iconfont icon-home"></i><span @click="toUserDetail">我的主页</span></li>
          <li><i class="iconfont icon-exit"></i><span @click="loginOut">退出登录</span></li>
        </ul>
      </transition>
    </div>
    <about-me v-show="isAboutMeShow"></about-me>
    <login v-if="!isLogin" v-show="isLoginShow"></login>
  </div>
</template>

<script type="text/ecmascript-6">
  import AboutMe from '../AboutMe/AboutMe'
  import Login from '../Login/Login'
  import { mapGetters } from 'vuex'

  export default {
    data () {
      return {
        isUserMenuShow: false
      }
    },
    computed: {
      ...mapGetters([
        'isAboutMeShow',
        'isLogin',
        'isLoginShow',
        'userData'
      ])
    },
    methods: {
      changeAboutMeShow () {
        this.$store.dispatch('changeAboutMeShow')
      },
      showUserDetail () {
        // 分为两种情况：
        // ① 登  录：展示个人主页和退出的菜单
        // ② 未登录：显示登录窗口
        if (!this.isLogin) {
          this.$store.dispatch('changeLoginShow')
        } else {
          this.isUserMenuShow = !this.isUserMenuShow
        }
      },
      toUserDetail () {
        this.isUserMenuShow = !this.isUserMenuShow
        this.$router.push({name: 'user', params: {loginname: this.userData.loginname}})
      },
      loginOut () {
        this.$store.dispatch('loginOut')
        this.isUserMenuShow = !this.isUserMenuShow
      }
    },
    components: {
      AboutMe,
      Login
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
    background: rgba(7, 17, 27, .8);
    -webkit-backdrop-filter: blur(8px);
    padding: 10px;
    z-index: 100;
    /*屏幕宽度小于450px的设备*/
    @media screen and (max-width: 1200px) {
      .nav-bar-wrap {
        width: 100%;
        margin: 0 auto;
      }
    }
    /*屏幕宽度大于1200px的设备*/
    @media screen and (min-width: 1200px) {
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
        .user-avatar {
          width: 24px;
          height: 24px;
          border-radius: 50%;
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
      .user-menu {
        position: absolute;
        top: 51px;
        right: 0;
        width: 100%;
        height: 96px;
        list-style: none;
        background-color: rgba(7, 17, 27, .8);
        -webkit-backdrop-filter: blur(8px);
        overflow: hidden;
        z-index: 200;
        li {
          height: 48px;
          line-height: 48px;
          font-size: 16px;
          margin: 0 30px;
          text-align: center;
          border-bottom: 1px solid #475669;
          color: #ffffff;
          a {
            color: #ffffff;
          }
          .iconfont {
            font-size: 20px;
            padding-right: 5px;
          }
          span {
            vertical-align: top;
          }
        }
      }
    }
  }
</style>
