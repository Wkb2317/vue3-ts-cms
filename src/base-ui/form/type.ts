type FormItemType = 'input' | 'select' | 'password' | 'date-picker'

export interface IFormItem {
  filed: string
  type: FormItemType
  lable: string
  isHidden?: boolean
  rules?: any[]
  options?: any[]
  placeholder?: string
  otherOptions?: any
}

export interface IForm {
  formItems: IFormItem[]
  labelWidth?: string
  colLayout?: any
  itemStyle?: any
}
