<template>
  <!-- 绑定了一个变量swiperOption -->
  <div class="wrapper">
    <swiper :options="swiperOption">
    <swiper-slide v-for="item in list" :key="item.id">
      <img class="swiper-img" :src="item.imgUrl">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
   </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        // 翻页时间间隔
        autoplay: 3000,
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
  background: #fff
.wrapper
  background: #eee
  width: 100%
  height: 0
  padding-bottom: 30.6%
  overflow: hidden
  .swiper-img
    width: 100%
</style>
