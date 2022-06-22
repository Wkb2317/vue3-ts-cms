<template>
  <el-form
    :model="loginInfo"
    :rules="rules"
    label-width="80px"
    class="account"
    status-icon
  >
    <el-form-item label="账号" prop="name">
      <el-input v-model="loginInfo.name" size="large" autofocus />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="loginInfo.password" size="large" />
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { rules } from '../config/account-config'

interface ILoginInfo {
  name: string
  password: string
}

const loginInfo: ILoginInfo = reactive({
  name: '',
  password: ''
})
</script>

<style scoped lang="scss">
.account {
  margin-top: 20px;
}
</style>
