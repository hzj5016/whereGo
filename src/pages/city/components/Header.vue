<template>
  <div class="header">
    <router-link to="/">
      <div class="iconfont back-icon">&#xe606;</div>
    </router-link>
    城市选择
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header
  position: relative
  hegith: $headerHight
  line-height: $headerHight
  overflow: hidden
  color: #fff
  background: $bgColor
  text-align : center
  font-size : .32rem
  .back-icon
    color: #fff
    width: .64rem
    text-align: center
    font-size: .4rem
    position: absolute
    top: 0
    left: 0
</style>
