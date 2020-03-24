import Vue from 'vue'
import Router from 'vue-router'
import Home from 'views/Home.vue'

const mine = () => import('@/views/mine/index.vue') // 个人中心
const carServe = () => import('@/views/carServe/index.vue') // 车辆服务
const LoginUserInfo = () => import('@/views/user/LoginUserInfo.vue') // 登录注册

const members = () => import('@/views/mine/compontents/members.vue') // 会员
const carInfo = () => import('@/views/mine/compontents/carInfo.vue') // 车辆
const driveInfo = () => import('@/views/mine/compontents/driveInfo.vue') // 驾驶
const feedback = () => import('@/views/mine/compontents/feedback.vue') // 意见反馈

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
      path: '/mine/members',
      name: 'members',
      component: members,
      meta: {
        title: '会员认证',
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
      path: '/mine/driveInfo',
      name: 'driveInfo',
      component: driveInfo,
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
