import axios from 'axios'
import { Toast } from 'vant'
import router from '@/router'

const service = axios.create({
  // baseURL: process.env.BASE_API + '/api',
  // baseURL: process.env.BASE_API,
  // baseURL: process.env.NODE_ENV == 'production' ? window.location.origin + '/' : '/traffic/',
  baseURL: process.env.VUE_APP_BASE_API,
  // baseURL:'http://101.132.194.14/traffic/',
  withCredentials: false,
  timeout: 5000 // 请求超时时间
})

// respone响应期
service.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token')
    config.headers['Content-Type'] = 'application/json'
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
    // const resp = response.data

    if(response.data.code == 400) {
      router.push('/LoginUserInfo');
      return Toast.fail(response.data.message);
    }else {
      return response
    }

    // return response
    // console.log(response)

  },
  error => {
    // console.log("err" + error); // for debug
    return Promise.reject(error)
  }
)

export default service
