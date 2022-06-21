// service 统一出口
import Request from './request'
import { BASE_URL } from './request/config'

const kbRequest = new Request({
  baseURL: BASE_URL,
  timeout: 1000 * 10,
  interceptors: {
    requestInterceptor: (config) => {
      const token = 'aaa'
      if (token) {
        if (config.headers) {
          config.headers.Authorization = token
        }
      }
      return config
    },
    requestInterceptorCatch: (error) => {
      console.log(error)
    },
    responseInterceptor: (res) => {
      return res.data
    },
    responseInterceptorCatch: (error) => {
      console.log(error)
    }
  }
})

export default kbRequest
