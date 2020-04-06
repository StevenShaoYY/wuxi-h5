<template>
  <div>
    <headerTop :title="title" :head-style="headStyle" :back-icon="backIcon" @goback="goback" />
    <div class="content">
      <div class="timeLine">
        <div class="top">
          <div class="radiusbox">
            <!--<div class="radius">1</div>-->
            <div class="radius radius1">
              <img src="@/assets/imgs/mine/duihao.png" alt />
            </div>
          </div>
          <div class="dashed dashed1"></div>
          <div class="radiusbox">
            <div class="radius radius2">2</div>
          </div>
          <div class="dashed dashed2"></div>
          <div class="radiusbox">
            <div class="radius radius3">3</div>
          </div>
        </div>

        <div class="bot">
          <div>基本信息</div>
          <div class="div2">认证确认</div>
          <div class="div3">完成</div>
        </div>
      </div>
      <div class="boxform">
        <div class="input_t">
          <span class="name">认证信息</span>
        </div>
        <div class="input">
          <span class="red"></span>
          <span class="name">会员类型</span>
          <span class="right">个人会员</span>
        </div>
        <div class="input">
          <span class="red"></span>
          <span class="name">姓名</span>
          <span class="right">{{objs.name}}</span>
        </div>
        <div class="input">
          <span class="red"></span>
          <span class="name">身份证号</span>
          <span class="right">{{objs.certificateNumber}}</span>
        </div>
        <div class="input">
          <span class="red"></span>
          <span class="name">联系地址</span>
          <span class="right">{{objs.address}}</span>
        </div>
        <div class="input">
          <span class="red"></span>
          <span class="name">手机号码</span>
          <span class="right">{{objs.phoneNumber}}</span>
        </div>
        <div class="input">
          <span class="red"></span>
          <span class="name">性别</span>
          <span class="right">{{objs.gender}}</span>
        </div>
        <div class="input">
          <span class="red"></span>
          <span class="name">民族</span>
          <span class="right">{{objs.nation}}</span>
        </div>
        <div class="input">
          <span class="red"></span>
          <span class="name">籍贯</span>
          <span class="right">{{objs.areaName}}</span>
        </div>
        <div class="input">
          <span class="red"></span>
          <span class="name">政治面貌</span>
          <span class="right">{{objs.politicalFace}}</span>
        </div>
        <div class="input">
          <span class="red"></span>
          <span class="name">毕业学校</span>
          <span class="right">{{objs.school}}</span>
        </div>
        <div class="input">
          <span class="red"></span>
          <span class="name">学历</span>
          <span class="right">{{objs.educationRecord}}</span>
        </div>
        <div class="input">
          <span class="red"></span>
          <span class="name">学位</span>
          <span class="right">{{objs.academicDegree}}</span>
        </div>
        <div class="input">
          <span class="red"></span>
          <span class="name">单位名称</span>
          <span class="right">{{objs.companyName}}</span>
        </div>
        <div class="input">
          <span class="red"></span>
          <span class="name">职务</span>
          <span class="right">{{objs.companyDuty}}</span>
        </div>
        <div class="input">
          <span class="red"></span>
          <span class="name">职称</span>
          <span class="right">{{objs.companyGradle}}</span>
        </div>
        <div class="input">
          <span class="red"></span>
          <span class="name">邀请码</span>
          <span class="right">{{objs.invitationCode}}</span>
        </div>
      </div>
      <div class="boxform boxformCost">
        <div class="input_t">
          <span class="name">会员费用</span>
        </div>
        <div class="input">
          <span class="red"></span>
          <span class="name">会员年费</span>
          <span class="right">{{annualFees}}元</span>
        </div>
      </div>
      <div class="next">
        <div class="text" @click="showPopup">注册并支付会费</div>
        <div class="text textLast" @click="textLast">上一步</div>
      </div>
    </div>

    <van-popup v-model="showFlag">
      <div class="boxshow">
        <div class="title">
          订单支付
          <span class="close" @click="closed">X</span>
        </div>
        <div class="boxcontent">
          <div class="text">
            <span class="left">订单内容</span>
            <span class="right">会员年费</span>
          </div>
          <div class="text">
            <span class="left">支付金额</span>
            <span class="right">￥{{annualFees}}</span>
          </div>
        </div>
        <div class="sure" @click="over">确认支付</div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import headerTop from "@/components/header/index.vue";
