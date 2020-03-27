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
					<span class="red"></span><span class="name">会员类型</span> <span class="right">个人会员</span>
				</div>
				<div class="input">
					<span class="red"></span><span class="name">姓名</span> <span class="right">{{objs.name}}</span>
				</div>
				<div class="input">
					<span class="red"></span><span class="name">身份证号</span> <span class="right">{{objs.certificateNumber}}</span>
				</div>
				<div class="input">
					<span class="red"></span><span class="name">联系地址</span> <span class="right">{{objs.address}}</span>
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
				<div class="text" @click="showPopup">注册并支付会费</div>
				<div class="text textLast" @click="textLast">上一步</div>
			</div>
		</div>

		<van-popup v-model="showFlag">
			<div class="boxshow">
				<div class="title">订单支付 <span class="close" @click="closed">X</span></div>
				<div class="boxcontent">
					<div class="text"><span class="left">订单内容</span><span class="right">会员年费</span></div>
					<div class="text"><span class="left">支付金额</span><span class="right">￥100.00</span></div>
				</div>
				<div class="sure" @click="over">
					确认支付
				</div>
			</div>
		</van-popup>
	</div>
</template>

<script>
  import headerTop from '@/components/header/index.vue'
  import { authAdd,authRenew,usertesPay } from '@/api/certification/certification.js'

  export default {
    name: 'feedback',
    data () {
      return {
        title: '个人会员认证', // 名称
        headStyle: {}, // 头部样式
        backIcon: false,
        showFlag:false,
				objs:{}
      }
    },
    components: {
      headerTop
    },
    computed: {},
    created () {
      let tt = sessionStorage.getItem("personalObj")
      let dataobj = JSON.parse(JSON.stringify(tt))
      this.objs = JSON.parse(dataobj)
    },
    methods: {
      goback () {
        this.$router.push('/mine')
      },
      textLast () {
        this.$router.go(-1)
        // this.$router.push({
        //   path: '/mine/unitMembers'
        // })
      },
      showPopup() {
        this.authAdd()
        this.showFlag = true;
      },
      closed() {
        this.showFlag = false;
      },
      over() {
        this.usertesPay()
      },
			//会员提交
      authAdd () {
        let data = {
          authInfo:this.objs,
          authType:1   //1个人 2单位
				}
        authAdd(data).then(res => {
          if (res.status == 200) {

          }
        })
			},
			//会员续费支付
      usertesPay () {
        usertesPay().then(res => {
          if (res.status == 200) {
            const div = document.createElement('div')
            div.innerHTML = res.data
            document.body.appendChild(div)
            document.forms[0].submit()

            // this.$router.push({
            //   path: '/mine/unitMembers/over'
            // })
          }
        })
			}

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
			border-bottom: 1px dashed #BDBDBD;
			float: left;
			margin-top: 10px;
		}
		.dashed1 {
			border-bottom: 1px solid #0066FF;
		}
	}

	.boxform {
		width: 100%;
		background: rgba(255, 255, 255, 1);
		box-shadow: 0px 0px 8px 0px rgba(10, 103, 241, 0.1);
		border-radius: 4px;
		.input_t {

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
			border: 1px solid #CCCCCC;
			color: #0368FF;
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
			background:rgba(3,104,255,1);
			opacity:0.75;
			font-size:17px;
			font-weight:500;
			color:rgba(255,255,255,1);
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
				border-bottom: 1px solid #CCCCCC;
				line-height: 40px;
				.left{
					text-align: left;
					font-size:15px;
					font-weight:500;
					color:rgba(102,102,102,1);
				}
				.right {
					float: right;
					font-size:18px;
					font-weight:500;
					color:rgba(51,51,51,1);

				}
			}
		}
		.sure {
			width:130px;
			height:40px;
			margin: 0 auto;
			background:rgba(0,102,255,1);
			/*box-shadow:0px 0px 6px 0px rgba(0, 255, 102, 0.35);*/
			opacity:0.99;
			border-radius:4px;
			font-size:16px;
			font-weight:500;
			color:rgba(255,255,255,1);
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}

</style>
