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
        <loginAccount />
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
  </div>
</template>

<script setup lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { UserFilled, Iphone } from '@element-plus/icons-vue'
import loginAccount from './login-account.vue'
import loginPhone from './login-phone.vue'
</script>

<style lang="scss" scoped>
.login-panel {
  height: 400px;
  width: 400px;
  text-align: center;
}
</style>
