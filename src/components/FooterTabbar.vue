<template>
  <div class="footers">
  <van-tabbar route :safe-area-inset-bottom="true" active-color="#0066FF" v-model="active">
    <van-tabbar-item replace to="/carServe">
      <span>车辆服务</span>
      <template #icon="props">
        <img :src="props.active == 0 ? icon.active : icon.inactive"/>
      </template>
    </van-tabbar-item>
    <van-tabbar-item replace to="/mine">
      <span>个人中心</span>
      <template #icon="props">
        <img :src="props.active == 1 ? icon2.active : icon2.inactive"/>
      </template>
    </van-tabbar-item>
  </van-tabbar>
  </div>
</template>
<script>
  import { Tabbar, TabbarItem } from 'vant';
  export default {
    name: 'FooterTabbar',
    data() {
      return {
        active: 0,
        icon: {
          active: require("@/assets/imgs/mine/carServe.png"),
          inactive: require("@/assets/imgs/mine/carServe1.png")
        },
        icon2: {
          active: require("@/assets/imgs/mine/mine.png"),
          inactive: require("@/assets/imgs/mine/mine1.png")
        }
      }
    },
    components: {
      [Tabbar.name]: Tabbar,
      [TabbarItem.name]: TabbarItem
    }
  }
</script>
<style lang="scss" scoped>
  .footers {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 99999 !important;
    width: 100%;
    height: 50px;
  }
  .van-tabbar--fixed {
    position: absolute !important;
    bottom: 0;
    left: 0;
  }
</style>
