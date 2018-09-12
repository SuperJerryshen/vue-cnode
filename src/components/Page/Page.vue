<template>
  <div :style="`padding-bottom: ${hasTabBar ? '60px' : '0'}`"
       ref="page">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'CNode中文社区',
    },
    hasTabBar: {
      type: Boolean,
      default: false,
    },
    watchScroll: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    title(val) {
      document.title = val;
    },
  },
  mounted() {
    document.title = this.title;
    if (this.watchScroll) {
      window.addEventListener('scroll', this.watchScrollHandler);
    }
  },
  destroyed() {
    if (this.watchScroll) {
      window.removeEventListener('scroll', this.watchScrollHandler);
    }
  },
  methods: {
    watchScrollHandler() {
      const bottomDistance =
        this.$refs.page.offsetHeight -
        window.scrollY -
        document.documentElement.clientHeight;

      if (bottomDistance <= 0 && !this.loading) {
        // ios <= 75
        this.$emit('reach-bottom', bottomDistance);
      }
    },
  },
};
</script>
