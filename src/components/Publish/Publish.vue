<template>
  <div class="publish-wrap">
    <back-bar :title="'新建文章'"></back-bar>
    <div class="publish">
      <div class="new-title">
        <h2>文章标题</h2>
        <input class="title" type="text" name="title" placeholder="请输入标题，不少于5个字符" ref="title"><br/>
      </div>
      <div class="new-tab">
        <h2>文章类型</h2>
        <select name="tab" ref="tab" class="tab">
          <option value="share">分享</option>
          <option value="ask">问答</option>
          <option value="job">招聘</option>
          <option value="dev">测试</option>
        </select>
      </div>
      <div class="new-content">
        <h2>文章内容</h2>
        <textarea name="content" ref="content" placeholder="请在此输入内容" class="content"></textarea><br/>
      </div>
      <button @click="publishArticle" class="publish">发布<span v-if="!update">文章</span><span v-if="update">更新</span>
      </button>
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
      ]),
      update () {
        return this.$route.query.update
      },
      topicId () {
        return this.$route.query.topic_id
      }
    },
    beforeRouteEnter (to, from, next) {
      next(vm => {
        if (vm.update) {
          vm.axios.get(`https://cnodejs.org/api/v1/topic/${vm.topicId}?mdrender=false`)
            .then(res => {
              const data = res.data.data
              vm.$refs.title.value = data.title
              vm.$refs.tab.value = data.tab
              vm.$refs.content.value = data.content
            }, () => {
              this.$store.dispatch('add_fail', {content: '载入失败'})
            })
        }
      })
    },
    methods: {
      publishArticle () {
        if (this.update) {
          this.axios.post('https://cnodejs.org/api/v1/topics/update', {
            accesstoken: this.userData.accesstoken,
            topic_id: this.topicId,
            title: this.$refs.title.value,
            tab: this.$refs.tab.value,
            content: this.$refs.content.value
          }).then(res => {
            this.$store.dispatch('add_success', {content: '发布成功'})
            this.$router.push('/')
            this.$router.push(`/article/${res.data.topic_id}`)
          }, () => {
            this.$store.dispatch('add_fail', {content: '发布失败'})
          })
        } else {
          this.axios.post('https://cnodejs.org/api/v1/topics', {
            accesstoken: this.userData.accesstoken,
            title: this.$refs.title.value,
            tab: this.$refs.tab.value,
            content: this.$refs.content.value
          }).then(res => {
            this.$store.dispatch('add_success', {content: '发布成功'})
            this.$router.push('/')
            this.$router.push(`/article/${res.data.topic_id}`)
          }, () => {
            this.$store.dispatch('add_fail', {content: '发布失败'})
          })
        }
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
      .new-title, .new-tab {
        position: relative;
        display: flex;
        background: #EFF2F7;
        margin-bottom: 10px;
      }
      h2 {
        font-size: 16px;
        line-height: 48px;
        flex: 0 0 120px;
        color: #324057;
        text-indent: 20px;
        background: #EFF2F7;
      }
      .title {
        flex: 1;
        height: 32px;
        line-height: 32px;
        font-size: 14px;
        padding-left: 20px;
        border: 1px solid #dcdcdc;
        margin-right: 20px;
        margin-top: 8px;
        border-radius: 5px;
      }
      .tab {
        flex: 1;
        height: 32px;
        font-size: 14px;
        margin-right: 20px;
        padding-left: 20px;
        margin-top: 8px;
        border-radius: 5px;
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
        width: 100%;
        height: 38px;
        font-size: 16px;
        color: #324057;
        background: #EFF2F7;
      }
    }
  }
</style>
