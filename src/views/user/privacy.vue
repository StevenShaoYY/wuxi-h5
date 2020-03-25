<template>
  <div>
    <headerTop :title="title" :head-style="headStyle" :back-icon="backIcon" @goback="goback"/>
    <div class="content">
      <div class="boxform">
        <div class="title1 title">更新日期：2020年1月13日</div>
        <div class="title1">生效日期：2020年1月13日</div>
        <textarea class="input" type="text" v-model="value" />
      </div>
      <div class="next">
        确认
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
        title: '隐私政策', // 名称
        headStyle: {}, // 头部样式
        backIcon: false,
        value: '隐私政策内容隐私政策内容隐私政策内容隐私政策内容隐私政策内容隐私政策内容隐私政策内容隐私政策内容隐私政策内容隐私政策内容隐私政策内容隐私政策内容隐私政策内容隐私政策内容隐私政策内容隐私政策内容隐私政策内容隐私政策内容隐私政策内容隐私政策内容隐私政策内容隐私政策内容隐私政策内容隐私政策内容隐私政策内容隐私政策内容隐私政策内容隐私政策内容隐私政策内容',
      }
    },
    components: {
      headerTop
    },
    computed: {},
    created () {

    },
    methods: {
      goback () {
        this.$router.push('/mine')
      },
    }
  }
</script>
<style lang="scss" scoped>
  .content {
    width: 100%;
    height: calc(100vh - 44px);
    background:rgba(245,245,245,1);
    box-sizing: border-box;
    padding: 20px 12px 12px 12px;
    .boxform {
      width: 100%;
      border-radius:5px;
      .title {
        padding-top: 20px;
      }
      .title1 {
        width: 100%;
        height: 20px;
        font-size:11px;
        font-weight:500;
        color:rgba(51,51,51,1);
      }
      .input {
        margin-top: 13px;
        border:1px solid rgba(204,204,204,1);
        outline: none;
        resize: none;
        width:95%;
        height:336px;
        background:rgba(255,255,255,1);
        border:1px solid rgba(204,204,204,1);
        border-radius:5px;
        color: #999999;
        padding: 18px 9px 0 9px;
      }
    }
    .next {
      width: 100%;
      height:40px;
      background:rgba(0,102,255,1);
      border-radius:5px;
      font-size:16px;
      font-weight:500;
      color:rgba(255,255,255,1);
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 28px;
    }
  }
</style>
