<template>
	<div>
		<headerTop :title="title" :head-style="headStyle" :back-icon="backIcon" @goback="goback"/>
		<div class="content">

			<div class="boxform">
				<div class="input_t">
					<span class="name">认证信息</span>
				</div>
				<div class="input">
					<span class="red"></span><span class="name">会员类型</span> <span class="right">单位会员</span>
				</div>
				<div class="input">
					<span class="red"></span><span class="name">企业工商登记名称</span> <span class="right">{{objs.companyName}}</span>
				</div>
				<div class="input">
					<span class="red"></span><span class="name">统一社会信用代码</span> <span class="right">{{objs.companyCreditCode}}</span>
				</div>
				<div class="input">
					<span class="red"></span><span class="name">单位地址</span> <span class="right">{{objs.companyAddress}}</span>
				</div>
			</div>
			<div class="boxform boxformCost">

				<div class="input">
					<span class="red"></span><span class="name">法定代表人</span> <span class="right">{{objs.companyLegalPerson}}</span>
				</div>
				<div class="input">
					<span class="red"></span><span class="name">法定代表人联系电话</span> <span class="right">{{objs.companyLegalPersonPhone}}</span>
				</div>
				<div class="input">
					<span class="red"></span><span class="name">法定代表人身份证号码</span> <span class="right">{{objs.companyLegalPersonCertificateNumber}}</span>
				</div>
				<div class="input">
					<span class="red"></span><span class="name">经办人</span> <span class="right">{{objs.companyChargelPerson}}</span>
				</div>
				<div class="input">
					<span class="red"></span><span class="name">经办人联系电话</span> <span class="right">{{objs.companyChargelPersonPhone}}</span>
				</div>
			</div>
			<div class="boxform boxformCost">
				<div class="input">
					<span class="red"></span><span class="name">联系地址</span> <span class="right">{{objs.address}}</span>
				</div>
				<div class="input">
					<span class="red"></span><span class="name">认证状态</span> <span class="right">{{changeauthStatus(authStatus)}}</span>
				</div>
				<div class="input">
					<span class="red"></span><span class="name">认证时间</span> <span class="right">{{createTime}}</span>
				</div>
				<div class="input">
					<span class="red"></span><span class="name">到期时间</span> <span class="right">{{expiredTime}}</span>
				</div>
				<div class="input">
					<span class="red"></span><span class="name">发票号码</span> <span class="right">{{invoiceNumber}}</span>
				</div>
			</div>
			<div class="next">
				<div class="text" v-if="$route.query.authStatus == 7" @click="agains">重新认证</div>
				<div class="text" v-else @click="editAddress">联系地址更新</div>
			</div>
		</div>
	</div>
</template>

<script>
  import headerTop from '@/components/header/index.vue'
  import { authQuery } from '@/api/certification/certification.js'
  export default {
    name: 'feedback',
    data () {
      return {
        title: '单位会员认证', // 名称
        headStyle: {}, // 头部样式
        backIcon: false,
        objs:{},
        createTime:'',//认证时间
        authStatus:'',//认证状态
        expiredTime:'',//到期时间
        invoiceNumber:'' //发票号码
      }
    },
    components: {
      headerTop
    },
    computed: {},
    created () {
      if(this.$route.query.authStatus == 7) {
        this.$toast.fail('已退款，可重新认证')
			}
			this.authQuery()
    },
    methods: {
      goback () {
        this.$router.push('/mine')
      },
      editAddress () {
        this.$router.push({
          path: '/mine/personalMembers/success/editAddress'
        })
      },
      agains () {
        this.$router.push({
          path: '/mine/members'
        })
      },
      changeauthStatus (type) {
        if(type == 1) {
          return '未支付'
        }else if(type == 2) {
          return '已支付'
        }else if(type == 3) {
          return '已过期'
        }else if(type == 4) {
          return '支付异常'
        }else if(type == 5) {
          return '已重置'
        }else if(type == 6){
          return '已审核'
        }else {
          return '已退款'
        }
			},
      //会员提交
      authQuery () {
        authQuery({}).then(res => {
          if (res.data.code == 200) {
            let data = res.data.result
						this.objs = data.authInfo
						this.createTime = data.createTime
            this.expiredTime = data.expiredTime
						this.authStatus = data.authStatus
            this.invoiceNumber = data.invoiceNumber
          }
        })
      },
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
