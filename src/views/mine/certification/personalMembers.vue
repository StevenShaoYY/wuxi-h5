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
					<span class="red">*</span><span class="name">姓名</span> <input type="text" placeholder="请输入姓名" v-model="froms.name"/>
				</div>
				<div class="input">
					<span class="red">*</span><span class="name">身份证号</span> <input type="text" placeholder="请输入身份证号" v-model="froms.certificateNumber"/>
				</div>
				<div class="input">
					<span class="red">*</span><span class="name">联系地址</span> <input type="text" placeholder="请输入联系地址" v-model="froms.address"/>
				</div>
				<div class="input">
					<span class="red">*</span><span class="name">手机号码</span>
					<div class="picker_bottom">{{froms.phoneNumber}}</div>
					<!--<input type="tel" class="inputTel" disabled placeholder="请输入手机号码" v-model="froms.phoneNumber"/>-->
				</div>
				<div class="input">
					<span class="red"></span><span class="name">性别</span>
					<div class="picker_bottom"  @click="showPicker_gender = true"><span v-if="froms.gender">{{froms.gender}}</span><span class="color99" v-else>请选择</span> <span><img src="@/assets/imgs/car/down.png" alt=""></span></div>
					<van-popup v-model="showPicker_gender" position="bottom"><van-picker show-toolbar :columns="genderColumns" @confirm="onConfirm_gender" @cancel="showPicker_gender = false" /></van-popup>
				</div>
				<div class="input">
					<span class="red"></span><span class="name">民族</span>
					<div class="picker_bottom"  @click="showPicker_nation = true"><span v-if="froms.nation">{{froms.nation}}</span><span class="color99" v-else>请选择</span> <span><img src="@/assets/imgs/car/down.png" alt=""></span></div>
					<van-popup v-model="showPicker_nation" position="bottom"><van-picker show-toolbar :columns="nationColumns" @confirm="onConfirm_nation" @cancel="showPicker_nation = false" /></van-popup>
				</div>
				<div class="input">
					<span class="red"></span><span class="name">籍贯</span> <input type="text" placeholder="请输入籍贯" v-model="froms.areaName"/>
				</div>
				<div class="input">
					<span class="red"></span><span class="name">政治面貌</span> <input type="text" placeholder="请输入政治面貌" v-model="froms.politicalFace"/>
				</div>
				<div class="input">
					<span class="red"></span><span class="name">毕业学校</span> <input type="text" placeholder="请输入毕业学校" v-model="froms.school"/>
				</div>
				<div class="input">
					<span class="red"></span><span class="name">学历</span>
					<div class="picker_bottom"  @click="showPicker_educationRecord = true"><span v-if="froms.educationRecord">{{froms.educationRecord}}</span><span class="color99" v-else>请选择</span> <span><img src="@/assets/imgs/car/down.png" alt=""></span></div>
					<van-popup v-model="showPicker_educationRecord" position="bottom"><van-picker show-toolbar :columns="educationRecordColumns" @confirm="onConfirm_educationRecord" @cancel="showPicker_educationRecord = false" /></van-popup>
				</div>
				<div class="input">
					<span class="red"></span><span class="name">学位</span>
					<div class="picker_bottom"  @click="showPicker_academicDegree = true"><span v-if="froms.academicDegree">{{froms.academicDegree}}</span><span class="color99" v-else>请选择</span> <span><img src="@/assets/imgs/car/down.png" alt=""></span></div>
					<van-popup v-model="showPicker_academicDegree" position="bottom"><van-picker show-toolbar :columns="academicDegreeColumns" @confirm="onConfirm_academicDegree" @cancel="showPicker_academicDegree = false" /></van-popup>
				</div>
				<div class="input">
					<span class="red"></span><span class="name">单位名称</span> <input type="text" placeholder="请输入单位名称" v-model="froms.companyName"/>
				</div>
				<div class="input">
					<span class="red"></span><span class="name">职务</span> <input type="text" placeholder="请输入职务" v-model="froms.companyDuty"/>
				</div>
				<div class="input">
					<span class="red"></span><span class="name">职称</span> <input type="text" placeholder="请输入职称" v-model="froms.companyGradle"/>
				</div>
				<div class="input">
					<span class="red"></span><span class="name">邀请码</span> <input type="text" placeholder="请输入邀请码" v-model="froms.invitationCode"/>
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
  import { getDictionaryAll } from '@/api/mine/mine.js'
  import { checkIDCard } from '@/utils/index.js';
  export default {
    name: 'personalMembers',
    data () {
      return {
        title: '个人会员认证', // 名称
        headStyle: {}, // 头部样式
        backIcon: false,
        froms: {
          name: '',
          certificateNumber: '',
          address: '',
          phoneNumber: '',
          gender: '',
          nation: '',
          areaName: '',
          politicalFace: '',
          school: '',
          educationRecord: '',
          academicDegree: '',
          companyName: '',
          companyDuty: '',
          companyGradle: '',
          invitationCode:''
        },
        vehicleTypeOption:[],
        showPicker_gender:false,
        showPicker_nation:false,
        showPicker_educationRecord:false,
        showPicker_academicDegree:false,

        genderColumns:[],
        nationColumns:[],
        educationRecordColumns:[],
        academicDegreeColumns:[]
      }
    },
    components: {
      headerTop
    },
    computed: {},
    created () {
      this.getDictionaryAll()
      let tt = sessionStorage.getItem("personalObj")
      let dataobj = JSON.parse(JSON.stringify(tt))
      this.froms = JSON.parse(dataobj)?JSON.parse(dataobj) : {}
      this.froms.phoneNumber = sessionStorage.getItem("phoneNumber")
    },
		mounted(){

      // document.addEventListener("blur",function(ev){
			//
      // })

      // $(document).on('blur', 'input,textarea', function() {
      //   var scrollTop = $('body').scrollTop()
      //   $('body').scrollTop(scrollTop)
      // })
		},
    methods: {
      goback () {
        this.$router.push('/mine')
      },
      onConfirm_gender(value) {
        this.froms.gender = value;
        this.showPicker_gender = false;
      },
      onConfirm_nation(value) {
        this.froms.nation = value;
        this.showPicker_nation = false;
      },
      onConfirm_educationRecord(value) {
        this.froms.educationRecord = value;
        this.showPicker_educationRecord = false;
      },
      onConfirm_academicDegree(value) {
        this.froms.academicDegree = value;
        this.showPicker_academicDegree = false;
      },
			//循环
			changeSelect (data) {
        let TT = []
        data.forEach(item => {
          TT.push(item.name)
        })
				return TT
			},
      //字典
      getDictionaryAll() {
        getDictionaryAll({}).then(res => {
          if (res.data.code == 200) {
            let data = res.data.result
            this.genderColumns = this.changeSelect(data.gender) //性别
            this.nationColumns = this.changeSelect(data.nation) //民族
            this.educationRecordColumns = this.changeSelect(data.educationRecord)  //学历
            this.academicDegreeColumns = this.changeSelect(data.academicDegree)  //学位
          }
        })
      },
      nexted () {
        if (!this.froms.name) {
          return this.$notify('请输入姓名')
        }
        if (!this.froms.certificateNumber) {
          return this.$notify('请输入身份证号')
        }
        let sfz = checkIDCard(this.froms.certificateNumber)
				if (!sfz) {
          return this.$notify('请输入正确的身份证号')
				}
        if (!this.froms.address) {
          return this.$notify('请输入联系地址')
        }
        const regphone = /^[1][3,4,5,6,7,8,9][0-9]{9}$/
        if (!this.froms.phoneNumber) {
          return this.$notify('请输入手机号码')
        }else if (!regphone.test(this.froms.phoneNumber)) {
          return this.$notify('请输入正确的手机号码')
        }

        this.$router.push({
          path: '/mine/personalMembers/sure'
        })
        sessionStorage.setItem("personalObj",JSON.stringify(this.froms))
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
		height:55px;
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
			.picker_bottom {
				width: 50%;
				height: 44px;
				float: right;
				text-align: right;
				padding-right: 10px;
				line-height: 49px;
				color: #666666;
				.color99 {
					color: #999999;
				}
				img {
					width: 10px;
					height: 6px;
				}
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

	input::-webkit-input-placeholder { /* WebKit browsers */
		color: #999999;
	}

	input::-moz-placeholder { /* Mozilla Firefox 19+ */
		color: #999999;
	}

	input::-ms-input-placeholder { /* Internet Explorer 10+ */
		color: #999999;
	}
	.inputTel {
		background: white;
		color: red !important;
	}
</style>
