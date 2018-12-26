<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe606;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe613;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      城市
      <span class="iconfont arrow-icon">&#xe64a;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header {
  color: #fff;
  background: $bgColor;
  display: flex;
  line-height: 0.86rem;

  .header-left {
    text-align: center;

    .back-icon {
      font-size: 0.4rem;
    }

    width: 0.64rem;
    float: left;
  }

  .header-input {
    padding-left: 0.2rem;
    line-height: 0.62rem;
    height: 0.62rem;
    flex: 1;
    background: #fff;
    border-radius: 0.1rem;
    margin-top: 0.12rem;
    margin-left: 0.2rem;
    color: #ccc;
  }

  .header-right {
    width: 1.24rem;
    float: right;
    text-align: center;

    .arrow-icon {
      font-size: 0.25rem;
      margin-left: -0.03rem;
    }
  }
}
</style>
