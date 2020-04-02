import request from '@/utils/request'

//登录
export function LoginUserInfo (data) {
  return request({
    url: '/app/user/login',
    method: 'post',
    data: data
  })
}

//发送短信
export function smsVerification (data) {
  return request({
    url: '/app/sms/verification',
    method: 'post',
    data: data
  })
}

//协议政策查询
export function userGetPolicy (data) {
  return request({
    url: '/app/user/getPolicy',
    method: 'post',
    data: data,
  })
}

// 会员微信登录
export function loginWeiXin (data) {
  return request({
    url: '/app/user/loginWeiXin',
    method: 'post',
    data: data,
  })
}
