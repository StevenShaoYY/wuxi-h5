<template>
  <div class="box-wrapper">
    <div class="header">
      <!--<div class="left"><img src="@/assets/imgs/user/goback.png" alt=""><span class="goback">返回</span></div>-->
      <!--注册-->
    </div>
    <div class="content">
      <div class="box_input">
        <div class="imgs"><img src="@/assets/imgs/user/phone.png" alt=""></div>
        <input type="tel" class="input" placeholder="请输入手机号码" v-model.trim="phoneNumber" @change="handlephoneFlag()" />
      </div>
      <div class="box_input_code">
        <div class="left_code">
          <div class="imgs"><img src="@/assets/imgs/user/code.png" alt=""></div>
          <input type="tel" id="input2" class="input" placeholder="请输入验证码" @change="handlecodeFlag()" v-model.trim="code" />
        </div>
        <div class="gitcode" @click="gitcode" v-if="smsCodeFlag">获取验证码</div>
        <div class="gitcode" v-if="!smsCodeFlag">{{timeNum}}秒后重试</div>
      </div>
      <div class="checkbox">
        <van-checkbox v-model="checked" icon-size="14px" style="float: left" shape="square">
          <span class="text">我已阅读并同意</span>
        </van-checkbox>
        <span class="agreement" ><span @click="privacy(2)">《用户注册协议》</span>和<span @click="privacy(1)">《隐私政策》</span></span>
      </div>
      <div class="confirm" @click="confirm">
        确认
      </div>
    </div>
  </div>
</template>
<script>
  import { LoginUserInfo , smsVerification ,loginWeiXin} from '@/api/user/user.js'
export default {

  name: "LoginUserInfo",
  data() {
    return {
      phoneNumber:null,
      code:null,
      codeName:'获取验证码',
      smsCodeFlag:true,
      checked:true,
      timeNum:60,
      authCodes:''
    };
  },
  created() {
    localStorage.removeItem("tokens")
    if(this.isWeixin()) {
      this.getAuthCodes()
    }
    this.phoneNumber = sessionStorage.getItem('phoneNumber')?sessionStorage.getItem('phoneNumber'):null
  },
  mounted() {
    document.getElementById('input2').addEventListener('blur',function(){
        window.scrollTo(0,0)   //页面滚动到顶部
    },false)
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      if(vm.isWeixin()) {
        // vm.getCodes()
      }
    })
  },
  methods: {
    //获取url参数
    getUrlParam(name){
      return decodeURIComponent((new RegExp('[?|&]'+name+'='+'([^&;]+?)(&|#|;|$)').exec(location.href)||[,""])[1].replace(/\+/g,'%20'))||null;
    },
    isWeixin(){
      const ua = window.navigator.userAgent.toLowerCase();
      if(ua.match(/MicroMessenger/i) == 'micromessenger'){
        return true;
      } else {
        return false;
      }
    },
    getCodes () {
      // let local = process.env.VUE_APP_LOCAL_URL  //这个地址
      let local = 'http%3a%2f%2fm.jsyjq.cn%2ftraffic%2ffront%2f'
      if(local) {
        let url = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxa16c02724b19bb58&redirect_uri=' + local + '&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect'
        let code = this.getUrlParam('code') || ''
        if (code === '') {
          window.location.href = url
          code = this.getUrlParam('code')
          this.getOppenId(code)
        } else {
          this.getOppenId(code)
        }
      }else {
        this.$router.push({
          path: '/LoginUserInfo'
        })
      }
    },
    getOppenId (code) {
      loginWeiXin({ authCode:code }).then(res => {
        if(res.data.code == 200) {
          this.$router.push({
            path: '/mine'
          })
          localStorage.setItem('tokens', res.data.message)
        }
      })
    },
    //验证手机号
    handlephoneFlag() {

    },
    //验证码
    handlecodeFlag() {},
    clock() {
      let timeIndex = setInterval(() => {
        this.timeNum -= 1;
        if(this.timeNum == 0) {
          this.smsCodeFlag = true;
          clearInterval(timeIndex);
          this.timeNum = 60;
          // this.$toast.success('发送成功')
        }
      }, 1000)
    },
    //获取验证码
    gitcode() {
      if(this.phoneNumber) {
        smsVerification({phoneNumber:Number(this.phoneNumber)}).then(res => {
          if (res.data.code == 200) {
            this.smsCodeFlag = false;
            this.clock();
            return this.$toast('发送成功')
          }
        })
      }else {
        return this.$toast('请输入手机号码')
      }
    },
    confirm () {
      const regphone = /^[1][3,4,5,6,7,8,9][0-9]{9}$/
      if(!this.phoneNumber) {
        return this.$toast('请输入手机号码')
      }else if (!regphone.test(this.phoneNumber)) {
        return this.$toast('请输入正确的手机号码')
      }

      if(!this.code) {
        return this.$toast('请输入验证码')
      }
      if(!this.checked) {
        return this.$toast('请勾选用户注册协议和隐私政策')
      }
      sessionStorage.setItem("phoneNumber",this.phoneNumber)
      this.LoginUserInfo()
    },
    privacy (type) {
      this.$router.push({
        path: '/privacy',
        query:{
          type:type
        }
      })
    },
    //获取authCode  验证码登录的
    getAuthCodes () {
      let local = 'http%3a%2f%2fm.jsyjq.cn%2ftraffic%2ffront%2f'
      let url = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxa16c02724b19bb58&redirect_uri=' + local + '&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect'
      window.location.href = url
      this.authCodes = this.getUrlParam('code') || ''
    },
    //登录
    LoginUserInfo () {
      let data = {
        clientType: 1,
        clientVersion: 1,
        code : this.code,
        authCode : this.authCodes,
        phoneNumber: this.phoneNumber
      }
      LoginUserInfo(data).then(res => {
        console.log(res)
        if (res.data.code == 200) {
          localStorage.setItem('tokens', res.data.message)
          document.getElementById('input2').addEventListener('blur',function(){
            window.scrollTo(0,0)
          },false)

          this.$router.push({
            path: '/mine'
          })
          this.$toast.success('登录成功！')
        }else {
          return this.$toast(res.data.message)
        }
      })
    },
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
    background-size: 100% 100%;
    background-repeat: no-repeat;

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
      overflow: hidden;

      display: flex;
      justify-content: center;
      align-items: center;
      input {
        border: none;
        outline: none;
        float: left;
        width: 80%;
        height: 30px;
        font-size: 16px;
        z-index: 999;
      }
      .imgs {
        width: 14px;
        height: 22px;
        float: left;
        padding: 0px 22px 0 14px;
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
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        .imgs {
          width: 14px;
          height: 22px;
          float: left;
          padding: 2px 22px 0 14px;
          img {
            width: 100%;
          }
        }
        input {
          border: none;
          outline: none;
          float: left;
          height: 30px;
          width: 70%;
          font-size: 16px;
          z-index: 999;
        }

      }
      .gitcode{
        width: 30%;
        height: 37px;
        display: flex;
        justify-content: center;
        align-items: center;
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
      margin-top: 32px;
      box-shadow:0px 0px 6px 0px rgba(0, 255, 102, 0.35);
      border-radius:5px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

</style>
