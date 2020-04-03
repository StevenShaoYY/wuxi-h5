<template>
  <div>
    <headerTop :title="title" :head-style="headStyle" :back-icon="backIcon" @goback="goback"/>
    <div class="content">
      <div class="boxform">
        <div class="title1">请输入您宝贵的意见</div>
        <div class="title2">因为有您，我们会努力做的更好</div>
        <textarea class="input" type="text" v-model="content" />
      </div>
      <div class="next" @click="confirms">
        确认
      </div>
    </div>

    <van-popup v-model="showconfirmFlag">
      <div class="boxshow">
        <div class="imgs">
          <img src="@/assets/imgs/car/chenggong.png" alt="">
        </div>
        <div class="title">提交成功</div>
        <div class="box">
          <div class="sure" @click="sures">确认</div>
        </div>
      </div>
    </van-popup>

  </div>
</template>

<script>
  import headerTop from '@/components/header/index.vue';
  import { feedbackadd } from '@/api/car/car.js'

  export default {
    name: 'feedback',
    data () {
      return {
        title: '意见反馈', // 名称
        headStyle: {}, // 头部样式
        backIcon: false,
        value: '',
        columns: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
        showPicker: false,
        content:'',
        showconfirmFlag:false,
      }
    },
    components: {
      headerTop
    },
    watch:{
      showconfirmFlag(val) {
        if(!val) {
          this.content = ''
        }
      }
    },
    computed: {},
    created () {

    },
    methods: {
      goback () {
        this.$router.push('/mine')
      },
      //提交
      confirms() {
        if(this.content) {
          this.feedbackadd()
        }else {
          return this.$notify('请输入意见反馈');
        }
      },
      cancels() {
        this.showconfirmFlag = false
      },
      sures() {
        this.$router.go(-1)
      },
      feedbackadd () {
        feedbackadd({content:this.content}).then(res => {
          if (res.data.code == 200) {
            this.showconfirmFlag = true
          }else {

          }
        })
      },
    }
  }
</script>
<style lang="scss" scoped>
  .content {
    width: 100%;
    height: 100vh;
    background:rgba(245,245,245,1);
    box-sizing: border-box;
    padding: 20px 12px 12px 12px;
    .boxform {
      width: 100%;
      border-radius:5px;
      .title1 {
        width: 100%;
        height: 20px;
        font-size:13px;
        font-weight:500;
        color:rgba(51,51,51,1);
        display: flex;
        justify-content: center;
        padding-top: 20px;
      }
      .title2 {
        width: 100%;
        height: 20px;
        font-size:10px;
        font-weight:500;
        color:rgba(102,102,102,1);
        display: flex;
        justify-content: center;

      }
      .input {
        margin-top: 13px;
        border:1px solid rgba(204,204,204,1);
        outline: none;
        resize: none;
        width:99%;
        height:155px;
        background:rgba(255,255,255,1);
        border:1px solid rgba(204,204,204,1);
        border-radius:5px;
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

  .boxshow {
    width: 75vw;
    height: 155px;
    text-align: center;
    .imgs {
      width: 100%;
      height: 40px;
      margin-top: 21px;
      img {
        width: 40px;
        height: 40px;
      }
    }
    .title {
      font-size:16px;
      margin-top: 9px;
      font-weight:500;
      color:rgba(51,51,51,1);
      text-align: center;
    }
    .box {
      width: 100%;
      margin-top: 30px;
      display: flex;
      justify-content: space-around;
      .sure {
        width: 60%;
        height:40px;
        background:rgba(0,102,255,1);
        border-radius:5px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size:16px;
        font-weight:500;
        color:rgba(255,255,255,1);
        line-height:23px;
      }
    }

  }
</style>
