import type { AxiosRequestConfig, AxiosResponse } from 'axios'

interface RequestInterceptor {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: any) => any
  responseInterceptorCatch?: (error: any) => any
}

// 扩展interceptors字段
interface kbRequestConfig extends AxiosRequestConfig {
  interceptors?: RequestInterceptor
  showLoading?: boolean
}

export { RequestInterceptor, kbRequestConfig }