import {
  authAdd,
  authRenew,
  usertesPay,
  getAnnualFee,
  authQuery
} from "@/api/certification/certification.js";
import { getDictionaryAll } from "@/api/mine/mine.js";

export default {
  name: "feedback",
  data() {
    return {
      title: "个人会员认证", // 名称
      headStyle: {}, // 头部样式
      backIcon: false,
      showFlag: false,
      objs: {},
      resultList: {},
      annualFees: ""
    };
  },
  components: {
    headerTop
  },
  computed: {},
  created() {
    if (this.$route.query.authStatus) {
      if (this.$route.query.authStatus == 3) {
        this.$toast.fail("认证过期，重新提交认证");
      }
      if (this.$route.query.authStatus == 4) {
        // this.$toast.fail('支付异常')
      }
      this.authQuery();
    } else {
      let tt = sessionStorage.getItem("personalObj");
      let dataobj = JSON.parse(JSON.stringify(tt));
      this.objs = JSON.parse(dataobj);
    }
    this.getDictionaryAll();
    this.getAnnualFee();
  },
  methods: {
    goback() {
      this.$router.push("/mine");
    },
    // 会员查询
    authQuery() {
      authQuery({}).then(res => {
        if (res.data.code == 200) {
          let data = res.data.result;
          this.objs = data.authInfo;
        }
      });
    },
    getAnnualFee() {
      getAnnualFee({}).then(res => {
        if (res.data.code == 200) {
          let data = res.data.result;
          this.annualFees = data;
        }
      });
    },
    // 字典
    getDictionaryAll() {
      getDictionaryAll({}).then(res => {
        if (res.data.code == 200) {
          let data = res.data.result;
          this.resultList = data;
        }
      });
    },
    textLast() {
      this.$router.push({
        path: "/mine/personalMembers"
      });
      sessionStorage.setItem("personalObj", JSON.stringify(this.objs));
      // this.$router.go(-1)
    },
    showPopup() {
      this.authAdd();
      // this.usertesPay()

      // this.showFlag = true;
    },
    closed() {
      this.showFlag = false;
    },
    over() {
      // this.usertesPay()
    },
    changeObjs(dataList, name) {
      let tt = null;
      dataList.forEach(item => {
        if (item.name == name) {
          tt = item.value;
        }
      });
      return tt;
    },
    // 会员提交
    authAdd() {
      this.objs.gender = this.changeObjs(
        this.resultList.gender,
        this.objs.gender
      );
      this.objs.nation = this.changeObjs(
        this.resultList.nation,
        this.objs.nation
      );
      this.objs.educationRecord = this.changeObjs(
        this.resultList.educationRecord,
        this.objs.educationRecord
      );
      this.objs.academicDegree = this.changeObjs(
        this.resultList.academicDegree,
        this.objs.academicDegree
      );
      let data = {
        authInfo: this.objs,
        authType: 1 // 1个人 2单位
      };
      authAdd(data).then(res => {
        if (res.data.code == 200) {
          let datapayHtml = res.data.result;
          const div = document.createElement("div");
          div.innerHTML = datapayHtml.payHtml;
          document.body.appendChild(div);
          document.forms[0].submit();
        }
      });
    },
    // 会员续费支付
    usertesPay() {
      usertesPay().then(res => {
        if (res.data.code == 200) {
          const div = document.createElement("div");
          div.innerHTML = res.data;
          document.body.appendChild(div);
          document.forms[0].submit();

          // this.$router.push({
          //   path: '/mine/unitMembers/over'
          // })
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.content {
  width: 100%;
  box-sizing: border-box;
  padding: 0 12px 12px 12px;
}

.timeLine {
  width: 100%;
  height: 55px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 8px 0px rgba(10, 103, 241, 0.1);
  border-radius: 5px;
  margin-top: 20px;
  margin-bottom: 20px;
  box-sizing: border-box;
  padding-top: 5px;
  .top {
    width: 100%;
    overflow: hidden;
  }

  .bot {
    width: 100%;
    box-sizing: border-box;
    padding-left: 21px;
    display: flex;

    div {
      width: 33.3%;
    }

    .div2 {
      text-align: center;
      padding-left: 10px;
    }

    .div3 {
      text-align: right;
      padding-right: 32px;
    }
  }

  .radiusbox {
    float: left;
    font-size: 12px;
  }

  .radiusbox:first-child {
    margin-left: 30px;
  }

  .radius {
    width: 2.8vh;
    height: 2.8vh;
    background: #0066ff;
    border-radius: 1.4vh;
    font-size: 12px;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px 5px;
  }
  .radius1 {
    background: #fff;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .radius3 {
    width: 2.4vh;
    height: 2.4vh;
    border-radius: 999999px;
    border: 1px solid #999999;
    background: #ffffff;
    color: #333333;
  }

  .dashed {
    width: 30%;
    height: 1px;
    border-bottom: 1px dashed #bdbdbd;
    float: left;
    margin-top: 10px;
  }
  .dashed1 {
    border-bottom: 1px solid #0066ff;
  }
}

.boxform {
  width: 100%;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 8px 0px rgba(10, 103, 241, 0.1);
  border-radius: 4px;
  .input_t {
    line-height: 48px;
    border-bottom: 1px solid #e6e6e6;
    padding-left: 14px;
    font-size: 17px;
    font-weight: bold;
    color: rgba(0, 102, 255, 1);
  }
  .input {
    width: 100%;
    height: 45px;
    border-bottom: 1px solid #e6e6e6;
    font-size: 14px;
    font-weight: 500;
    color: #666666;
    overflow: hidden;

    .right {
      float: right;
      line-height: 48px;
      padding-right: 10px;
    }
    .name {
      line-height: 48px;
    }
  }
}
.boxformCost {
  margin-top: 15px;
}

.red {
  color: #e91919;
  font-size: 14px;
  padding-left: 14px;
}

.next {
  margin-top: 36px;
  margin-bottom: 36px;
  width: 100%;
  text-align: center;

  .text {
    width: 40%;
    height: 40px;
    display: inline-block;
    background: rgba(0, 102, 255, 1);
    /*box-shadow:0px 0px 6px 0px rgba(0, 255, 102, 0.35);*/
    opacity: 0.99;
    border-radius: 4px;
    text-align: center;
    line-height: 40px;
    font-size: 16px;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
  }

  .textLast {
    background: #ffffff;
    border: 1px solid #cccccc;
    color: #0368ff;
  }

  .text:first-child {
    margin-right: 20px;
  }
}

.boxshow {
  width: 75vw;
  height: 245px;
  .title {
    width: 100%;
    height: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(3, 104, 255, 1);
    opacity: 0.75;
    font-size: 17px;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    position: relative;
    .close {
      position: absolute;
      top: 15px;
      right: 23px;
    }
  }
  .boxcontent {
    margin-bottom: 15px;
    box-sizing: border-box;
    padding: 16px;
    .text {
      width: 100%;
      height: 40px;
      border-bottom: 1px solid #cccccc;
      line-height: 40px;
      .left {
        text-align: left;
        font-size: 15px;
        font-weight: 500;
        color: rgba(102, 102, 102, 1);
      }
      .right {
        float: right;
        font-size: 18px;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
      }
    }
  }
  .sure {
    width: 130px;
    height: 40px;
    margin: 0 auto;
    background: rgba(0, 102, 255, 1);
    /*box-shadow:0px 0px 6px 0px rgba(0, 255, 102, 0.35);*/
    opacity: 0.99;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
