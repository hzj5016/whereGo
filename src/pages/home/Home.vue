<template>
  <div>
    <home-header :city='city'></home-header>
    <!-- 当请求数据返回时,在渲染轮播图片 -->
    <home-swiper :list="swiperList" v-if="swiperList.length"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weeked :list="weekendList"></home-weeked>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeeked from './components/Weeked'
import axios from 'axios'
export default {
  name: 'Home',
  data () {
    return {
      city: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeeked
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json')
        .then((res) => {
          res = res.data
          const data = res.data
          this.city = data.city
          this.swiperList = data.swiperList
          this.iconList = data.iconList
          this.recommendList = data.recommendList
          this.weekendList = data.weekendList
        })
        .catch((e) => {
          console.log(e)
        })
    }
  },
  // 页面挂载完成
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>
