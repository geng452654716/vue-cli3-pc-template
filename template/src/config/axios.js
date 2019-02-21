/** @format */

import axios from 'axios'
const apiUrl = process.env.VUE_APP_API
var qs = require('qs')
// 全局路径
axios.defaults.baseURL = apiUrl
axios.defaults.withCredentials = true
// 请求头
axios.defaults.headers = {
  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
}
// 请求参数处理
axios.defaults.transformRequest = [
  function(data) {
    return typeof data === 'object'
      ? data instanceof FormData
        ? data
        : qs.stringify(data)
      : data
  }
]

// 超时重新请求次数
axios.defaults.retry = 4
// 超时重新请求时间
axios.defaults.retryDelay = 1000

// 添加请求拦截器
axios.interceptors.request.use(config => {
  return config
})

// 添加响应拦截器
axios.interceptors.response.use(response => {
  return response
})

export default axios
