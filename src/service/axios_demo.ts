import axios, { AxiosRequestConfig } from 'axios'

const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 1000 * 30
})

instance.interceptors.request.use(
  (config) => {
    // 1. 添加token
    // 2. loading动画
    //
    return config
  },
  (error) => {
    console.log(error)
  }
)

instance.interceptors.response.use(
  (res) => {
    return res
  },
  (error) => {
    console.log(error)
    return error
  }
)

export function request(options: AxiosRequestConfig) {
  return instance.request(options)
}
