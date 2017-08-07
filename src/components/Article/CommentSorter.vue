<template>
  <ul class="comment-sorter">
    <li class="method" @click="changeSort('default')" :class="[sortingMethod === 'default' ? 'active' : '']">默认</li>
    <li class="method" @click="changeSort('time')" :class="[sortingMethod === 'time' ? 'active' : '']">时间</li>
    <li class="method" @click="changeSort('hot')" :class="[sortingMethod === 'hot' ? 'active' : '']">热度</li>
  </ul>
</template>

<script type="text/ecmascript-6">
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters([
        'sortingMethod'
      ])
    },
    methods: {
      changeSort (method) {
        if (method !== this.sortingMethod) {
          this.$store.dispatch('change_comment_sorting', method)
        }
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  .comment-sorter {
    list-style: none;
    background-color: #EFEBE9;
    border-radius: 6px;
    overflow: hidden;
    .method {
      float: left;
      line-height: 20px;
      font-size: 12px;
      padding: 0 8px;
      &.active {
        background-color: #20A0FF;
        color: #f4f4f4;
      }
    }
  }
</style>
