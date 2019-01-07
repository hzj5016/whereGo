<template>
  <div>
    <div class="recommend-title">猜你喜欢</div>
    <ul>
      <li class="item border-bottom" v-for="item in list" :key="item.id">
        <img class="item-img" :src="item.imgUrl">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixin.styl'
.recommend-title
  line-height: .8rem
  background: #eee
  text-indent: .2rem
.item
  overflow: hidden
  display: flex
  height: 2rem
  .item-img
    width: 1.8rem
    height: 1.8rem
    padding: .1rem
  .item-info
    flex: 1
    padding: .1rem
    min-width: 0
    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .item-desc
      line-height: .4rem
      margin-top: .05rem
      color: blue
      ellipsis()
    .item-button
      line-height: .44rem
      margin-top: .2rem
      background: #ff9300
      padding: 0 .2rem
      border-radius: .07rem
      color: #fff
</style>
