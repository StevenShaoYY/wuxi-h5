<template>
  <div class="container">
    <!--<headerTop :title="title" :head-style="headStyle" :back-icon="backIcon" @goback="goback"/>-->

    <div class="middles">
      <div class="header_background">
        <div class="header">
          信息展示
        </div>
        <div class="header_title">
          <div>
            <img class="imgs1" src="@/assets/imgs/mine/erweimaInfo.png" alt="">
            <div class="text"><img class="imgs2" src="@/assets/imgs/mine/gerenhuiyuan.png" alt="">个人会员</div>
          </div>
        </div>
      </div>

      <div class="tab_list">
        <div class="tab_list_box">
          <div
            class="lists"
            v-for="(item,index) of tab_lists"
            :key="index"
          >
            <div class="left">
              <span class="span1">{{item.name}}</span>
            </div>
            <div class="right">
              {{item.keys}}
            </div>
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
          name: "姓名",
          keys: "小王",
        },
        {
          name: "身份证号码",
          keys: "5119xxxxxxxxxxxxxx",
        },
        {
          name: "车牌号码",
          keys: "川A00000",
        }
      ]
    };
  },
  components: {
    FooterTabbar,
    headerTop
  },
  computed: {},
  methods: {
    goback() {
      this.$router.push({
        path: "/mine"
      });
    },
    jumpRouter(item) {
      this.$router.push(item.path);
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
  height: 144px;
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
