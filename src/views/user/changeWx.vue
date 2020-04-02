<template>
  <div class="box-wrapper">

  </div>
</template>
<script>
  import { login , smsVerification ,loginWeiXin} from '@/api/user/user.js'
export default {

  name: "changeWx",
  data() {
    return {

    };
  },
  created() {
    localStorage.removeItem("tokens")
    if(this.isWeixin()) {
      this.getCodes()
    }else {
      this.$toast.fail('请在微信端打开')
      this.$router.push({
        path: '/LoginUserInfo'
      })
    }
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
      let local = ''
      if(local) {
        let url = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxa16c02724b19bb58&redirect_uri=' + local + '&response_type=code&scope=snsapi_base&state=123#wechat_redirect'
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
      loginWeiXin({ code:code }).then(res => {
        if(res.status == 200) {
          this.$router.push({
            path: '/mine'
          })
          localStorage.setItem('tokens', res.data.message)
        }else {
          this.$router.push({
            path: '/LoginUserInfo'
          })
        }
      })
    }
  },
  computed: {},
  components: {}
}
</script>
<style lang="scss" scoped>
</style>
