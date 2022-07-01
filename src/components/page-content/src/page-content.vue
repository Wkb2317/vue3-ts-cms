<template>
  <Table v-bind="contentConfig" :listData="listData">
    <template #add>
      <div>
        <el-button type="primary" icon="AddLocation">新增</el-button>
        <el-button icon="Refresh" />
      </div>
    </template>
    <template #status="scope">
      <el-tag v-if="scope.row.enable" class="ml-2" type="success">启用</el-tag>
      <el-tag v-else class="ml-2" type="danger">禁用</el-tag>
    </template>
    <template #createAt="scope">
      {{ $filters.formatTime(scope.row.createAt) }}
    </template>
    <template #updateAt="scope">
      {{ $filters.formatTime(scope.row.createAt) }}
    </template>
    <template #handler="scope">
      <el-button
        @click="handleEditor(scope)"
        type="primary"
        size="small"
        icon="Edit"
        >编辑</el-button
      >
      <el-button
        @click="handleDelete(scope)"
        type="danger"
        size="small"
        icon="Delete"
        >删除</el-button
      >
    </template>
  </Table>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue'
import { useStore } from '@/store'
import Table from '@/base-ui/table'

const props = defineProps({
  contentConfig: {
    type: Object,
    default: () => ({})
  },
  pageName: {
    type: String,
    default: ''
  }
})

const store = useStore()

const requestPayload = {
  url: `/${props.pageName}/list`,
  data: {
    offset: 0,
    size: 10
  }
}
store.dispatch('system/getListPageAction', requestPayload)

const listData = computed(() => store.state.system.userList)

const handleEditor = (scope: any) => {
  console.log(scope)
}

const handleDelete = (scope: any) => {
  console.log(scope)
}
</script>

<style scoped></style>
