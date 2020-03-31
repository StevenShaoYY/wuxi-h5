<template>
  <!--<div class="header" :style="_headStyle" :backIcon="_backIcon">-->
    <!--<span class="iconfont iconimg" v-if="_backIcon" @click="goback">&#xe630;</span>-->
    <!--{{_title}}-->
    <!--<slot name="righticon"></slot>-->
  <!--</div>-->
</template>

<script>
export default {
  props: [
    "title",
    "headStyle",
    "backIcon"
    /**
     *  @param  {String} title - 中间标题
     *  @param  {Object} headStyle - 整体样式
     *  @param  {Object} backIcon - 返回按钮
     */
  ],
  watch: {
    title: {
      handler(e) {
        if (e) {
          this._title = e;
        } else {
          this._title = "";
        }
      },
      deep: true,
      immediate: true
    },
    headStyle: {
      handler(e) {
        if (e) {
          this._headStyle = e;
        } else {
          this._headStyle = {};
        }
      },
      deep: true,
      immediate: true
    },
    backIcon: {
      handler(e) {
        if (e) {
          this._backIcon = true;
        } else {
          this._backIcon = false;
        }
      },
      deep: true,
      immediate: true
    }
  },
  data() {
    return {
      _title: "",
      _headStyle: {},
      _backIcon: false
    };
  },
  methods: {
    goback() {
      this.$emit("goback");
    }
  }
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 44px;
  background: #FFFFFF;
  position: relative;
  text-align: center;
  line-height: 45px;
  color: #333333;
  font-size: 18px;
  overflow: hidden;
}

.header .iconimg {
  position: absolute;
  top: 0;
  left: 10px;
  font-size: 18px;
  line-height: 45px;
}
</style>
