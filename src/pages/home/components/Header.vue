<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe606;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe613;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
      {{this.city}}
      <span class="iconfont arrow-icon">&#xe64a;</span>
    </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header {
  color: #fff;
  background: $bgColor;
  display: flex;
  line-height: $headerHight

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
    color: #fff
    .arrow-icon {
      font-size: 0.25rem;
      margin-left: -0.03rem;
    }
  }
}
</style>
