import request from '@/utils/request'

//个人中心信息
export function userInfo (data) {
  return request({
    url: '/app/user/info',
    method: 'post',
    data: data
  })
}

