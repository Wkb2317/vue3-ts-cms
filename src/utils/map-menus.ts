import { RouteRecordRaw } from 'vue-router'

let firstMenu: any = null

export function mapMenusToRoutes(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []

  // 1. 先默认加载所有routes
  const allRoutes: RouteRecordRaw[] = []
  const routeFiles = require.context('../router/main', true, /\.ts/)
  routeFiles.keys().forEach((key) => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const route = require('../router/main' + key.split('.')[1])
    allRoutes.push(route.default)
  })

  // 2. 根据菜单权限
  function recurseGetRoute(menus: any[]) {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => route.path === menu.url)
        if (route) {
          routes.push(route)
          if (!firstMenu) {
            firstMenu = menu
          }
        }
      } else {
        recurseGetRoute(menu.children)
      }
    }
  }

  recurseGetRoute(userMenus)
  return routes
}

export function mapMenusPerssions(userMenus: any[], permissions: any[] = []) {
  for (const menu of userMenus) {
    if (menu.permission) {
      permissions.push(menu.permission)
    } else {
      if (menu.children) {
        mapMenusPerssions(menu.children, permissions)
      }
    }
  }
  return permissions
}

export { firstMenu }
