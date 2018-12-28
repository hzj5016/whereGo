<template>
  <div>
    <div class="recommend-title">猜你喜欢</div>
    <ul>
      <li class="item border-bottom" v-for="item in recommendList" :key="item.id">
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
  data () {
    return {
      recommendList: [
        {
          id: '001',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/201403/07/30b534b0de51ccac2906bcb6ba159988.jpg_200x200_2f08733b.jpg',
          title: '长隆野生动物世界',
          desc: '广东省广州市番禺区迎宾路长隆旅游度假村旁'
        },
        {
          id: '002',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/201403/07/30b534b0de51ccac2906bcb6ba159988.jpg_200x200_2f08733b.jpg',
          title: '长隆野生动物世界',
          desc: '广东省广州市番禺区迎宾路长隆旅游度假村旁'
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
