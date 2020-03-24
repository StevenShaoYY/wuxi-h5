<template>
  <div class="box-wrapper">
    <div class="header">
      <div class="left"><img src="@/assets/imgs/user/goback.png" alt=""><span class="goback">返回</span></div>
      注册
    </div>
    <div class="content">
      <div class="box_input">
        <div class="imgs"><img src="@/assets/imgs/user/phone.png" alt=""></div>
        <input type="tel" class="input" placeholder="请输入手机号码" v-model.trim="phone" @change="handlephoneFlag()" />
      </div>
      <div class="box_input_code">
        <div class="left_code">
          <div class="imgs"><img src="@/assets/imgs/user/code.png" alt=""></div>
          <input type="tel" class="input input" placeholder="请输入验证码" @change="handlecodeFlag()" v-model.trim="code" />
        </div>
        <div class="gitcode" @click="gitcode">获取验证码</div>
      </div>
      <div class="checkbox">
        <van-checkbox v-model="checked" icon-size="14px" style="float: left" shape="square">
          <span class="text">我已阅读并同意</span>
        </van-checkbox>
        <span class="agreement">《用户注册协议》和《隐私政策》</span>
      </div>
      <div class="confirm" @click="confirm">
        确认
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "LoginUserInfo",
  data() {
    return {
      phone:"",
      code:"",
      checked:false
    };
  },
  created() {},
  methods: {
    //验证手机号
    handlephoneFlag() {},
    //验证码
    handlecodeFlag() {},
    //获取验证码
    gitcode() {},
    confirm () {
      this.$router.push({
        path: '/mine'
      })
    }
  },
  computed: {},
  components: {}
};
</script>
<style lang="scss" scoped>
  .box-wrapper{
    width: 100%;
    height: 100vh;
    background-image: url("./../../assets/imgs/user/back.png");
  }
  .header {
    width: 100%;
    height: 49px;
    text-align: center;
    line-height: 49px;
    font-size: 18px;
    color: #ffffff;
    position: relative;
  }
  .left {
    position: absolute;
    left: 10px;
    top: 0;
    font-size: 14px;
    img {
      width: 8px;
      height: 15px;
      display: inline-block;
      padding-right: 5px;
      vertical-align: middle;
    }
    span {
      vertical-align: middle;
    }
  }
  .content {
    width: 100%;
    box-sizing: border-box;
    padding: 0 11.5px;
    margin-top: 80px;
    .box_input {
      width: 100%;
      height: 37px;
      margin-bottom: 15px;
      background: #FFFFFF;
      border-radius: 4px;
      line-height: 37px;
      .input {
        border: none;
        outline: none;
        float: left;
        width: 80%;
        height: 35px;
        font-size: 16px;
      }
      .imgs {
        width: 14px;
        height: 22px;
        float: left;
        padding: 7px 22.5px 0 14px;
        img {
          width: 100%;
        }
      }
    }
    .box_input_code {
      width: 100%;
      height: 37px;
      .left_code {
        width: 65%;
        height: 37px;
        float: left;
        margin-bottom: 15px;
        background: #FFFFFF;
        border-radius: 4px;
        line-height: 37px;
        .imgs {
          width: 14px;
          height: 22px;
          float: left;
          padding: 7px 22.5px 0 14px;
          img {
            width: 100%;
          }
        }
        .input {
          border: none;
          outline: none;
          float: left;
          width: 70%;
          height: 35px;
          font-size: 16px;
        }

      }
      .gitcode{
        width: 30%;
        height: 37px;
        text-align: center;
        line-height: 37px;
        float: right;
        background: #0066FF;
        border-radius: 4px;
        color: #ffffff;
        font-size: 15px;
      }
    }
    .checkbox {
      width: 100%;
      height: 15px;
      margin-top: 15px;
      .text {
        color: #ffffff;
        font-size: 12px;
      }
      .agreement {
        color: #0066FF;
        font-size: 12px;
      }

    }
    .confirm {
      width: 100%;
      height: 40px;
      background: #0066FF;
      font-size: 16px;
      color: #ffffff;
      text-align: center;
      margin-top: 32px;
      box-shadow:0px 0px 6px 0px rgba(0, 255, 102, 0.35);
      border-radius:5px;
      line-height: 40px;
    }
  }

</style>
