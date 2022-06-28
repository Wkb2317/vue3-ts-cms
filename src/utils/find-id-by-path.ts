export function findIdByPath(menus: any[], path: string): any {
  for (const route of menus) {
    if (route.type === 1) {
      const findMenu = findIdByPath(route.children ?? [], path)
      if (findMenu) {
        return findMenu
      }
    } else if (route.type === 2 && route.url === path) {
      return route
    }
  }
}
