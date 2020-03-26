import request from '@/utils/request'

//登录
export function login (data) {
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
