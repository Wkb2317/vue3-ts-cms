import { IForm } from '@/base-ui/form'

export const modelConfig: IForm = {
  formItems: [
    {
      filed: 'name',
      type: 'input',
      lable: '角色名',
      placeholder: '请输入角色名'
    },
    {
      filed: 'intro',
      type: 'input',
      lable: '角色介绍',
      placeholder: '请输入角色介绍'
    }
  ],
  labelWidth: '80px',
  itemStyle: {
    padding: '10px 10px'
  },
  colLayout: {}
}
