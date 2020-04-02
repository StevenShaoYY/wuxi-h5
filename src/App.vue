<template>
  <div id="app">
    <transition :name="transitionName">
      <keep-alive v-if="$route.meta.keepAlive">
        <router-view class="router"></router-view>
      </keep-alive>
      <router-view class="router" v-else></router-view>
    </transition>
  </div>
</template>
<script>
import defaultSetting from './settings'
import fixedInput from '@/utils/mixinFixedInput'
export default {
  name: 'app',
  mixins: [fixedInput],
  updated() {
    // 解决ios输入框弹出的页面样式问题
    document.querySelectorAll("input").forEach(item => {
      item.onblur = this.temporaryRepair
    });
    document.querySelectorAll("select").forEach(item => {
      item.onchange = this.temporaryRepair
    });
    document.querySelectorAll("textarea").forEach(item => {
      item.onblur = this.temporaryRepair
    });
  },
  computed: {
    transitionName () {
      if (defaultSetting.needPageTrans) {
        return this.$store.state.direction
      }
      return ''
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  position: relative;
}

.router {
  width: 100%;
  height: 100%;
  position: absolute;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  // background-color: #fff;
}
</style>
