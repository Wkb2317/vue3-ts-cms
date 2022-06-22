<template>
  <el-form
    :model="loginInfo"
    :rules="rules"
    label-width="80px"
    class="phone"
    status-icon
  >
    <el-form-item label="手机" prop="phone">
      <el-input v-model="loginInfo.phone" size="large" autofocus />
    </el-form-item>
    <el-form-item label="验证码" prop="code">
      <div class="get-code">
        <el-input v-model="loginInfo.code" size="large" />
        <el-button type="primary" class="get-btn" size="large"
          >获取验证码</el-button
        >
      </div>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { rules } from '../config/phone-config'

interface ILoginInfo {
  phone: string
  code: string
}

const loginInfo: ILoginInfo = reactive({
  phone: '',
  code: ''
})
</script>

<style scoped lang="scss">
.phone {
  margin-top: 20px;

  .get-code {
    display: flex;

    .get-btn {
      margin-left: 8px;
    }
  }
}
</style>
