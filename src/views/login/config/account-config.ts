const rules = {
  name: [
    { required: true, message: '请输入账户', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{3,8}$/,
      message: '账户需要3到8位',
      trigger: 'blur'
    }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: '账密码需要5到10位',
      trigger: 'blur'
    }
  ]
}

export { rules }
