<template>
  <div class="publish-wrap">
    <back-bar :title="'新建文章'"></back-bar>
    <div class="publish">
      <h2>文章标题</h2>
      <input class="title" type="text" name="title" placeholder="请输入标题" ref="title"><br/>
      <h2>文章类型</h2>
      <select name="tab" ref="tab" class="tab">
        <option value="share">分享</option>
        <option value="ask">问答</option>
        <option value="job">招聘</option>
        <option value="dev">测试</option>
      </select>
      <h2>文章内容</h2>
      <textarea name="content" ref="content" placeholder="在此输入内容" class="content"></textarea><br/>
      <button @click="publishArticle" class="publish">发布文章</button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BackBar from '../BackBar/BackBar'
  import { mapGetters } from 'vuex'

  export default {
    components: {
      BackBar
    },
    computed: {
      ...mapGetters([
        'userData'
      ])
    },
    methods: {
      publishArticle () {
        console.log('发布')
        this.axios.post('https://cnodejs.org/api/v1/topics', {
          accesstoken: this.userData.accesstoken,
          title: this.$refs.title.value,
          tab: this.$refs.tab.value,
          content: this.$refs.content.value
        }).then(res => {
          if (res.data.success === true) {
            this.$router.push(`/article/${res.data.topic_id}`)
          } else {
            console.log('发布失败！原因：' + res.data.error_msg)
          }
        })
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  .publish-wrap {
    width: 100%;
    height: 100%;
    .publish {
      padding-top: 50px;
      text-align: center;
      h2 {
        margin: 10px 0;
        width: 100%;
        font-size: 20px;
        line-height: 48px;
        color: #ffffff;
        background: #13CE66;
        text-indent: 20px;
      }
      .title {
        width: 100%;
        height: 32px;
        line-height: 32px;
        font-size: 16px;
        margin: 0 auto;
        padding-left: 20px;
        border-bottom: 1px solid #dcdcdc;
        border-top: 1px solid #dcdcdc;
        text-align: center;
      }
      .tab {
        margin-left: 20px;
        width: 70px;
        height: 32px;
        font-size: 14px;
      }
      .content {
        width: 100%;
        height: 300px;
        font-size: 14px;
        border-bottom: 1px solid #dcdcdc;
        border-top: 1px solid #dcdcdc;
        padding: 10px 20px;
      }
      .publish {
        padding: 0;
        width: 80px;
        height: 32px;
        font-size: 16px;
        color: #000;
        margin: 0 auto;
      }
    }
  }
</style>
