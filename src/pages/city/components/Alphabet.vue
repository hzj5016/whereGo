<template>
  <div class="list">
    <div class="item"
    v-for="item in letters"
    :key="item"
    @click="handleLetterClick"
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
    :ref="item"
    >
    {{item}}</div>
  </div>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      touchState: false,
      startY: null,
      timer: null
    }
  },
  updated () {
    // startY是A元素距离可视区域(已经绝对定位)最顶层的元素的高度,offsetTop是Vue提供的api
    // startY的高度为75px
    this.startY = this.$refs['A'][0].offsetTop
  },
  computed: {
    letters () {
      const letters = []
      for (let key in this.cities) {
        letters.push(key)
      }
      return letters
    }
  },
  methods: {
    handleLetterClick (e) {
      const letter = e.target.innerText
      this.$emit('change', letter)
    },
    handleTouchStart () {
      this.touchState = true
    },
    // 字母列表联动
    handleTouchMove (e) {
      if (this.touchState) {
        // 函数节流
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          // 这个clientY是距离最顶部的高度,相对窗口而言,和offsetTop有时候不同
          const touchY = e.touches[0].clientY - 78.5
          const distance = touchY - this.startY
          const index = Math.floor(distance / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchState = false
    }
  }
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
