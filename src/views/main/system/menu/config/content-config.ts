export const contentConfig = {
  title: '菜单列表',
  pageConfig: {
    rowKey: 'id',
    treeProps: { children: 'children' }
  },
  propsList: [
    { prop: 'name', label: '菜单名称', minWidth: '180px' },
    { prop: 'url', label: '菜单url', minWidth: '180px' },
    { prop: 'icon', label: '图标', minWidth: '180px' },
    { prop: 'type', label: '类型', minWidth: '180px' },
    { prop: 'permission', label: '权限', minWidth: '180px' },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '180px',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '180px',
      slotName: 'updateAt'
    },
    {
      prop: 'handler',
      label: '操作  ',
      minWidth: '180px',
      slotName: 'handler'
    }
  ],
  showFooter: false
}
