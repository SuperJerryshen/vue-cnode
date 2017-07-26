<template>
  <transition name="fadeIn">
    <div class="about-me-wrap">
      <div class="about-me">
        <h2 class="title">关于</h2>
        <div class="intro">
          <h3>前言</h3>
          <p>感谢<a href="https://cnodejs.org/" target="_blank">CNode中文社区</a>提供的API，本项目的来源就是因为看到了CNode官网的API，所以才萌生了做一个Vue-CNode项目的想法。</p>
        </div>
        <div class="tech-stack">
          <h3>技术栈</h3>
          <p>Vue2.0, Vue-Router, Vuex, Axios, ES6, Sass</p>
        </div>
        <div class="source-code">
          <h3>源码</h3>
          <a href="https://github.com/SuperJerryshen/Vue-CNode" target="_blank">https://github.com/SuperJerryshen/Vue-CNode</a>
        </div>
        <div class="author">
          <h3>作者</h3>
          <p>JerryShen</p>
        </div>
        <div class="email">
          <h3>邮箱</h3>
          <p>shenjingwei100@163.com</p>
        </div>
        <div class="version">
          <h3>版本</h3>
          <p>v0.4.0 beta</p>
        </div>
      </div>
      <div class="shade" @click="changeAboutMeShow"></div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  export default {
    methods: {
      changeAboutMeShow () {
        this.$store.dispatch('changeAboutMeShow')
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  .about-me-wrap {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1000;
    color: #F9FAFC;
    word-wrap: break-word;
    /*对容器内的所有a标签添加颜色样式*/
    a {
      color: #58B7FF;
    }
    .about-me {
      position: absolute;
      top: 20%;
      left: 10%;
      width: 80%;
      height: 60%;
      border-radius: 20px;
      background-color: rgba(7, 17, 27, .7);
      padding: 5%;
      text-align: center;
      font-size: 14px;
      overflow: scroll;
      -webkit-overflow-scrolling: touch;
      overflow-scrolling: touch;
      overflow-x: hidden;
      h2 {
        padding-bottom: 10px;
        margin-bottom: 10px;
        border-bottom: 1px solid #E5E9F2;
        font-size: 28px;
      }
      div {
        margin: 0 20px;
      }
      h3 {
        line-height: 40px;
        font-size: 20px;
      }
    }
    .shade {
      width: 100%;
      height: 100%;
      background-color: rgba(7, 17, 27, .7);
    }
  }
</style>
