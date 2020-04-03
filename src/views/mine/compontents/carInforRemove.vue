<template>
  <div>
    <headerTop :title="title" :head-style="headStyle" :back-icon="backIcon" @goback="goback"/>
    <div class="content">
      <div class="boxform">

        <div class="input">
          <span class="red"></span><span class="name">车型</span>
          <span class="picker_bottom" >{{vehicleType}}</span>
        </div>
        <div class="input">
          <span class="red"></span><span class="name">车牌号码</span>
          <span class="picker_bottom" >{{plateNumber}}</span>
        </div>
        <div class="input">
          <span class="red"></span><span class="name">注册时间</span>
          <span class="picker_bottom" >{{registerTime}}</span>
        </div>
      </div>
      <div class="next" @click="confirms" >
        解除绑定
      </div>
    </div>

    <van-popup v-model="showconfirmFlag">
      <div class="boxshow">
        <div class="title">确认解绑川{{plateNumber}}</div>
        <div class="box">
          <div class="sure" @click="sures">确认</div><div class="cancel" @click="cancels">取消</div>
        </div>
      </div>
    </van-popup>

  </div>
</template>

<script>
  import headerTop from '@/components/header/index.vue';
  import { formatDate } from '@/utils/index.js';
  import { getDictionaryAll } from '@/api/mine/mine.js'
  import { vehiclequery,vehicleunbind } from '@/api/car/car.js'
  export default {
    name: 'feedback',
    data () {
      return {
        title: '车辆信息', // 名称
        headStyle: {}, // 头部样式
        backIcon: false,
        value: '',
        columns: [],
        showPicker: false,
        datetime: '',
        minDate: new Date(1970, 0, 1),
        maxDate: new Date(2050, 0, 31),
        defaultdate: new Date(),
        showFlag: false,
        showconfirmFlag:false,
        plateNumber: '',
        registerTime: '',
        vehicleType: '',
        vehicleTypeOption:'',
      }
    },
    components: {
      headerTop
    },
    computed: {},
    created () {
      this.vehiclequery()
    },
    methods: {
      goback () {
        this.$router.push('/mine')
      },
      onConfirm(value) {
        this.vehicleType = value;
        this.showPicker = false;

      },
      onConfirmTime(date) {
        this.showFlag = false;
        this.registerTime = formatDate(date,'yyyy-MM-dd')
      },
      //提交
      confirms() {
        this.showconfirmFlag = true
      },
      cancels() {
        this.showconfirmFlag = false
      },
      sures() {
        this.vehicleunbind()
      },
      //获取信息
      vehiclequery() {
        vehiclequery({}).then(res => {
          if (res.data.code == 200) {
            let data = res.data.result
            this.plateNumber = data.plateNumber
            this.registerTime = data.registerTime

            this.getDictionaryAll(data.vehicleType)
          }
        })
      },
      //字典
      getDictionaryAll(datas) {
        getDictionaryAll({}).then(res => {
          if (res.data.code == 200) {
            this.vehicleTypeOption = res.data.result.vehicleType
            this.vehicleTypeOption.forEach(item => {
              if(datas == item.value){
                this.vehicleType = item.name
              }
            })

          }
        })
      },
      //解除绑定
      vehicleunbind() {
        vehicleunbind({}).then(res => {
          if (res.data.code == 200) {
            this.$toast.success('解除绑定成功')
            this.$router.go(-1)
          }
        })
      }
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

  .boxshow {
    width: 75vw;
    height: 155px;
    .title {
      font-size:20px;
      margin-top: 32px;
      font-weight:500;
      color:rgba(51,51,51,1);
      text-align: center;
    }
    .box {
      width: 100%;
      margin-top: 33px;
      display: flex;
      justify-content: space-around;
      .sure {
        width: 38%;
        height:40px;
        border-radius:5px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size:16px;
        font-weight:500;
        background:rgba(0,102,255,1);
        color:rgba(255,255,255,1);
        line-height:23px;
      }
      .cancel {
        width: 38%;
        height:40px;
        border-radius:5px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size:16px;
        font-weight:500;
        line-height:23px;
        background:rgba(225,225,225,1);
        color:rgba(51,51,51,1);
      }
    }

  }
</style>
