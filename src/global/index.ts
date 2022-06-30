import { App } from 'vue'
import registerElement from './register-element'
import registerProperty from './register-properties'

export function registerApp(app: App): void {
  registerElement(app)
  registerProperty(app)
}
