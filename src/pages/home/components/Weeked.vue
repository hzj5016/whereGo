<template>
  <div>
    <div class="recommend-title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item in recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Weeked',
  data () {
    return {
      recommendList: [
        {
          id: '001',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1602/9c/39c5ce9ff58609.jpg_r_640x214_efb90102.jpg',
          title: '粤西温泉',
          desc: '自驾粤西，这里有最全最心仪的温泉池，环境优美，舒舒服服的泡个热汤，远离繁忙的工作'
        },
        {
          id: '002',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1602/9c/39c5ce9ff58609.jpg_r_640x214_efb90102.jpg',
          title: '粤西温泉',
          desc: '自驾粤西，这里有最全最心仪的温泉池，环境优美，舒舒服服的泡个热汤，远离繁忙的工作'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixin.styl'
.recommend-title
  margin-top: .1rem
  line-height: .8rem
  background: #eee
  text-indent: .2rem
.item-img-wrapper
  height: 0
  overflow: hidden
  padding-bottom: 34%
  background: red
  .item-img
    width: 100%
.item-info
  padding: .1rem
  .item-title
    line-height: .54rem
    font-size: .32rem
    ellipsis()
  .item-desc
    line-height: .4rem
    margin-top: .05rem
    color: blue
    ellipsis()
</style>
