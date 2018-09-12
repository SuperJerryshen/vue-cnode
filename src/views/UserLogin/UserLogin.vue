<template>
  <transition name="fadeIn">
    <page title="用户登录">
      <div class="login-wrap">
        <back-bar :title="'用户登录'"></back-bar>
        <div class="login">
          <img class="logo"
               src="@/common/pictures/cnodejs_light.svg"
               alt="logo">
          <p class="info">请到CNode中文官网，将设置选项中的Access Token的字符串拷贝至输入框中，并点击登录，完成用户验证。（30天内免登陆）</p>
          <div class="password">
            <i class="iconfont icon-token"></i>
            <input class="token-input"
                   type="text"
                   ref="token"
                   placeholder="在此输入token" />
            <button class="login-button"
                    @click="verifyUser">登录</button>
          </div>
        </div>
      </div>
    </page>
  </transition>
</template>

<script type="text/ecmascript-6">
import BackBar from '@/components/BackBar';

export default {
  methods: {
    verifyUser() {
      const token = this.$refs.token.value.trim();
      if (token.length !== 0) {
        this.axios
          .post('https://cnodejs.org/api/v1/accesstoken', {
            accesstoken: token,
          })
          .then(
            (res) => {
              this.$store.dispatch('add_success', { content: '登陆成功' });
              res.data.accesstoken = token;
              this.$store.dispatch('initUserData', res.data);
              this.$router.back();
            },
            () => {
              this.$store.dispatch('add_fail', {
                content: '验证失败',
              });
            }
          );
      } else {
        this.$store.dispatch('add_warn', {
          content: 'Token不能为空',
        });
      }
    },
  },
  components: {
    BackBar,
  },
};
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
    width: 100%;
    height: 100%;
    padding-top: 50px;
    background-color: rgba(7, 17, 27, 0.8);
    text-align: center;
    font-size: 14px;
    color: #e5e9f2;
    z-index: 100;
    .logo {
      width: 60%;
      margin-top: 20px;
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
    background-color: rgba(7, 17, 27, 0.6);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
