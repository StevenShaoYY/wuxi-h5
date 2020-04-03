<template>
  <div>
    <headerTop :title="title" :head-style="headStyle" :back-icon="backIcon" @goback="goback"/>
    <div class="content">
      <div class="boxform">
        <div class="title1 title">更新日期：{{result.updateTime}}</div>
        <div class="title1">生效日期：{{result.effectiveTime}}</div>
        <div class="input" v-html="result.content"></div>
        <!--<textarea class="input" type="text" v-model="result.content" />-->
      </div>
      <div class="next" @click="goback">
        确认
      </div>
    </div>
  </div>
</template>

<script>
  import headerTop from '@/components/header/index.vue';
  import { userGetPolicy } from '@/api/user/user.js'

  export default {
    name: 'feedback',
    data () {
      return {
        title: '隐私政策', // 名称
        headStyle: {}, // 头部样式
        backIcon: false,
        value: '',
        result:{
          content: "",
          effectiveTime: "",
          updateTime: ""
        }
      }
    },
    components: {
      headerTop
    },
    computed: {},
    created () {
      //1隐私 2注册协议
      if(this.$route.query.type == 1) {
        this.title = "隐私政策"
      }else {
        this.title = "用户注册协议"
      }
        this.userGetPolicy()
    },
    methods: {
      goback () {
        this.$router.go(-1)
      },
      userGetPolicy() {
        userGetPolicy({type: this.$route.query.type}).then(res => {
          if (res.data.code == 200) {
            let data = res.data.result
            this.result = data
          }
        })
      }
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
        /*height:336px;*/
        background:rgba(255,255,255,1);
        border:1px solid rgba(204,204,204,1);
        border-radius:5px;
        color: #999999;
        padding: 18px 9px 18px 9px;
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
      margin-bottom: 20px;
    }
  }
</style>
