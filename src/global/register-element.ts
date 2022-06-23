import { App } from 'vue'

import {
  ElButton,
  ElCheckbox,
  ElForm,
  ElFormItem,
  ElInput,
  ElLink,
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
  ElInput,
  ElCheckbox,
  ElLink
]

export default function (app: App): void {
  for (const component of components) {
    app.use(component)
    // app.component(component.name, component)
  }
}
