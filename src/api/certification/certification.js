import request from '@/utils/request'

// 会员认证提交
export function authAdd (data) {
  return request({
    url: '/app/user/auth/add',
    method: 'post',
    data: data,
  })
}
// 会员认证续费
export function authRenew (data) {
  return request({
    url: '/app/user/auth/renew',
    method: 'post',
    data: data,
  })
}
// 会员认证查询
export function authQuery (data) {
  return request({
    url: '/app/user/auth/query',
    method: 'post',
    data: data,
  })
}
//支付
export function usertesPay () {
  return request({
    url: '/app/user/tesPay',
    method: 'get'
  })
}
// 联系地址更新
export function updateAddress (data) {
  return request({
    url: '/app/user/updateAddress',
    method: 'post',
    data: data
  })
}
//会费查询
export function getAnnualFee (data) {
  return request({
    url: '/app/user/getAnnualFee',
    method: 'post',
    data: data
  })
}
