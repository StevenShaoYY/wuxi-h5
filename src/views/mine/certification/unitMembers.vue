<template>
	<div>
		<headerTop :title="title" :head-style="headStyle" :back-icon="backIcon" @goback="goback"/>
		<div class="content">
			<div class="timeLine">
				<div class="top">
					<div class="radiusbox">
						<div class="radius">1</div>
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
				<div class="input">
					<span class="red">*</span><span class="name">企业工商业登记名称</span> <input type="text" v-model="froms.companyName" placeholder="请输入单位名称"/>
				</div>
				<div class="input">
					<span class="red">*</span><span class="name">统一社会信用代码</span> <input type="text" v-model="froms.companyCreditCode" placeholder="请输入统一社会信用代码"/>
				</div>
				<div class="input">
					<span class="red">*</span><span class="name">单位地址</span> <input type="text" v-model="froms.companyAddress" placeholder="请输入单位地址"/>
				</div>
				<div class="input">
					<span class="red">*</span><span class="name">法定代表人</span> <input type="text" v-model="froms.companyLegalPerson" placeholder="请输入法人"/>
				</div>
				<div class="input">
					<span class="red">*</span><span class="name">法人联系电话</span> <input type="tel" v-model="froms.companyLegalPersonPhone" placeholder="请输入联系电话"/>
				</div>
				<div class="input">
					<span class="red">*</span><span class="name">法人身份证号码</span> <input type="text" v-model="froms.companyLegalPersonCertificateNumber" placeholder="请输入法人身份证号码"/>
				</div>
				<div class="input">
					<span class="red">*</span><span class="name">经办人</span> <input type="text" v-model="froms.companyChargelPerson" placeholder="请输入经办人"/>
				</div>
				<div class="input">
					<span class="red">*</span><span class="name">经办人联系电话</span> <input type="tel" v-model="froms.companyChargelPersonPhone" placeholder="请输入联系电话"/>
				</div>
				<div class="input">
					<span class="red">*</span><span class="name">联系地址</span> <input type="text" v-model="froms.address" placeholder="请输入联系地址"/>
				</div>
				<div class="input">
					<span class="red"></span><span class="name">经营/业务范围</span> <input type="text" v-model="froms.businessScope" placeholder="请输入业务范围"/>
				</div>
				<div class="input">
					<span class="red"></span><span class="name">注册资金</span> <input type="text" v-model="froms.registeredCapital" placeholder="请输入注册资金"/>
				</div>
				<div class="input">
					<span class="red"></span><span class="name">单位性质</span> <input type="text" v-model="froms.companyProperty" placeholder="请输入单位性质"/>
				</div>
				<div class="input">
					<span class="red"></span><span class="name">注册类型</span> <input type="text" v-model="froms.registeredType" placeholder="请输入注册类型"/>
				</div>
				<div class="input">
					<span class="red"></span><span class="name">行业分类</span> <input type="text" v-model="froms.industryClass" placeholder="请输入行业分类"/>
				</div>
				<div class="input">
					<span class="red"></span><span class="name">年营业额</span> <input type="text" v-model="froms.annualSale" placeholder="请输入年营业额"/>
				</div>
				<div class="input">
					<span class="red"></span><span class="name">职工总数</span> <input type="text" v-model="froms.totalStaff" placeholder="请输入职工总数"/>
				</div>
				<div class="input">
					<span class="red"></span><span class="name">邮箱</span> <input type="text" v-model="froms.email" placeholder="请输入邮箱"/>
				</div>
			</div>
			<div class="next">
				<div class="text" @click="nexted">下一步</div>
			</div>
		</div>
	</div>
</template>

<script>
  import headerTop from '@/components/header/index.vue'
  import { checkIDCard } from '@/utils/index.js'
  export default {
    name: 'feedback',
    data () {
      return {
        title: '单位会员认证', // 名称
        headStyle: {}, // 头部样式
        backIcon: false,
        froms: {
          companyName: '',
          companyCreditCode: '',
          companyAddress: '',
          companyLegalPerson: '',
          companyLegalPersonPhone: '',
          companyChargelPerson: '',
          companyChargelPersonPhone: '',
          businessScope: '',
          registeredCapital: '',
          companyProperty: '',
          registeredType: '',
          industryClass: '',
          annualSale: '',
          totalStaff: '',
          email: '',

        }
      }
    },
    components: {
      headerTop
    },
    computed: {},
    created () {
      let tt = sessionStorage.getItem("unitObj")
      let dataobj = JSON.parse(JSON.stringify(tt))
			this.froms = JSON.parse(dataobj)?JSON.parse(dataobj) : {}
    },
    mounted(){


    },
    methods: {
      goback () {
        this.$router.push('/mine')
      },
      nexted () {
        const regphone = /^[1][3,4,5,6,7,8,9][0-9]{9}$/

        if(!this.froms.companyName) {
          return this.$notify('请输入单位名称')
        }
        if(!this.froms.companyCreditCode) {
          return this.$notify('请输入统一社会信用代码')
        }
        if(!this.froms.companyAddress) {
          return this.$notify('请输入单位地址')
        }
        if(!this.froms.companyLegalPerson) {
          return this.$notify('请输入法人')
        }
        if(!this.froms.companyLegalPersonPhone) {
          return this.$notify('请输入法人联系电话')
        }

        if(!this.froms.companyLegalPersonCertificateNumber) {
          return this.$notify('请输入法人身份证号码')
        }
        let sfz = checkIDCard(this.froms.companyLegalPersonCertificateNumber)
        if (!sfz) {
          return this.$notify('请输入正确的身份证号')
        }
        if(!this.froms.companyChargelPerson) {
          return this.$notify('请输入经办人')
        }
        if(!this.froms.companyChargelPersonPhone) {
          return this.$notify('请输入经办人联系电话')
        }
        if(!this.froms.address) {
          return this.$notify('请输入联系地址')
        }
        this.$router.push({
          path: '/mine/unitMembers/sure',
        })
				sessionStorage.setItem("unitObj",JSON.stringify(this.froms))
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

		.radius2, .radius3 {
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
	}

	.boxform {
		width: 100%;
		background: rgba(255, 255, 255, 1);
		box-shadow: 0px 0px 8px 0px rgba(10, 103, 241, 0.1);
		border-radius: 4px;


		.input {
			width: 100%;
			height: 45px;
			border-bottom: 1px solid #E6E6E6;
			font-size: 14px;
			font-weight: 500;
			color: #666666;
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

			.name {
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
			background: rgba(0, 102, 255, 1);
			box-shadow: 0px 0px 6px 0px rgba(0, 255, 102, 0.35);
			opacity: 0.99;
			border-radius: 4px;
			text-align: center;
			line-height: 40px;
			font-size: 16px;
			font-weight: 500;
			color: rgba(255, 255, 255, 1);
		}
	}
</style>
