<template>
  <div class="login-panel">
    <h2>后台管理系统</h2>
    <el-tabs stretch type="border-card" class="demo-tabs">
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon>
              <UserFilled />
            </el-icon>
            <span>账号登录</span>
          </span>
        </template>
        <loginAccount ref="loginAccountRef" />
      </el-tab-pane>
      <el-tab-pane label="Config"
        ><template #label>
          <span class="custom-tabs-label">
            <el-icon>
              <Iphone />
            </el-icon>
            <span>手机登录</span>
          </span>
        </template>
        <loginPhone></loginPhone>
      </el-tab-pane>
    </el-tabs>

    <div class="control">
      <el-checkbox v-model="isRemember">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>

    <el-button
      @click="handleLoginClick"
      class="login-btn"
      size="large"
      type="primary"
      >立即登录</el-button
    >
  </div>
</template>

<script setup lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { UserFilled, Iphone } from '@element-plus/icons-vue'
import loginAccount from './login-account.vue'
import loginPhone from './login-phone.vue'

const isRemember = ref(true)
const loginAccountRef = ref<InstanceType<typeof loginAccount>>()

const handleLoginClick = () => {
  loginAccountRef.value?.login()
}
</script>

<style lang="scss" scoped>
.login-panel {
  height: 400px;
  width: 400px;
  text-align: center;

  .control {
    display: flex;
    justify-content: space-between;
  }

  .login-btn {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
