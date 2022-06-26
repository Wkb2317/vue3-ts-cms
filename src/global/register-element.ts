import { App } from 'vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import {
  ElAside,
  ElButton,
  ElCheckbox,
  ElContainer,
  ElForm,
  ElFormItem,
  ElInput,
  ElLink,
  ElLoading,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElSubMenu,
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
  ElLink,
  ElContainer,
  ElAside,
  ElMain,
  ElMenu,
  ElSubMenu,
  ElMenuItem
]

export default function (app: App): void {
  for (const component of components) {
    app.use(component)
    // app.component(component.name, component)
  }

  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
}
