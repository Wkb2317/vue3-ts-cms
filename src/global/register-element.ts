import { App } from 'vue'

import { ElButton, ElLoading } from 'element-plus'

const components = [ElButton, ElLoading]

export default function (app: App): void {
  for (const component of components) {
    app.use(component)
    // app.component(component.name, component)
  }
}
