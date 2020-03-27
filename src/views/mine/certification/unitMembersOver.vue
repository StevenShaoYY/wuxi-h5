<template>
	<div>
		<headerTop :title="title" :head-style="headStyle" :back-icon="backIcon" @goback="goback"/>
		<div class="content">
			<div class="timeLine">
				<div class="top">
					<div class="radiusbox">
						<!--<div class="radius">1</div>-->
						<div class="radius radius1"><img src="@/assets/imgs/mine/duihao.png" alt=""></div>
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
				<div class="box">
					<div class="imgs">
						<img src="@/assets/imgs/mine/chenggong.png" alt="">
					</div>
					<div class="text">注册成功</div>
				</div>
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
        title: '单位会员认证', // 名称
        headStyle: {}, // 头部样式
        backIcon: false,
        showFlag:false
      }
    },
    components: {
      headerTop
    },
    computed: {},
    created () {
      // sessionStorage.removeItem("personalObj")
      // sessionStorage.removeItem("unitObj")
    },
    methods: {
      goback () {
        this.$router.push('/mine')
      },
      textLast () {
        this.$router.go(-1)
        // this.$router.push({
        //   path: '/mine/personalMembers'
        // })
      },
      showPopup() {
        this.showFlag = true;
      },
      closed() {
        this.showFlag = false;
      },
    }
  }
</script>
<style lang="scss" scoped>
	.content {
		width: 100%;
		box-sizing: border-box;
		padding: 0 12px 12px 12px;

	}

	.timeLine {
		width: 100%;
		height: 50px;
		background: rgba(255, 255, 255, 1);
		box-shadow: 0px 0px 8px 0px rgba(10, 103, 241, 0.1);
		border-radius: 5px;
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
			background: #0066FF;
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

		.dashed {
			width: 30%;
			height: 1px;
			border-bottom: 1px solid #0066FF;
			float: left;
			margin-top: 10px;
		}
	}

	.boxform {
		width: 100%;
		background: rgba(255, 255, 255, 1);
		box-shadow: 0px 0px 8px 0px rgba(10, 103, 241, 0.1);
		border-radius: 4px;
		.box {
			margin-top: 20px;
			width: 100%;
			height:200px;
			background:rgba(255,255,255,1);
			box-shadow:0px 0px 8px 0px rgba(10,103,241,0.1);
			border-radius:4px;
			text-align: center;
			.imgs {
				width: 56px;
				height: 56px;
				margin-top: 50px;
				display: inline-block;
				img {
					width: 100%;
				}
			}
			.text {
				font-size:16px;
				font-weight:500;
				color:rgba(51,51,51,1);
			}
		}
	}



</style>
