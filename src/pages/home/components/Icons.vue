<template>
  <div class="icons">
    <swiper>
      <swiper-slide class="">
        <div class="icon" v-for="item in iconList" :key="item.id">
          <div class="img-wrapper"><img class="img-content" :src="item.imgUrl"></div>
          <p class="icon-des">{{item.des}}</p>
        </div>
      </swiper-slide>
      <swiper-slide class="">
        <div class="icon">
          <div class="img-wrapper"><img class="img-content" src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"></div>
          <p class="icon-des">景点门票</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
   </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      iconList: [
        {
          id: '001',
          imgUrl: `http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png`,
          des: '景点门票'
        },
        {
          id: '002',
          imgUrl: `http://img1.qunarzz.com/piao/fusion/1811/f6/e54fad3ea337b02.gif`,
          des: '年终大促'
        },
        {
          id: '003',
          imgUrl: `http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png`,
          des: '名胜古迹'
        },
        {
          id: '004',
          imgUrl: `http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png`,
          des: '必游榜单'
        },
        {
          id: '005',
          imgUrl: `http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png`,
          des: '景点门票'
        },
        {
          id: '006',
          imgUrl: `http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png`,
          des: '景点门票'
        },
        {
          id: '007',
          imgUrl: `http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png`,
          des: '景点门票'
        },
        {
          id: '008',
          imgUrl: `http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png`,
          des: '景点门票'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.icons >>> .swiper-container
  height: 0
  padding-bottom: 50%
  overflow: hidden
.icon
  height: 0
  position: relative
  overflow: hidden
  float: left
  width: 25%
  padding-bottom: 25%
  .img-wrapper
    box-sizing: border-box
    padding: .1rem
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: .44rem
    .img-content
      display: block
      height: 100%
      margin: 0 auto
  .icon-des
    position: absolute
    left: 0
    bottom: 0
    right: 0
    line-height: .44rem
    height: .44rem
    color: #333
    text-align: center
</style>
