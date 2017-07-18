<template>
  <transition name="fadeIn">
    <div class="login-wrap">
      <div class="login">
        <h2 class="title">用户登录</h2>
        <p class="info">请到CNode中文官网，将设置选项中的Access Token的字符串拷贝至输入框中，并点击登录，完成用户验证。（30天内免登陆）</p>
        <div class="password">
          <i class="iconfont icon-token"></i>
          <input class="token-input" type="text" ref="token" placeholder="在此输入token"/>
          <button class="login-button" @click="verifyUser">登录</button>
        </div>
      </div>
      <div class="shade" @click="hideLogin"></div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  export default {
    methods: {
      verifyUser () {
        const token = this.$refs.token.value.trim()
        if (token.length !== 0) {
          this.axios.post('https://cnodejs.org/api/v1/accesstoken', {
            accesstoken: token
          }).then(res => {
            if (res.data.success) {
              this.$store.dispatch('initUserData', res.data)
              this.$store.dispatch('changeLoginShow')
            }
          }).catch(() => {
            console.log('token验证失败！')
          })
        }
      },
      hideLogin () {
        this.$store.dispatch('changeLoginShow')
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  .login-wrap {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    /*用户登录页面样式*/
    .login {
      position: absolute;
      top: 20%;
      left: 10%;
      width: 80%;
      height: 60%;
      max-height: 350px;
      border-radius: 20px;
      background-color: rgba(7, 17, 27, .8);
      padding: 5%;
      text-align: center;
      font-size: 14px;
      color: #E5E9F2;
      z-index: 100;
      h2 {
        padding-bottom: 10px;
        margin-bottom: 10px;
        border-bottom: 1px solid #E5E9F2;
        font-size: 24px;
      }
      .info {
        line-height: 20px;
        margin-top: 15px;
        padding: 0 10px;
        font-size: 16px;
      }
      .password {
        margin-top: 20px;
        .iconfont {
          color: #e5e9f2;
          font-size: 30px;
        }
        .token-input {
          width: 80%;
          height: 30px;
          line-height: 30px;
          font-size: 14px;
          vertical-align: top;
          border-radius: 5px;
          text-indent: 10px;
        }
        .login-button {
          display: block;
          margin: 30px auto;
          width: 80px;
          height: 40px;
          border-radius: 6px;
          background-color: #ff763b;
          color: #ffffff;
          font-size: 16px;
          &:active {
            background-color: #c06037;
          }
        }
      }
    }
    /*遮罩层样式*/
    .shade {
      background-color: rgba(7, 17, 27, .6);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
</style>
