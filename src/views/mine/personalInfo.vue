<template>
  <div class="container">
    <!--<headerTop :title="title" :head-style="headStyle" :back-icon="backIcon" @goback="goback"/>-->

    <div class="middles">
      <div class="header_background">
        <!--<div class="header">-->
          <!--&lt;!&ndash;信息展示&ndash;&gt;-->
        <!--</div>-->
        <div class="header_title">
          <div>
            <img class="imgs1" src="@/assets/imgs/mine/erweimaInfo.png" alt="">
            <div class="text"><img class="imgs2" src="@/assets/imgs/mine/gerenhuiyuan.png" alt="">{{changeType(result.type)}}</div>
          </div>
        </div>
      </div>

      <div class="tab_list">
        <div class="tab_list_box">
          <div class="lists" v-if="result.type == 2 || result.type == 3">
            <div class="left"><span class="span1">单位名称</span></div>
            <div class="right">{{result.companyName?result.companyName:''}}</div>
          </div>
          <div class="lists">
            <div class="left"><span class="span1">姓名</span></div>
            <div class="right">{{result.name?result.name:''}}</div>
          </div>
          <div class="lists">
            <div class="left"><span class="span1">身份证号码</span></div>
            <div class="right">{{result.certificateNumber?result.certificateNumber:''}}</div>
          </div>
          <div class="lists">
            <div class="left"><span class="span1">车牌号码</span></div>
            <div class="right">{{result.plateNumber?result.plateNumber:''}}</div>
          </div>
        </div>
      </div>
    </div>
    <!--<footer-tabbar />-->
  </div>
</template>

<script>
import FooterTabbar from "components/FooterTabbar";
import headerTop from '@/components/header/index.vue';
import { userInfo } from '@/api/mine/mine.js'

export default {
  data() {
    return {
      title: '个人中心', // 名称
      headStyle: {
        background:"linear-gradient(151deg,rgba(0,114,255,1),rgba(0,138,255,1))"
      }, // 头部样式
      backIcon: false,
      result:{}
    };
  },
  components: {
    FooterTabbar,
    headerTop
  },
  computed: {},
  created() {
    this.userInfo()
  },
  methods: {
    goback() {
      this.$router.push({
        path: "/mine"
      });
    },
    changeType(type) {
      //[0.非会员，1.普通会员，2.单位会员，3.单位成员]
      if(type == 0) {
        return '非会员'
      }else if(type == 1) {
        return '普通会员'
      }else if(type == 2) {
        return '单位会员'
      }else {
        return '单位成员'
      }
    },
    userInfo() {
      let data = {}
      userInfo(data).then(res => {
        if (res.data.code == 200) {
          let data = res.data.result
          this.result = data

          // this.tab_lists.forEach(item => {
          //   if(item.name == '姓名') {
          //     item.keys = data.name?data.name: '--'
          //   }
          //   if(item.name == '身份证号码') {
          //     item.keys = data.certificateNumber?data.certificateNumber: '--'
          //   }
          //   if(item.name == '车牌号码') {
          //     item.keys = data.plateNumber?data.plateNumber: '--'
          //   }
          // })
        }
      })
    }
  }
};
</script>
<style lang="scss" scoped>
.middles {
  width: 100%;
}
.header_background {
  width: 100%;
  height: 94px;
  background: linear-gradient(
      151deg,
      rgba(0, 114, 255, 1),
      rgba(0, 138, 255, 1)
  );
}
.header {
  width: 100%;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size:18px;
  font-weight:500;
  color:rgba(255,255,255,1);
}
.header_title {
  width: 100%;
  height: 100px;
  border-radius: 0px 0px 15px 15px;
  padding-top: 50px;
  box-sizing: border-box;
  padding-left: 12px;
  padding-right: 12px;
  display: flex;
  justify-content: center;
  .imgs1 {
    width: 90px;
    height: 90px;
  }
  .imgs2 {
    width: 14px;
    height: 14px;
    margin-right: 5px;
    margin-left: 5px;
  }
  .text {
    font-size:16px;
    font-weight:500;
    color:rgba(51,51,51,1);
    margin-top: 6px;
  }
}
.middles .tab_list {
  box-sizing: border-box;
  padding: 100px 12px;
  width: 100%;
}
.middles .tab_list .tab_list_box {
  box-shadow: 0px 1px 7px 0px rgba(0, 102, 255, 0.16);
  border-radius: 5px;
  background:rgba(255,255,255,1);
}
.middles .lists {
  width: 100%;
  height: 49px;
  background: #fff;
  overflow: hidden;
  border-bottom: 1px solid rgba(204, 204, 204, 1);
}
.middles .lists:last-child {
  border-bottom: none;
  border-radius: 5px;
}
.middles .lists:first-child {
  border-radius: 5px;
}
.middles .lists .left {
  line-height: 49px;
  font-size: 15px;
  padding-left: 20px;
  float: left;
  color: #666666;
  img {
    vertical-align: middle;
  }
}
.middles .lists .left .span1 {
  font-size: 14px;
  padding-left: 10px;
}
.middles .lists .right {
  float: right;
  font-size:14px;
  font-family:PingFang SC;
  font-weight:500;
  color:rgba(153,153,153,1);
  padding-right: 10px;
  line-height: 49px;
}
</style>
