<template>
  <div>
    <headerTop :title="title" :head-style="headStyle" :back-icon="backIcon" @goback="goback"/>
    <div class="content">
      <div class="input_tetx">
        <input type="text" placeholder="请填写地址" />
      </div>
      <div class="next" @click="members">
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
        title: '编辑地址', // 名称
        headStyle: {}, // 头部样式
        backIcon: false,
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
      members() {
        this.$router.go(-1)
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
    .input_tetx {
      width: 100%;
      height: 43px;
      margin-bottom: 28px;
    }
    input {
      width: 100%;
      height: 43px;
      outline: none;
      border: none;
      float: right;
      border-radius:2px;
      font-size:15px;
      font-weight:500;
      color:rgba(102,102,102,1);
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

    }
  }
</style>
