import { IBread } from '@/base-ui/bread'

export function pathMapBreads(menus: any[], path: string): IBread[] {
  const breadsArray: IBread[] = []
  findIdByPath(menus, path, breadsArray)
  return breadsArray
}

export function findIdByPath(
  menus: any[],
  path: string,
  breads?: IBread[]
): any {
  for (const route of menus) {
    if (route.type === 1) {
      const findMenu = findIdByPath(route.children ?? [], path)
      if (findMenu) {
        breads?.push({ name: route.name })
        breads?.push({ name: findMenu.name })
        return findMenu
      }
    } else if (route.type === 2 && route.url === path) {
      return route
    }
  }
}
