<template>
  <div class="content-wrap">
    <nav-bar></nav-bar>
    <div class="content-tab-wrap">
      <div class="content-tab">
        <a @click.prevent="changeTab('all')" href="/" :class="{'selected': selectedTab === 'all'}">全部</a>
        <a @click.prevent="changeTab('good')" href="/" :class="{'selected': selectedTab === 'good'}">精华</a>
        <a @click.prevent="changeTab('share')" href="/" :class="{'selected': selectedTab === 'share'}">分享</a>
        <a @click.prevent="changeTab('ask')" href="/" :class="{'selected': selectedTab === 'ask'}">问答</a>
        <a @click.prevent="changeTab('job')" href="/" :class="{'selected': selectedTab === 'job'}">招聘</a>
        <a @click.prevent="changeTab('dev')" href="/" :class="{'selected': selectedTab === 'dev'}">客户端测试</a>
      </div>
    </div>
    <div class="content">
      <ul class="content-list">
        <li v-for="(item, idx) in articleLists" class="article">
          <article-card :article="item"></article-card>
        </li>
      </ul>
      <div class="loading" v-if="isLoading"><img class="loading-pic" src="../Loading/loading.svg" alt="loading">拼命加载中</div>
      <div class="back-to-top" v-show="isTopShow" @click="backToTop">
        <i class="iconfont icon-back-to-top"></i>
        <p class="text">回到顶部</p>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import ArticleCard from './ArticleCard'
  import { mapGetters } from 'vuex'
  import NavBar from '../navBar/navBar'

  export default {
    computed: {
      ...mapGetters([
        'selectedTab',
        'articleLists',
        'pageCount',
        'isLoading',
        'scrollTop',
        'isTopShow'
      ])
    },
    methods: {
      changeTab (tabType) {
        // 该函数负责发起服务器请求，并分发（dispatch）
        // 'changeTab'和'changeTabData'的actions。
        // 功能：转换tab主题，返回页面首部，并请求数据。
        this.axios.get(`https://cnodejs.org/api/v1/topics/?tab=${tabType}&page=1`)
          .then(res => {
            this.$store.dispatch('changeTab', tabType)
            this.$store.dispatch('changeTabData', res.data.data)
          })
        // 使页面回到顶部
        this.$refs.content.scrollTop = 0
      },
      loadMoreData (tabType, pageCount) {
        // 功能：实现滑到页面最底端时，动态加载后面的数据。
        // 通过向服务器发起请求，分发（dispatch）loadMoreData的actions
        this.axios.get(`https://cnodejs.org/api/v1/topics/?tab=${tabType}&page=${pageCount + 1}`)
          .then(res => {
            this.$store.dispatch('loadMoreData', res.data.data)
          })
      },
      backToTop () {
        // 将返回顶部设置成250ms内完成的动画。
        let scrollPiece = window.scrollY / 50
        let topInterval = window.setInterval(() => {
          if (window.scrollY <= 0) {
            window.clearInterval(topInterval)
          } else {
            window.scrollTo(0, window.scrollY - scrollPiece)
          }
        }, 5)
      }
    },
    created () {
      // 当virtual dom创建完成后，
      // 就开始向服务器请求数据，并初始化。
      this.axios.get('https://cnodejs.org/api/v1/topics/?tab=all&page=1')
        .then(res => {
          this.$store.dispatch('changeTab', 'all')
          this.$store.dispatch('changeTabData', res.data.data)
        })
    },
    mounted () {
      // 当内容挂在到页面上以后，
      // 通过scroll事件，监听页面的变化，
      // 当document.documentElement.offsetHeight - window.scrollY
      // <= window.screen.height时，
      // （即页面总高度 - 页面顶部滑动的高度 <= 窗口高度）开始异步加载数据
      window.addEventListener('scroll', () => {
        if (!this.isLoading && document.documentElement.offsetHeight - window.scrollY <= window.screen.height) {
          // 对于手机端，仅仅通过高度差判断，且条件成立时，屏幕有可能还在滑动，就会触发更多次请求
          // 为了解决这个问题，在vuex加入了一个isLoading的变量，表示现在正在请求加载数据
          // 从而使得加载不会过量
          this.$store.dispatch('changeLoadingStatus')
          this.loadMoreData(this.selectedTab, this.pageCount)
        }
        if (window.scrollY > 200) {
          if (this.isTopShow === false) {
            this.$store.dispatch('backToTop', true)
          }
        } else {
          if (this.isTopShow === true) {
            this.$store.dispatch('backToTop', false)
          }
        }
      })
    },
    components: {
      NavBar,
      ArticleCard
    }
  }
</script>

<style lang="scss">
  .content-wrap {
    background-color: #EFF2F7;
    width: 100%;
    padding-top: 86px;
    .content-tab-wrap {
      width: 100%;
      height: 36px;
      line-height: 36px;
      position: fixed;
      left: 0;
      top: 50px;
      z-index: 99;
      background: rgba(7, 17, 27, .8);
      -webkit-backdrop-filter: blur(8px);
      color: #ffffff;
      border-top: 1px solid rgba(255, 255, 255, .8);
      .content-tab {
        padding-left: 10px;
        a {
          color: #ffffff;
          text-decoration: none;
          margin-right: 2px;
          font-size: 14px;
          padding: 2px 5px;
          text-align: center;
          &.selected {
            background-color: #ffffff;
            color: #1F2D3D;
            border-radius: 5px;
          }
        }
      }
      /*屏幕宽度小于450px的设备*/
      @media screen and (max-width: 1200px) {
        .content-tab {
          width: 100%;
          margin: 0 auto;
        }
      }
      /*屏幕宽度大于1200px的设备*/
      @media screen and (min-width: 1200px) {
        .content-tab {
          width: 1200px;
          margin: 0 auto;
          padding-left: 0;
        }
      }
    }
    .content {
      width: 100%;
      .loading {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 40px;
        line-height: 40px;
        font-size: 14px;
        background-color: #20a0ff;
        color: #ffffff;
        text-align: center;
        .loading-pic {
          display: inline-block;
          width: 28px;
          height: 28px;
          vertical-align: middle;
          animation: loading .5s linear infinite;
        }
      }
      .back-to-top {
        position: fixed;
        right: 10px;
        bottom: 20px;
        color: #ffffff;
        text-align: center;
        font-size: 12px;
        background-color: rgba(7, 17, 27, .5);
        padding: 5px;
        border-radius: 10px;
        .iconfont {
          font-size: 36px;
        }
      }
    }
  }
</style>
