export const contentConfig = {
  showIndex: true,
  title: '角色管理',
  propsList: [
    { prop: 'name', label: '角色', minWidth: '180px' },
    { prop: 'enable', label: '状态', minWidth: '180px', slotName: 'status' },
    { prop: 'intro', label: '简介', minWidth: '180px' },
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
  ]
}
