<template>
  <div class="publish-wrap">
    <back-bar :title="'新建文章'"
              class="back-bar"></back-bar>
    <div class="publish">
      <div class="new-title">
        <h2>文章标题</h2>
        <input class="title"
               type="text"
               name="title"
               placeholder="请输入标题，不少于5个字符"
               ref="title"><br/>
      </div>
      <div class="new-tab">
        <h2>文章类型</h2>
        <select name="tab"
                ref="tab"
                class="tab">
          <option value="share">分享</option>
          <option value="ask">问答</option>
          <option value="job">招聘</option>
          <option value="dev">测试</option>
        </select>
      </div>
      <div class="content">
        <mavon-editor v-model="editorContent"
                      ref="content"
                      style="height: 100%"
                      :toolbars="toolbars"
                      :default_open="'edit'"></mavon-editor>
      </div>
      <button @click="publishArticle"
              class="publish">发布
        <span v-if="!update">文章</span>
        <span v-if="update">更新</span>
      </button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import BackBar from '@/components/BackBar';
import { mapGetters } from 'vuex';
import { mavonEditor } from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';

export default {
  components: {
    BackBar,
    mavonEditor,
  },
  data() {
    return {
      toolbars: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: false, // 下划线
        strikethrough: false, // 中划线
        mark: false, // 标记
        superscript: false, // 上角标
        subscript: false, // 下角标
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        code: true, // code
        table: true, // 表格
        subfield: true, // 是否需要分栏
        fullscreen: true, // 全屏编辑
        readmodel: true, // 沉浸式阅读
        htmlcode: false, // 展示html源码
        help: true, // 帮助
        /* 1.3.5 */
        undo: true, // 上一步
        redo: true, // 下一步
        trash: true, // 清空
        save: false, // 保存（触发events中的save事件）
        /* 1.4.2 */
        navigation: false, // 导航目录
        /* 2.1.8 */
        alignleft: false, // 左对齐
        aligncenter: false, // 居中
        alignright: false, // 右对齐
      },
      editorContent: '',
    };
  },
  computed: {
    ...mapGetters(['userData']),
    update() {
      return this.$route.query.update;
    },
    topicId() {
      return this.$route.query.topic_id;
    },
  },
  activated() {
    if (this.update) {
      this.axios
        .get(`https://cnodejs.org/api/v1/topic/${this.topicId}?mdrender=false`)
        .then(
          (res) => {
            const { data } = res.data;
            this.$refs.title.value = data.title;
            this.$refs.tab.value = data.tab;
            this.editorContent = data.content;
          },
          () => {
            this.$store.dispatch('add_fail', { content: '载入失败' });
          }
        );
    }
  },
  deactivated() {
    // 离开编辑页面后，初始化表单状态
    this.editorContent = '';
    this.$refs.title.value = '';
    this.$refs.tab.value = 'share';
  },
  methods: {
    publishArticle() {
      // 分为两种情况，发布更新文章和发布新文章
      if (this.update) {
        this.axios
          .post('https://cnodejs.org/api/v1/topics/update', {
            accesstoken: this.userData.accesstoken,
            topic_id: this.topicId,
            title: this.$refs.title.value,
            tab: this.$refs.tab.value,
            content: this.editorContent,
          })
          .then(
            (res) => {
              this.$store.dispatch('add_success', { content: '发布成功' });
              this.$router.push('/');
              this.$router.push(`/article/${res.data.topic_id}`);
            },
            () => {
              this.$store.dispatch('add_fail', { content: '发布失败' });
            }
          );
      } else {
        this.axios
          .post('https://cnodejs.org/api/v1/topics', {
            accesstoken: this.userData.accesstoken,
            title: this.$refs.title.value,
            tab: this.$refs.tab.value,
            content: this.editorContent,
          })
          .then(
            (res) => {
              this.$store.dispatch('add_success', { content: '发布成功' });
              this.$router.push('/');
              this.$router.push(`/article/${res.data.topic_id}`);
            },
            () => {
              this.$store.dispatch('add_fail', { content: '发布失败' });
            }
          );
      }
    },
  },
};
</script>

<style lang="scss" rel="stylesheet/scss">
.publish-wrap {
  width: 100%;
  height: 100%;
  .back-bar {
    z-index: 1000;
  }
  .publish {
    padding-top: 50px;
    .new-title,
    .new-tab {
      position: relative;
      display: flex;
      background: #eff2f7;
      margin-bottom: 10px;
    }
    h2 {
      font-size: 16px;
      line-height: 48px;
      flex: 0 0 120px;
      color: #324057;
      text-indent: 20px;
      background: #eff2f7;
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
      margin: 10px 0;
      z-index: 5000;
    }
    .publish {
      padding: 0;
      width: 100%;
      height: 38px;
      font-size: 16px;
      color: #324057;
      background: #eff2f7;
    }
  }
}
</style>
