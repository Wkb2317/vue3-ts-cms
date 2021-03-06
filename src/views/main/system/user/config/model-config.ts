import { IForm } from '@/base-ui/form'

export const modelConfig: IForm = {
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
      filed: 'password',
      type: 'password',
      lable: '密码',
      placeholder: '密码',
      isHidden: false
    },
    {
      filed: 'cellphone',
      type: 'input',
      lable: '电话号码',
      placeholder: '电话号码'
    },
    {
      filed: 'departmentId',
      type: 'select',
      lable: '部门',
      placeholder: '请选择部门',
      options: []
    },
    {
      filed: 'roleId',
      type: 'select',
      lable: '角色',
      placeholder: '请选择角色',
      options: []
    }
  ],
  labelWidth: '80px',
  itemStyle: {
    padding: '10px 10px'
  },
  colLayout: {}
}
