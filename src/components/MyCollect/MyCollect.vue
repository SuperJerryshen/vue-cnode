<template>
  <div class="collect-wrap">
    <back-bar :title="'我的收藏'"></back-bar>
    <ul class="collect">
      <li v-for="item in myCollections">
        <article-card :article="item"></article-card>
      </li>
    </ul>
    <loading v-if="isLoading"></loading>
  </div>
</template>

<script type="text/ecmascript-6">
  import BackBar from '../BackBar/BackBar'
  import ArticleCard from '../ArticleCard/ArticleCard'
  import Loading from '../Loading/Loading'
  import { mapGetters } from 'vuex'

  export default {
    components: {
      BackBar,
      ArticleCard,
      Loading
    },
    data () {
      return {
        isLoading: true
      }
    },
    computed: {
      ...mapGetters([
        'myCollections'
      ])
    },
    beforeRouteEnter (to, from, next) {
      next(vm => {
        vm.axios.get(`https://cnodejs.org/api/v1/topic_collect/${vm.$route.params.loginname}`)
          .then(res => {
            vm.isLoading = false
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
