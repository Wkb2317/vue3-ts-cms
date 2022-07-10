<template>
  <div class="card">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>{{ title }}</span>
        </div>
      </template>
      <slot></slot>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  title: {
    type: String,
    default: ''
  }
})
</script>

<style scoped lang="scss">
.card {
  height: 100%;
  width: 100%;

  // ::v-deep .el-card {
  //   height: 100%;

  //   .el-card__body {
  //     height: calc(100% - 100px);
  //   }
  // }
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
