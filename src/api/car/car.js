import request from '@/utils/request'
//------------------------------------------------------车辆--------------------------------------------------
//车辆绑定
export function vehiclebind (data) {
  return request({
    url: '/app/user/vehicle/bind',
    method: 'post',
    data: data,
  })
}
//车辆查询
export function vehiclequery (data) {
  return request({
    url: '/app/user/vehicle/query',
    method: 'post',
    data: data,
  })
}
//车辆解除绑定
export function vehicleunbind (data) {
  return request({
    url: '/app/user/vehicle/unbind',
    method: 'post',
    data: data,
  })
}

//------------------------------------------------------驾驶证--------------------------------------------------
//驾驶证绑定
export function drivebind (data) {
  return request({
    url: '/app/user/drive/bind',
    method: 'post',
    data: data,
  })
}

//驾驶证查询
export function drivequery (data) {
  return request({
    url: '/app/user/drive/query',
    method: 'post',
    data: data,
  })
}
//驾驶证解除绑定
export function driveunbind (data) {
  return request({
    url: '/app/user/drive/unbind',
    method: 'post',
    data: data,
  })
}

//------------------------------------------------------意见反馈--------------------------------------------------
//会员意见反馈
export function feedbackadd (data) {
  return request({
    url: '/app/user/feedback/add',
    method: 'post',
    data: data,
  })
}

