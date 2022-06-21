import axios from 'axios'
import { ElLoading } from 'element-plus'
import type { AxiosInstance } from 'axios'
import type { RequestInterceptor, kbRequestConfig } from './type'
import type { LoadingInstance } from 'element-plus/lib/components/loading/src/loading'

//单独引入loading 样式
import 'element-plus/theme-chalk/el-loading.css'

class Request {
  instance: AxiosInstance
  interceptors?: RequestInterceptor
  loading?: LoadingInstance
  showLoading?: boolean = true

  constructor(config: kbRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors

    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    this.instance.interceptors.request.use((config) => {
      if (this.showLoading) {
        this.loading = ElLoading.service({
          lock: true,
          text: 'Loading',
          fullscreen: true,
          background: 'rgba(0, 0, 0, 0.5)'
        })
      }
      return config
    })

    this.instance.interceptors.response.use(
      (res) => {
        const data = res.data
        if (data.code === '-1001') {
          console.log('1001')
        } else {
          this.loading?.close()
          return data
        }
      },
      (error) => {
        return error
      }
    )
  }

  request<T>(config: kbRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }

      if (config.showLoading === false) {
        this.showLoading = false
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }

          this.showLoading = true
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  get<T>(config: kbRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'get' })
  }

  post<T>(config: kbRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'post' })
  }

  delete<T>(config: kbRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'delete' })
  }
}

export default Request
