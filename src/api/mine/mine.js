import request from '@/utils/request'




// 系统字典查询
export function getDictionaryAll (data) {
  return request({
    url: '/app/user/getDictionaryAll',
    method: 'post',
    data: data,
  })
}

//个人中心信息
export function userInfo (data) {
  return request({
    url: '/app/user/info',
    method: 'post',
    data: data,
  })
}

