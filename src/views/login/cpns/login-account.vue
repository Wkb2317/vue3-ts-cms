<template>
  <el-form
    ref="formRef"
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
      <el-input v-model="loginInfo.password" show-password size="large" />
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { reactive, ref, defineExpose } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import type { ElForm, FormInstance, FormRules } from 'element-plus'
import { rules } from '../config/account-config'
import localCache from '@/utils/cache'

const store = useStore()
const router = useRouter()
const loginInfo = reactive({
  name: localCache.getCache('name') ?? '',
  password: localCache.getCache('password') ?? ''
})
const formRef = ref<InstanceType<typeof ElForm>>()

const login = (isRemember: boolean) => {
  formRef.value?.validate((vali) => {
    if (vali) {
      // 1. 是否记住密码
      if (isRemember) {
        localCache.setCache('name', loginInfo.name)
        localCache.setCache('password', loginInfo.password)
      } else {
        localCache.deleteCache('name')
        localCache.deleteCache('password')
      }
      store.dispatch('login/accountLoginAction', loginInfo)
    } else {
      console.log('校验失败')
    }
  })
}

defineExpose({
  login
})
</script>

<style scoped lang="scss">
.account {
  margin-top: 20px;
}
</style>
