<template>
  <div class="list">
    <div class="item">A</div>
    <div class="item">B</div>
    <div class="item">C</div>
    <div class="item">D</div>
    <div class="item">E</div>
    <div class="item">F</div>
  </div>
</template>

<script>
export default {
  name: 'CityAlphabet'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.list
  display: flex
  flex-direction: column
  justify-content: center
  position: absolute
  top: 1.57rem
  right: 0
  bottom: 0
  width: .4rem
  .item
    text-align: center
    line-height: .4rem
    color: $bgColor
</style>
