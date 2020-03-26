import axios from 'axios'

// console.log(process.env.BASE_API)

// api项目:http://192.168.1.117:9000/api/address/test
// back项目:http://192.168.1.117:9000/back/admin/test
// seller项目:http://192.168.1.117:9000/seller/admin/test

// console.log(api)

const service = axios.create({
  // baseURL: process.env.BASE_API + '/api',
  // baseURL: process.env.BASE_API,
  baseURL: process.env.VUE_APP_BASE_API,
  // baseURL:'http://101.132.194.14/traffic/',
  withCredentials: false,
  timeout: 5000 // 请求超时时间
})

// respone响应期
service.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token')
    config.headers['Content-Type'] = 'application/json;charset=UTF-8'
    config.headers['token'] = token

    return config
  },
  error => {
    // console.log(error) // for debug
    // const res = response.data

    return Promise.reject(error)
  }
)
// respone拦截器
service.interceptors.response.use(
  response => {
    // console.log(JSON.stringify(response))
    // console.log(response)
    // const resp = response.data;
    // if (resp.status === 200) {
    //     return resp;
    // } else {
    //     Toast.fail(resp.message);
    // }
    // console.log(response)
    return response
  },
  error => {
    // console.log("err" + error); // for debug
    return Promise.reject(error)
  }
)

export default service
