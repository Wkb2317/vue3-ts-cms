<template>
  <div class="bread">
    <el-breadcrumb separator="/">
      <template v-for="item in props.breads" :key="item.name">
        <el-breadcrumb-item>{{ item.name }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { defineProps, PropType } from 'vue'
import { IBread } from '../type'

const props = defineProps({
  breads: {
    type: Array as PropType<IBread[]>,
    default: () => []
  }
})
</script>

<style scoped></style>
