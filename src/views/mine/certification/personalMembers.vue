<template>
	<div>
		<headerTop :title="title" :head-style="headStyle" :back-icon="backIcon" @goback="goback"/>
		<div class="content">
    <div class="timeLine">
		<div class="top">
			<div class="radiusbox">
				<div class="radius">1</div>
			</div>
			<div class="dashed"></div>
			<div class="radiusbox">
				<div class="radius">2</div>
			</div>
			<div class="dashed"></div>
			<div class="radiusbox">
				<div class="radius">3</div>
			</div>
		</div>
		<div class="bot">
			<div>基本信息</div>
			<div class="div2">认证确认</div>
			<div class="div3">完成</div>
		</div>

	</div>
    <div class="boxform">
      <div class="input">
        <span class="red">*</span><span class="name">姓名</span> <input type="text" placeholder="请输入姓名" />
      </div>
      <div class="input">
        <span class="red">*</span><span class="name">身份证号</span> <input type="text" placeholder="请输入身份证号" />
      </div>
      <div class="input">
        <span class="red">*</span><span class="name">联系地址</span> <input type="text" placeholder="请输入联系地址" />
      </div>
      <div class="input">
        <span class="red">*</span><span class="name">手机号码</span> <input type="text" placeholder="请输入手机号码" />
      </div>
      <div class="input">
        <span class="red"></span><span class="name">性别</span> <input type="text" placeholder="请选择" />
      </div>
		<div class="input">
			<span class="red"></span><span class="name">民族</span> <input type="text" placeholder="请选择" />
		</div>
      <div class="input">
        <span class="red"></span><span class="name">籍贯</span> <input type="text" placeholder="请输入籍贯" />
      </div>
      <div class="input">
        <span class="red"></span><span class="name">政治面貌</span> <input type="text" placeholder="请输入政治面貌" />
      </div>
		<div class="input">
			<span class="red"></span><span class="name">毕业学校</span> <input type="text" placeholder="请输入毕业学校" />
		</div>
		<div class="input">
			<span class="red"></span><span class="name">学历</span> <input type="text" placeholder="请选择" />
		</div>
		<div class="input">
			<span class="red"></span><span class="name">学位</span> <input type="text" placeholder="学位" />
		</div>
		<div class="input">
			<span class="red"></span><span class="name">单位名称</span> <input type="text" placeholder="请输入单位名称" />
		</div>
		<div class="input">
			<span class="red"></span><span class="name">职务</span> <input type="text" placeholder="请输入职务" />
		</div>
		<div class="input">
			<span class="red"></span><span class="name">职称</span> <input type="text" placeholder="请输入职称" />
		</div>
    </div>
	  <div class="next">
		  <div class="text" @click="nexted">下一步</div>
	  </div>
  </div>
	</div>
</template>

<script>
  import headerTop from '@/components/header/index.vue';
export default {
  name: 'feedback',
  data () {
    return {
      title: '个人会员认证', // 名称
      headStyle: {}, // 头部样式
      backIcon: false,
    }
  },
  components: {
    headerTop
  },
  computed: {},
  created () {

  },
  methods: {
    goback () {
      this.$router.push('/mine')
    },
		nexted () {
      this.$router.push({
        path: "/mine/personalMembers/sure"
      });
		}
  }
}
</script>
<style lang="scss" scoped>
 .content {
   width: 100%;
   box-sizing: border-box;
   padding:0 12px 12px 12px;

 }
 .timeLine {
	 width: 100%;
	 height:50px;
	 background:rgba(255,255,255,1);
	 box-shadow:0px 0px 8px 0px rgba(10,103,241,0.1);
	 border-radius:5px;
	 margin-top: 20px;
	 margin-bottom: 20px;
	 .top {
		 width: 100%;
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
			 padding-left:10px;
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
		background: #0066FF;
		border-radius: 1.4vh;
		font-size: 12px;
		color: #ffffff;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 5px 5px;
	}

	 .dashed {
		 width: 30%;
		 height: 1px;
		 border-bottom: 1px dashed #BDBDBD;
		 float: left;
		margin-top: 10px;
	 }
 }
 .boxform {
   width: 100%;
   background:rgba(255,255,255,1);
   box-shadow:0px 0px 8px 0px rgba(10,103,241,0.1);
   border-radius:4px;


   .input {
     width: 100%;
     height: 45px;
     border-bottom: 1px solid #E6E6E6;
     font-size:14px;
     font-weight:500;
     color:#666666;
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
	   .name{
		   line-height: 48px;
	   }
   }
 }
.red {
  color: #E91919;
  font-size: 14px;
	padding-left: 14px;
}
	.next {
		margin-top: 36px;
		margin-bottom: 36px;
		width: 100%;
		text-align: center;
		.text {
			width: 70%;
			height: 40px;
			display: inline-block;
			background:rgba(0,102,255,1);
			box-shadow:0px 0px 6px 0px rgba(0, 255, 102, 0.35);
			opacity:0.99;
			border-radius:4px;
			text-align: center;
			line-height: 40px;
			font-size:16px;
			font-weight:500;
			color:rgba(255,255,255,1);
		}
	}
</style>
