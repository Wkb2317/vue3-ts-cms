import { IForm } from '@/base-ui/form'

export const formConfig: IForm = {
  formItems: [
    {
      filed: 'name',
      type: 'input',
      lable: '用户名',
      placeholder: '请输入用户名'
    },
    {
      filed: 'realname',
      type: 'input',
      lable: '真实姓名',
      placeholder: '真实姓名'
    },
    {
      filed: 'cellphone',
      type: 'input',
      lable: '电话号码',
      placeholder: '电话号码'
    },
    {
      filed: 'enable',
      type: 'select',
      lable: '用户状态',
      placeholder: '用户状态',
      options: [
        {
          value: '1',
          label: '启用'
        },
        {
          value: '0',
          label: '禁用'
        }
      ]
    },
    {
      filed: 'createAt',
      type: 'date-picker',
      lable: '创建时间',
      placeholder: '请选择时间',
      otherOptions: {
        type: 'daterange',
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间'
      }
    }
  ],
  labelWidth: '120px',
  itemStyle: {
    padding: '20px 10px'
  }
}
