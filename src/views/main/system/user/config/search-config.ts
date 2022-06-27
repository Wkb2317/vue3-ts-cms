import { IForm } from '@/base-ui/form'
const formConfig: IForm = {
  formItems: [
    {
      type: 'input',
      lable: '用户名',
      placeholder: '请输入用户名'
    },
    {
      type: 'password',
      lable: '密码',
      placeholder: '请输入密码'
    },
    {
      type: 'select',
      lable: '选择爱好',
      placeholder: '请选择爱好',
      options: [
        {
          value: 'coder',
          label: '敲代码'
        },
        {
          value: 'game',
          label: '玩游戏'
        }
      ]
    },
    {
      type: 'date-picker',
      lable: '时间',
      placeholder: '请选择时间',
      otherOptions: {
        type: 'date',
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

export default formConfig
