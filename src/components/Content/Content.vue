<template>
  <div class="content-wrap">
    <div class="content-tab-wrap">
      <div class="content-tab">
        <a href="/?tab=all" class="selected">全部</a>
        <a href="/?tab=good">精华</a>
        <a href="/?tab=share">分享</a>
        <a href="/?tab=ask">问答</a>
        <a href="/?tab=job">招聘</a>
        <a href="/?tab=dev">客户端测试</a>
      </div>
    </div>
    <div class="content">
      <ul class="content-list">
        <li v-for="(item, idx) of repliedData" class="article">
          <article-card :articleOverview="item"></article-card>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import ArticleCard from './ArticleCard'

  export default {
    data () {
      return {
        repliedData: []
      }
    },
    created () {
      this.axios.get('https://cnodejs.org/api/v1/topics/?tab=all&page=1')
        .then(res => {
          this.repliedData = res.data.data
          window.console.log(this.repliedData)
        })
    },
    components: {
      ArticleCard
    }
  }
</script>

<style lang="scss">
  .content-wrap {
    background-color: #EFF2F7;
    .content-tab-wrap {
      width: 100%;
      height: 30px;
      line-height: 30px;
      background: #1F2D3D;
      color: #ffffff;
      border-top: 1px solid #475669;
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
      @media screen and (max-width: 1200px){
        .content-tab {
          width: 100%;
          margin: 0 auto;
        }
      }
      /*屏幕宽度大于1200px的设备*/
      @media screen and (min-width: 1200px){
        .content-tab {
          width: 1200px;
          margin: 0 auto;
          padding-left: 0;
        }
      }
    }
  }
</style>
