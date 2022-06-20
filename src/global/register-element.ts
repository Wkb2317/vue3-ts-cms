import { App } from 'vue'

import { ElButton } from 'element-plus'

const comments = [ElButton]

export default function (app: App): void {
  for (const component of comments) {
    app.use(component)
    // app.component(component.name, component)
  }
}
