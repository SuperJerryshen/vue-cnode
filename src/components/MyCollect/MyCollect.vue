<template>
  <div class="collect-wrap">
    <back-bar :title="'我的收藏'"></back-bar>
    <ul class="collect">
      <li v-for="item in myCollections">
        <article-card :article="item"></article-card>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  import BackBar from '../BackBar/BackBar'
  import ArticleCard from '../ArticleCard/ArticleCard'
  import { mapGetters } from 'vuex'

  export default {
    components: {
      BackBar,
      ArticleCard
    },
    computed: {
      ...mapGetters([
        'myCollections'
      ])
    },
    beforeRouteEnter (to, from, next) {
      window.scrollTo(0, 0)
      next(vm => {
        vm.$store.dispatch('changeLoadingStatus', true)
        vm.axios.get(`https://cnodejs.org/api/v1/topic_collect/${vm.$route.params.loginname}`)
          .then(res => {
            vm.$store.dispatch('changeLoadingStatus', false)
            vm.$store.dispatch('init_my_collections', res.data.data)
          })
      })
    },
    beforeRouteLeave (to, from, next) {
      this.isLoading = true
      next()
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  .collect-wrap {
    width: 100%;
    min-height: 100%;
    padding-top: 48px;
  }
</style>
