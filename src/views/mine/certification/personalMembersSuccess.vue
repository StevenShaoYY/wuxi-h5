<template>
	<div>
		<headerTop :title="title" :head-style="headStyle" :back-icon="backIcon" @goback="goback"/>
		<div class="content">

			<div class="boxform">
				<div class="input_t">
					<span class="name">认证信息</span>
				</div>
				<div class="input">
					<span class="red"></span><span class="name">会员类型</span> <span class="right">个人会员</span>
				</div>
				<div class="input">
					<span class="red"></span><span class="name">姓名</span> <span class="right">小明</span>
				</div>
				<div class="input">
					<span class="red"></span><span class="name">性别</span> <span class="right">男</span>
				</div>
				<div class="input">
					<span class="red"></span><span class="name">身份证号</span> <span class="right">11111111111</span>
				</div>
			</div>
			<div class="boxform boxformCost">
				<div class="input">
					<span class="red"></span><span class="name">联系地址</span> <span class="right">四川省成都市</span>
				</div>
				<div class="input">
					<span class="red"></span><span class="name">认证时间</span> <span class="right">2020-01-01</span>
				</div>
				<div class="input">
					<span class="red"></span><span class="name">认证状态</span> <span class="right">认证通过</span>
				</div>
				<div class="input">
					<span class="red"></span><span class="name">到期时间</span> <span class="right">2020-01-01</span>
				</div>
			</div>

			<div class="boxform boxformCost">
				<div class="input_t">
					<span class="name">会员费用</span>
				</div>
				<div class="input">
					<span class="red"></span><span class="name">会员年费</span> <span class="right">100元</span>
				</div>
			</div>
			<div class="next">
				<div class="text" @click="editAddress">联系地址更新</div>
			</div>
		</div>
	</div>
</template>

<script>
  import headerTop from '@/components/header/index.vue'

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
      editAddress () {
        this.$router.push({
          path: '/mine/personalMembers/success/editAddress'
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
	.content {
		width: 100%;
		box-sizing: border-box;
		padding: 12px 12px 12px 12px;
		background: #F5F5F5;
	}

	.boxform {
		width: 100%;
		background: rgba(255, 255, 255, 1);
		box-shadow: 0px 0px 8px 0px rgba(10, 103, 241, 0.1);
		border-radius: 4px;
		.input_t {
			width: 100%;
			line-height: 48px;
			border-bottom: 1px solid #E6E6E6;
			padding-left: 14px;
			font-size:17px;
			font-weight:bold;
			color:rgba(0,102,255,1);
		}
		.input {
			width: 100%;
			height: 45px;
			border-bottom: 1px solid #E6E6E6;
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
			width: 100%;
			height: 40px;
			display: inline-block;
			background:rgba(0,102,255,1);
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
