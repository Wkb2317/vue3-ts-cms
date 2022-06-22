import type { AxiosRequestConfig, AxiosResponse } from 'axios'

interface RequestInterceptor<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

// 扩展interceptors字段
interface kbRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: RequestInterceptor<T>
  showLoading?: boolean
}

export { RequestInterceptor, kbRequestConfig }
