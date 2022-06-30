export const contentConfig = {
  showIndex: true,
  title: '用户列表',
  propsList: [
    { prop: 'name', label: '昵称', minWidth: '180px' },
    { prop: 'realname', label: '真实姓名', minWidth: '180px' },
    { prop: 'enable', label: '状态', minWidth: '180px', slotName: 'status' },
    { prop: 'cellphone', label: '手机号', minWidth: '180px' },
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
