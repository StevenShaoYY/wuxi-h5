<template>
  <div>
    <headerTop :title="title" :head-style="headStyle" :back-icon="backIcon" @goback="goback"/>
    <div class="content">
      <div class="boxform">
        <div class="input_title">
          <div class="imgs"><img src="@/assets/imgs/car/drive.png" alt=""></div><span class="name">绑定驾驶证</span>
        </div>
        <div class="input">
          <span class="red">*</span><span class="name">准驾车型</span>
          <div class="picker_bottom"  @click="showPicker = true">{{quasiVehicleType?quasiVehicleType:'请选择'}} <span><img src="@/assets/imgs/car/down.png" alt=""></span></div>
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
          <span class="red">*</span><span class="name">初次领证日期</span>
          <div class="picker_bottom"  @click="showFlag = true">{{driveCertTime?driveCertTime:'请选择日期'}} <span><img src="@/assets/imgs/car/down.png" alt=""></span></div>
          <!--<van-calendar v-model="showFlag" color="#0066FF" :min-date="minDate" :max-date="maxDate" :default-date="defaultdate" @confirm="onConfirmTime" />-->
          <van-popup v-model="showFlag" position="bottom">
            <van-datetime-picker v-model="defaultdate" type="date" :min-date="minDate" :max-date="maxDate" @confirm="onConfirmTime"/>
          </van-popup>
        </div>
        <div class="input">
          <span class="red">*</span><span class="name">驾驶证有效期</span>
          <div class="picker_bottom"  @click="showFlags = true">{{driveExpiredTime?driveExpiredTime:'请选择日期'}} <span><img src="@/assets/imgs/car/down.png" alt=""></span></div>
          <van-popup v-model="showFlags" position="bottom">
            <van-datetime-picker v-model="defaultdates" type="date" :min-date="minDate" :max-date="maxDate" @confirm="onConfirmTimes"/>
          </van-popup>
          <!--<van-calendar v-model="showFlags" color="#0066FF" :min-date="minDate" :max-date="maxDate" :default-date="defaultdate" @confirm="onConfirmTimes" />-->
        </div>
        <div class="input">
          <span class="red">*</span><span class="name">现住址</span> <input type="text" v-model="address" placeholder="请输入住址" />
        </div>
      </div>
      <div class="next" @click="confirms">
        立即绑定
      </div>
    </div>
  </div>
</template>

<script>
  import headerTop from '@/components/header/index.vue';
  import { formatDate } from '@/utils/index.js';
  import { drivebind } from '@/api/car/car.js'
  import { getDictionaryAll } from '@/api/mine/mine.js'

  export default {
    name: 'feedback',
    data () {
      return {
        title: '驾驶证信息', // 名称
        headStyle: {}, // 头部样式
        backIcon: false,
        value: '',
        columns: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
        minDate: new Date(1970, 0, 1),
        maxDate: new Date(2050, 0, 31),
        defaultdate: new Date(),
        defaultdates: new Date(),
        showPicker: false,
        datetime: '',
        showFlag: false,
        showFlags: false,
        vehicleTypeOption:[],
        quasiVehicleType:'',
        address: '',
        driveCertTime: '',
        driveExpiredTime:  '',
      }
    },
    components: {
      headerTop
    },
    computed: {},
    created () {
      this.getDictionaryAll()
    },
    methods: {
      goback () {
        this.$router.push('/mine')
      },
      onConfirm(value) {
        this.quasiVehicleType = value;
        this.showPicker = false;
      },
      onConfirmTime(date) {
        this.showFlag = false;
        this.driveCertTime = formatDate(date,'yyyy-MM-dd')
      },
      onConfirmTimes(date) {
        this.showFlags = false;
        this.driveExpiredTime = formatDate(date,'yyyy-MM-dd')
      },
      //提交
      confirms() {
        if(!this.quasiVehicleType) {
          return this.$notify('请选择准驾车型');
        }
        if(!this.driveCertTime) {
          return this.$notify('请选择初次领证日期')
        }
        if(!this.driveExpiredTime) {
          return this.$notify('请选择驾驶证日期')
        }
        if(!this.address) {
          return this.$notify('请输入现住址')
        }
        this.drivebind()
      },
      //字典
      getDictionaryAll() {
        getDictionaryAll({}).then(res => {
          if (res.data.code == 200) {
            this.vehicleTypeOption = res.data.result.quasiVehicleType
            let a = []
            this.vehicleTypeOption.forEach(item => {
              a.push(item.name)
            })
            this.columns = a
          }
        })
      },
      //提交
      drivebind() {
        let a = ''
        this.vehicleTypeOption.forEach(item => {
          if(item.name == this.quasiVehicleType) {
            a = item.value
          }
        })
        let data = {
          quasiVehicleType: a,
          address: this.address,
          driveCertTime:  this.driveCertTime,
          driveExpiredTime:  this.driveExpiredTime,
        }
        drivebind(data).then(res => {
          if (res.data.code == 200) {
            this.$toast.success('绑定成功')
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
