<template>
  <div >
    <!--<headerTop :title="title" :head-style="headStyle" :back-icon="backIcon" @goback="goback"/>-->
    <div class="middles">
      <div class="header_background">
        <!--<div class="header">-->
          <!--&lt;!&ndash;个人中心&ndash;&gt;-->
        <!--</div>-->
        <div class="header_title" @click="handlepersonalInfo">
          <div class="left">
            <div class="left_imgs">
              <img src="@/assets/imgs/mine/people.png" alt />
            </div>
            <div class="left_text">
              <div class="name">{{result.name?result.name:'暂无'}}</div>
              <div class="labels">{{result.type == 0 ?'未认证':'已认证'}}</div>
            </div>
          </div>
          <div class="right">
            <div class="right_imgs">
              <div class="imgs">
                <img src="@/assets/imgs/mine/erweima.png" alt />
              </div>
              <div class="text">个人信息</div>
            </div>
            <div class="right_text">
              <img src="@/assets/imgs/mine/rightInfo.png" alt />
            </div>
          </div>
        </div>
      </div>

      <div class="tab_list">
        <div class="tab_list_box">
          <div
            class="lists"
            v-for="(item,index) of tab_lists"
            @click="jumpRouter(item)"
            :key="index"
          >
            <div class="left">
              <img :src="item.imgs" alt />
              <span class="span1">{{item.name}}</span>
            </div>
            <div class="right">
              <img :src="item.imgright" alt />
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer-tabbar />
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
      tab_lists: [
        {
          name: "会员认证",
          keys: "like-o",
          imgs: require("@/assets/imgs/mine/huiyuan.png"),
          imgright: require("@/assets/imgs/mine/right.png"),
          path: "/mine/members",
          pathp: "/mine/personalMembers/success",
          pathu: "/mine/unitMembers/success",
        },
        {
          name: "车辆信息",
          keys: "location-o",
          imgs: require("@/assets/imgs/mine/cheliang.png"),
          imgright: require("@/assets/imgs/mine/right.png"),
          path: "/mine/carInfo",
          paths: "/mine/carInforRemove"
        },
        {
          name: "驾驶证信息",
          keys: "records",
          imgs: require("@/assets/imgs/mine/jiashi.png"),
          imgright: require("@/assets/imgs/mine/right.png"),
          path: "/mine/driveInfo",
          paths: "/mine/driveInfoRemove"
        },
        {
          name: "意见反馈",
          keys: "records",
          imgs: require("@/assets/imgs/mine/yijian.png"),
          imgright: require("@/assets/imgs/mine/right.png"),
          path: "/mine/feedback",
          paths: "/mine/feedback"
        }
      ],
      result:{
        name:'',
        type:0
      }
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
        path: "/carInfo"
      });
    },
    handlepersonalInfo() {
      if(this.result.type == 0) {
        return this.$toast('请完成会员认证')
      }else {
        this.$router.push({
          path: "/personalInfo"
        });
      }
    },
    jumpRouter(item) {
      if(item.name == '车辆信息') {
        if(this.result.plateNumber) {
          this.$router.push(item.paths)
        }else {
          this.$router.push(item.path)
        }
      }

      if(item.name == '驾驶证信息') {
        if(this.result.quasiVehicleType) {
          this.$router.push(item.paths)
        }else {
          this.$router.push(item.path)
        }
      }
      if(item.name == '会员认证') {
        //authStatus 认证状态 1.未支付，2.已支付，3.已过期，4. 支付异常，5. 已重置，6.已审核，7. 已退款
        //type  会员类型 0.非会员，1.普通会员，2.单位会员，3.单位成员

   //      第一步判断 type
   //      0.非会员    进行下一步分析
   //      1.普通会员  展示普通会员认证结果
   //      2.单位会员  展示单位会员认证结果
   //      3.单位成员  展示单位成员认证结果
   //
   //      如果非会员判断 authStatus
   //      空， 则提示步骤一选择会员认证类型
   //      未支付，则显示步骤二  【特殊情况说明：当前时间大于payEndTime,则提示，“认证过期，重新提交认证”】
   // 已支付，则显示步骤三
   //      支付异常，同未支付处理
   //      已重置，忽略，客户端不会遇到该状态
   //      已审核，展示审核后的信息
   //      已退款，展示审核后的信息，显示已退款，可重新认证


        if(this.result.type == 0) {

          if(this.result.authType == 1) {  //是单位还是个人
            if(this.result.authStatus == 1) {
              this.$router.push({
                path: "/mine/personalMembers/sure",
                query:{authStatus:1}
              })
            }
            if(this.result.authStatus == 2) {
              this.$router.push("/mine/unitMembers/over")
            }
            if(this.result.authStatus == 3) {
              this.$router.push({
                path: "/mine/personalMembers/sure",
                query:{authStatus:3}
              })
            }
            if(this.result.authStatus == 4) {
              this.$router.push({
                path: "/mine/personalMembers/sure",
                query:{authStatus:4}
              })
            }
            if(this.result.authStatus == 6) {
              this.$router.push("/mine/personalMembers/success")
            }
            if(this.result.authStatus == 7) {
              this.$router.push({
                path: "/mine/personalMembers/success",
                query:{authStatus:7}
              })
            }
          }else if (this.result.authType == 2){
            if(this.result.authStatus == 1) {
              this.$router.push({
                path: "/mine/unitMembers/sure",
                query:{authStatus:1}
              })
            }
            if(this.result.authStatus == 2) {
              this.$router.push("/mine/unitMembers/over")
            }
            if(this.result.authStatus == 3) {
              this.$router.push({
                path: "/mine/unitMembers/sure",
                query:{authStatus:3}
              })
            }
            if(this.result.authStatus == 4) {
              this.$router.push({
                path: "/mine/unitMembers/sure",
                query:{authStatus:4}
              })
            }
            if(this.result.authStatus == 6) {
              this.$router.push("/mine/unitMembers/success")
            }
            if(this.result.authStatus == 7) {
              this.$router.push({
                path: "/mine/unitMembers/success",
                query:{authStatus:7}
              })
            }
          }else {
            this.$router.push(item.path)
          }


        }

        if(this.result.type == 1) {
          this.$router.push(item.pathp)
        }

        if(this.result.type == 2){
          this.$router.push(item.pathu)
        }

      }
    },
    userInfo() {
      let data = {}
      userInfo(data).then(res => {
        if (res.data.code == 200) {
          this.result = res.data.result
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .container {
    height: auto;
    width: 100%;
  }
.middles {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 50px;
  overflow-y: auto;
  width: 100%;
  z-index: 10;
  -webkit-overflow-scrolling: touch;
}
.header_background {
  width: 100%;
  height: 134px;
  background: linear-gradient(
      151deg,
      rgba(0, 114, 255, 1),
      rgba(0, 138, 255, 1)
  );
  border-radius: 0px 0px 15px 15px;
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
  height: 134px;
  border-radius: 0px 0px 15px 15px;
  padding-top: 40px;
  box-sizing: border-box;
  padding-left: 12px;
  padding-right: 12px;
  .left {
    float: left;
    .left_imgs {
      width: 56px;
      height: 56px;
      float: left;
      img {
        width: 100%;
      }
    }
    .left_text {
      float: left;
      margin-left: 12px;
      .name {
        font-size: 17px;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
      }
      .labels {
        margin-top: 10px;
        border: 1px solid rgba(255, 255, 255, 1);
        border-radius: 10px;
        font-size: 12px;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        padding: 2px 10px;
      }
    }
  }
  .right {
    float: right;
    .right_imgs {
      float: left;
      margin-right: 24px;
      text-align: center;
      .imgs {
        width: 37px;
        height: 37px;
        display: inline-block;
        img {
          width: 100%;
        }
      }
      .text {
        font-size: 13px;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
      }
    }
    .right_text {
      float: left;
      width: 13px;
      height: 24px;
      padding-top: 10px;
      img {
        width: 100%;
      }
    }
  }
}
.middles .tab_list {
  box-sizing: border-box;
  padding: 0 12px;
  width: 100%;
  position: absolute;
  top: 120px;
}
.middles .tab_list .tab_list_box {
  box-shadow: 0px 1px 7px 0px rgba(0, 102, 255, 0.16);
  border-radius: 5px;
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
  font-size: 18px;
  padding-right: 10px;
  line-height: 49px;
}
</style>
