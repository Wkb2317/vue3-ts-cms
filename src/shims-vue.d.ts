/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare const VUE_APP_BASE_URL: string
// declare const BASE_URL: string

declare module '*.json'
