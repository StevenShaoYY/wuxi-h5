<template>
  <div>
    <headerTop :title="title" :head-style="headStyle" :back-icon="backIcon" @goback="goback"/>
    <div class="content">
      <div class="title">请选择会员认证类型</div>
      <div class="next" @click="personalMembers">
        <!--个人会员认证-->
        <img src="@/assets/imgs/mine/personalMembers.png" alt="">
      </div>
      <div class="next" @click="members">
        <!--单位会员认证-->
        <img src="@/assets/imgs/mine/unitMembers.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  import headerTop from '@/components/header/index.vue';
  export default {
    name: 'feedback',
    data () {
      return {
        title: '会员认证', // 名称
        headStyle: {}, // 头部样式
        backIcon: false,
      }
    },
    components: {
      headerTop
    },
    computed: {},
    created () {
      sessionStorage.removeItem("personalObj")
      sessionStorage.removeItem("unitObj")
    },
    methods: {
      goback () {
        this.$router.push('/mine')
      },
      personalMembers() {
        this.$router.push('/mine/personalMembers')
      },
      members() {
        this.$router.push('/mine/unitMembers')
      },
    }
  }
</script>
<style lang="scss" scoped>
  .content {
    width: 100%;
    height:100vh;
    background:rgba(245,245,245,1);
    box-sizing: border-box;
    .title {
      font-size:18px;
      font-weight:500;
      color:rgba(51,51,51,1);
      margin-bottom: 31px;
      padding-top: 31px;
      text-align: center;
    }
    .next {
      width: 80%;
      height:84px;
      margin: 18px auto;

      img {
        width: 100%;
      }
      /*font-size:16px;*/
      /*background:rgba(255,255,255,1);*/
      /*border:1px solid rgba(204,204,204,1);*/
      /*border-radius:20px;*/
      /*font-weight:500;*/
      /*color:rgba(51,51,51,1);*/
      /*display: flex;*/
      /*justify-content: center;*/
      /*align-items: center;*/
      /*margin-top: 28px;*/
    }
  }
</style>
