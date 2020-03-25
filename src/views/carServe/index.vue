<template>
  <div class="container">
    <headerTop :title="title" :head-style="headStyle" :back-icon="backIcon" @goback="goback"/>
    <div class="middles">
      <div class="title1">系统开发中</div>
      <div class="title2">功能开发中，敬请期待！</div>
    </div>
    <footer-tabbar />
  </div>
</template>

<script>
  import headerTop from '@/components/header/index.vue';
import FooterTabbar from "components/FooterTabbar";
export default {
  name: "carServe",
  data() {
    return {
      title: '车辆服务', // 名称
      headStyle: {}, // 头部样式
      backIcon: false,
    };
  },
  components: {
    FooterTabbar,
    headerTop
  },
  computed: {},
  methods: {
    goback() {
      this.$router.push({
        path: "/home"
      });
    }
  }
};
</script>
<style lang="scss" scoped>
  .middles {
    width: 100%;
    border-top: 1px solid #f1f1f1;
    height: calc(100vh - 45px) ;
    background-image: url("./../../assets/imgs/car/carback.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;

    .title1 {
      width: 100%;
      font-size:16px;
      font-weight:bold;
      color:rgba(51,51,51,1);
      text-align: center;
      margin-top: 300px;
      margin-bottom: 11px;
    }
    .title2 {
      width: 100%;
      font-size:14px;
      font-weight:500;
      color:rgba(102,102,102,1);
      text-align: center;
    }
  }
</style>
