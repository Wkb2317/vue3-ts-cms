import { App } from 'vue'

import {
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElLoading,
  ElTabPane,
  ElTabs
} from 'element-plus'

const components = [
  ElButton,
  ElLoading,
  ElTabPane,
  ElTabs,
  ElForm,
  ElFormItem,
  ElInput
]

export default function (app: App): void {
  for (const component of components) {
    app.use(component)
    // app.component(component.name, component)
  }
}
