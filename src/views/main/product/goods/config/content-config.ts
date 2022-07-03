export const contentConfig = {
  showIndex: true,
  title: '商品列表',
  propsList: [
    { prop: 'name', label: '标题', minWidth: '180px' },
    { prop: 'imgUrl', label: '图片', minWidth: '180px', slotName: 'imgUrl' },
    { prop: 'enable', label: '状态', minWidth: '180px', slotName: 'status' },
    {
      prop: 'oldPrice',
      label: '原价格',
      minWidth: '100px',
      slotName: 'oldPrice'
    },
    {
      prop: 'newPrice',
      label: '现价格',
      minWidth: '100px',
      slotName: 'newPrice'
    },
    { prop: 'address', label: '地址', minWidth: '100px' },
    { prop: 'favorCount', label: '点赞量', minWidth: '100px' },
    { prop: 'saleCount', label: '售出量', minWidth: '100px' },
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
