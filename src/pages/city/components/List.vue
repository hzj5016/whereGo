<template>
  <div class="list" ref="wrapper">
    <div class="content">
    <div class="area">
      <div class="title border-topbottom">您的位置</div>
      <div class="button-list">
        <div class="button-wrapper">
          <div class="button">北京</div>
        </div>
      </div>
    </div>
    <div class="area">
      <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
        <div class="button-wrapper">
          <div class="button">北京</div>
        </div>
        <div class="button-wrapper">
          <div class="button">北京</div>
        </div>
        <div class="button-wrapper">
          <div class="button">北京</div>
        </div>
        <div class="button-wrapper">
          <div class="button">北京</div>
        </div>
      </div>
    </div>
    <div class="area">
      <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">安徽</div>
          <div class="item border-bottom">安徽</div>
          <div class="item border-bottom">安徽</div>
          <div class="item border-bottom">安徽</div>
          <div class="item border-bottom">安徽</div>
          <div class="item border-bottom">安徽</div>
          <div class="item border-bottom">安徽</div>
        </div>
    </div>
    <div class="area">
    <div class="title border-topbottom">B</div>
      <div class="item-list">
        <div class="item border-bottom">安徽</div>
        <div class="item border-bottom">安徽</div>
        <div class="item border-bottom">安徽</div>
        <div class="item border-bottom">安徽</div>
        <div class="item border-bottom">安徽</div>
        <div class="item border-bottom">安徽</div>
        <div class="item border-bottom">安徽</div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CityList',
  mounted () {
    // ref可以获取当前vue实例的dom元素
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
.border-bottom
  &:before
    border-color: #ccc
.border-topbottom
  &:before
    border-color: #ccc
  &:after
    border-color: #ccc
.list
  // 阻止滑动
  position: absolute
  top: 1.57rem
  left: 0
  right: 0
  bottom: 0
  overflow: hidden
  .title
    line-height: .54rem
    background: #eee
    padding-left: .2rem
    color: #666
    font-size: .26rem
  .button-list
    // 触发BFC
    overflow: hidden
    padding: .1rem .6rem .1rem .2rem
    .button-wrapper
      width: 33.33%
      float: left
      .button
        padding: .1rem 0
        text-align: center
        margin: .1rem
        border: .02rem solid #ccc
        border-radius: .06rem
  .item-list
    .item
      line-height: .76rem
      padding-left: .2rem
</style>
