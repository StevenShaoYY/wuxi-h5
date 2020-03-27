import Vue from 'vue'
import Router from 'vue-router'
import Home from 'views/Home.vue'

const mine = () => import('@/views/mine/index.vue') // 个人中心
const carServe = () => import('@/views/carServe/index.vue') // 车辆服务
const LoginUserInfo = () => import('@/views/user/LoginUserInfo.vue') // 登录注册
const personalInfo = () => import('@/views/mine/personalInfo.vue') // 个人信息
const privacy = () => import('@/views/user/privacy.vue') // 隐私


const carInfo = () => import('@/views/mine/compontents/carInfo.vue') // 车辆
const carInforRemove = () => import('@/views/mine/compontents/carInforRemove.vue') // 车辆

const driveInfo = () => import('@/views/mine/compontents/driveInfo.vue') // 驾驶
const driveInfoRemove = () => import('@/views/mine/compontents/driveInfoRemove.vue') // 驾驶

const feedback = () => import('@/views/mine/compontents/feedback.vue') // 意见反馈

const members = () => import('@/views/mine/certification/index.vue') // 会员认证
const personalMembers = () => import('@/views/mine/certification/personalMembers.vue') // 个人会员
const unitMembers = () => import('@/views/mine/certification/unitMembers.vue') // 单位会员
const personalMembersSure = () => import('@/views/mine/certification/personalMembersSure.vue') // 个人会员确认
const unitMembersSure = () => import('@/views/mine/certification/unitMembersSure.vue') // 单位会员确认
const personalMembersSuccess = () => import('@/views/mine/certification/personalMembersSuccess.vue') // 个人会员成功
const unitMembersSuccess = () => import('@/views/mine/certification/unitMembersSuccess.vue') // 单位会员成功
const editAddress = () => import('@/views/mine/certification/editAddress.vue') // 编辑地址
const unitMembersOver = () => import('@/views/mine/certification/unitMembersOver.vue') // 认证完成


Vue.use(Router)
const router = new Router({
  routes: [

    {
      path: '/',
      redirect: 'LoginUserInfo'
    },
    {
      path: '/LoginUserInfo',
      name: 'LoginUserInfo',
      component: LoginUserInfo,
      meta: {
        title: '登陆',
        keepAlive: false
      }
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: privacy,
      meta: {
        title: '隐私政策',
        keepAlive: false
      }
    },
    {
      path: '/carServe',
      name: 'carServe',
      component: carServe,
      meta: {
        title: '车辆服务',
        keepAlive: false
      }
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine,
      meta: {
        title: '个人中心',
        keepAlive: false
      }
    },
    {
      path: '/personalInfo',
      name: 'personalInfo',
      component: personalInfo,
      meta: {
        title: '个人信息',
        keepAlive: false
      }
    },
    {
      path: '/mine/members',
      name: 'members',
      component: members,
      meta: {
        title: '会员认证',
        keepAlive: false
      }
    },
    {
      path: '/mine/unitMembers',
      name: 'unitMembers',
      component: unitMembers,
      meta: {
        title: '单位会员认证',
        keepAlive: false
      }
    },
    {
      path: '/mine/unitMembers/sure',
      name: 'unitMembersSure',
      component: unitMembersSure,
      meta: {
        title: '单位会员认证',
        keepAlive: false
      }
    },
    {
      path: '/mine/unitMembers/success',
      name: 'unitMembersSuccess',
      component: unitMembersSuccess,
      meta: {
        title: '个人会员认证',
        keepAlive: false
      }
    },
    {
      path: '/mine/unitMembers/over',
      name: 'unitMembersOver',
      component: unitMembersOver,
      meta: {
        title: '会员认证完成',
        keepAlive: false
      }
    },
    {
      path: '/mine/personalMembers',
      name: 'personalMembers',
      component: personalMembers,
      meta: {
        title: '个人会员认证',
        keepAlive: false
      }
    },
    {
      path: '/mine/personalMembers/sure',
      name: 'personalMembersSure',
      component: personalMembersSure,
      meta: {
        title: '个人会员认证',
        keepAlive: false
      }
    },
    {
      path: '/mine/personalMembers/success',
      name: 'personalMembersSuccess',
      component: personalMembersSuccess,
      meta: {
        title: '个人会员认证',
        keepAlive: false
      }
    },
    {
      path: '/mine/personalMembers/success/editAddress',
      name: 'editAddress',
      component: editAddress,
      meta: {
        title: '编辑地址',
        keepAlive: false
      }
    },
    {
      path: '/mine/carInfo',
      name: 'carInfo',
      component: carInfo,
      meta: {
        title: '车辆信息',
        keepAlive: false
      }
    },
    {
      path: '/mine/carInforRemove',
      name: 'carInforRemove',
      component: carInforRemove,
      meta: {
        title: '车辆信息',
        keepAlive: false
      }
    },
    {
      path: '/mine/driveInfo',
      name: 'driveInfo',
      component: driveInfo,
      meta: {
        title: '驾驶证信息',
        keepAlive: false
      }
    },
    {
      path: '/mine/driveInfoRemove',
      name: 'driveInfoRemove',
      component: driveInfoRemove,
      meta: {
        title: '驾驶证信息',
        keepAlive: false
      }
    },
    {
      path: '/mine/feedback',
      name: 'feedback',
      component: feedback,
      meta: {
        title: '意见反馈',
        keepAlive: false
      }
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      meta: {
        title: '首页',
        keepAlive: false
      }
    },
    {
      path: '/404',
      name: '404',
      component: () => import('views/404.vue'),
      meta: {
        title: '404',
        keepAlive: true
      }
    }

  ]
})

export default router
