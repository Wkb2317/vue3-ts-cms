import { useStore } from '@/store'

export function usePermissions(path: string, type: string) {
  const store = useStore()
  const permissions = store.state.login.permissions
  return !!permissions.includes(`system:${path}:${type}`)
}
