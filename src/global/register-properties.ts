import { App } from 'vue'
import { formatUtcString } from '@/utils/date-format'

export default function registerProperty(app: App) {
  app.config.globalProperties.$filters = {
    formatTime(time: string) {
      return formatUtcString(time)
    }
  }
}
