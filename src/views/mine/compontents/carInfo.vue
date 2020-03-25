<template>
  <div>
    <headerTop :title="title" :head-style="headStyle" :back-icon="backIcon" @goback="goback"/>
    <div class="content">
      <div class="boxform">
        <div class="input_title">
          <div class="imgs"><img src="@/assets/imgs/car/car.png" alt=""></div><span class="name">绑定车辆</span>
        </div>
        <div class="input">
          <span class="red">*</span><span class="name">车型</span>
          <div class="picker_bottom"  @click="showPicker = true">请选择 <span><img src="@/assets/imgs/car/down.png" alt=""></span></div>
          <van-popup v-model="showPicker" position="bottom">
            <van-picker
              show-toolbar
              :columns="columns"
              @confirm="onConfirm"
              @cancel="showPicker = false"
            />
          </van-popup>
        </div>
        <div class="input">
          <span class="red">*</span><span class="name">车牌号码</span> <input type="text" placeholder="请填写车牌号码" />
        </div>
        <div class="input">
          <span class="red">*</span><span class="name">注册时间</span>
          <div class="picker_bottom"  @click="showFlag = true">请选择日期 <span><img src="@/assets/imgs/car/down.png" alt=""></span></div>
          <van-calendar v-model="showFlag" color="#0066FF" :min-date="minDate" :max-date="maxDate" :default-date="defaultdate" @confirm="onConfirmTime" />
        </div>
      </div>
      <div class="next">
        立即绑定
      </div>
    </div>
  </div>
</template>

<script>
  import headerTop from '@/components/header/index.vue';
  import { formatDate } from '@/utils/index.js';
  export default {
    name: 'feedback',
    data () {
      return {
        title: '车辆信息', // 名称
        headStyle: {}, // 头部样式
        backIcon: false,
        value: '',
        columns: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
        showPicker: false,
        datetime: '',
        minDate: new Date(1970, 0, 1),
        maxDate: new Date(2050, 0, 31),
        defaultdate: new Date(),
        showFlag: false
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
      onConfirm(value) {
        this.value = value;
        this.showPicker = false;
      },
      onConfirmTime(date) {
        this.showFlag = false;

        console.log(formatDate(date,'yyyy-MM-dd'))
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
      background:rgba(255,255,255,1);
      border-radius:5px;
      .input_title {
        width: 100%;
        height: 50px;
        border-bottom: 1px solid #E6E6E6;
        font-size:17px;
        font-weight:bold;
        color:rgba(0,129,255,1);
        display: flex;
        align-items: center;
        .imgs {
          width: 24px;
          height: 18px;
          margin: 2px 7px 0 10px;
          display: inline-block;
          img {
            width: 100%;
          }
        }
      }
      .input {
        width: 100%;
        height: 45px;
        border-bottom: 1px solid #E6E6E6;
        font-size: 14px;
        font-weight: 500;
        color: #666666;
        overflow: hidden;
        input {
          width: 50%;
          height: 43px;
          outline: none;
          border: none;
          float: right;
          text-align: right;
          padding-right: 10px;
        }
        .name {
          line-height: 48px;
        }
        .red {
          color: #E91919;
          font-size: 14px;
          padding-left: 14px;
        }
        .picker_bottom {
          width: 50%;
          height: 44px;
          float: right;
          text-align: right;
          padding-right: 10px;
          line-height: 49px;
          color: #999999;
          img {
            width: 10px;
            height: 6px;
            margin-left: 5px;
          }
        }
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
