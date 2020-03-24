<template>
  <div class="content">
    <div class="timeLine">
		<!--<el-steps :active="1" align-center>-->
			<!--<el-step title="基本信息"></el-step>-->
			<!--<el-step title="认证确认"></el-step>-->
			<!--<el-step title="完成"></el-step>-->
		<!--</el-steps>-->
		<div class="top">
			<div class="radiusbox">
				<div class="radius">1</div>
				<!--<div class="text">基本信息</div>-->
			</div>
			<div class="dashed"></div>
			<div class="radiusbox">
				<div class="radius">2</div>
				<!--<div class="text">认证确认</div>-->
			</div>
			<div class="dashed"></div>
			<div class="radiusbox">
				<div class="radius">3</div>
				<!--<div class="text">完成</div>-->
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
        <span class="red">*</span><span>企业工商业登记名称</span> <input type="text" placeholder="请输入单位名称" />
      </div>
      <div class="input">
        <span class="red">*</span><span>统一社会信用代码</span> <input type="text" placeholder="请输入统一社会信用代码" />
      </div>
      <div class="input">
        <span class="red">*</span><span>单位地址</span> <input type="text" placeholder="请输入单位地址" />
      </div>
      <div class="input">
        <span class="red">*</span><span>法定代表人</span> <input type="text" placeholder="请输入法人" />
      </div>
      <div class="input">
        <span class="red">*</span><span>联系电话</span> <input type="text" placeholder="请输入联系电话" />
      </div>
		<div class="input">
			<span class="red">*</span><span>经办人</span> <input type="text" placeholder="请输入经办人" />
		</div>
      <div class="input">
        <span class="red"></span><span>经营/业务范围</span> <input type="text" placeholder="请输入业务范围" />
      </div>
      <div class="input">
        <span class="red"></span><span>注册资金</span> <input type="text" placeholder="请输入注册资金" />
      </div>
		<div class="input">
			<span class="red"></span><span>单位性质</span> <input type="text" placeholder="请输入单位性质" />
		</div>
		<div class="input">
			<span class="red"></span><span>注册类型</span> <input type="text" placeholder="请输入注册类型" />
		</div>
		<div class="input">
			<span class="red"></span><span>行业分类</span> <input type="text" placeholder="请输入行业分类" />
		</div>
		<div class="input">
			<span class="red"></span><span>年营业额</span> <input type="text" placeholder="请输入年营业额" />
		</div>
		<div class="input">
			<span class="red"></span><span>职工总数</span> <input type="text" placeholder="请输入职工总数" />
		</div>
		<div class="input">
			<span class="red"></span><span>邮箱</span> <input type="text" placeholder="请输入邮箱" />
		</div>
    </div>
	  <div class="next">
		  <div class="text">下一步</div>
	  </div>
  </div>
</template>

<script>

export default {
  name: 'feedback',
  data () {
    return {
      title: '意见反馈' // 名称
    }
  },
  components: {

  },
  computed: {},
  created () {

  },
  methods: {
    goback () {
      this.$router.push('/mine')
    }
  }
}
</script>
<style lang="scss" scoped>
 .content {
   width: 100%;
   box-sizing: border-box;
   padding: 12px;

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
		 padding-left: 25px;
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
			 padding-right: 10px;
		 }

	 }
	 .radiusbox {
		 float: left;
		 font-size: 12px;
		 /*position: relative;*/
		 /*.text1 {*/
			 /*position: absolute;*/
				/**/
		 /*}*/
		 /*.text2 {*/
			 /*position: absolute;*/

		 /*}*/
		 /*.text3 {*/
			 /*position: absolute;*/

		 /*}*/
	 }
	 .radiusbox:first-child {
		 margin-left: 32px;
	 }

	.radius {
		width: 14px;
		height: 14px;
		background: #0066FF;
		border-radius: 50%;
		font-size: 12px;
		color: #ffffff;
		text-align: center;
		line-height: 15px;
		margin: 5px 10px;
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
   input {
     outline: none;
     border: none;
     float: right;
      height: 43px;
     text-align: right;
     padding-right: 10px;
   }
   .input {
      width: 100%;
     height: 45px;
     border-bottom: 1px solid #E6E6E6;
     line-height: 45px;
     font-size:14px;
     font-weight:500;
     color:#666666;
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
