<template>
  <div class="avatar">
    <el-avatar
      :size="30"
      :src="'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'"
    />
    <el-dropdown>
      <span class="el-dropdown-link">
        {{ userInfo.name }}
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="handleLogout">退出登录</el-dropdown-item>
          <el-dropdown-item>系统设置</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from '@/store'
import cache from '@/utils/cache'

const router = useRouter()
const store = useStore()
const userInfo = computed(() => store.state.login.userInfo)

const handleLogout = () => {
  cache.clearCache()
  router.replace('/login')
}
</script>

<style scoped lang="scss">
.avatar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .el-dropdown-link {
    margin-left: 5px;
  }
}
</style>
