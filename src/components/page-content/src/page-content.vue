<template>
  <Table
    v-bind="contentConfig"
    :listData="listData"
    :listCount="listCount"
    v-model:page="pageInfo"
  >
    <template #add>
      <div>
        <el-button
          @click="handleAdd"
          v-if="isCreate"
          type="primary"
          icon="AddLocation"
          >新增</el-button
        >
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
        v-if="isUpdate"
        @click="handleEditor(scope)"
        type="primary"
        size="small"
        icon="Edit"
        >编辑</el-button
      >
      <el-button
        v-if="isDelete"
        @click="handleDelete(scope)"
        type="danger"
        size="small"
        icon="Delete"
        >删除</el-button
      >
    </template>
    <template
      v-for="item in propsSlotName"
      :key="item.prop"
      #[item.slotName]="scope"
    >
      <slot :name="item.slotName" :row="scope.row"></slot>
    </template>
  </Table>
</template>

<script setup lang="ts">
import {
  defineProps,
  defineEmits,
  computed,
  defineExpose,
  ref,
  watch
} from 'vue'
import { useStore } from '@/store'
import Table from '@/base-ui/table'
import { usePermissions } from '@/hooks/usePermissions'

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
const emits = defineEmits(['addBtnClick', 'editBtnClick'])

const pageInfo = ref({ currentPage: 1, pageSize: 10 })
const propsSlotName = ref([])
const store = useStore()

// 权限
const isDelete = usePermissions(props.pageName, 'delete')
const isUpdate = usePermissions(props.pageName, 'update')
const isCreate = usePermissions(props.pageName, 'create')
const isQuery = usePermissions(props.pageName, 'query')

watch(pageInfo, () => getPageData())

function getPageData(queryInfo?: any) {
  const requestPayload = {
    url: `/${props.pageName}/list`,
    data: {
      offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
      size: pageInfo.value.pageSize,
      ...queryInfo
    }
  }
  store.dispatch('system/getListPageAction', requestPayload)
}

// 获取page数据
getPageData()

const listData = computed(() =>
  store.getters['system/getPageListGetter'](props.pageName)
)
const listCount = computed(() =>
  store.getters['system/getPageCountGetter'](props.pageName)
)

// function
const handleAdd = () => {
  emits('addBtnClick')
}

const handleEditor = (scope: any) => {
  emits('editBtnClick', scope.row)
}

const handleDelete = (scope: any) => {
  console.log(scope.row)
  store.dispatch('system/deleteListPageAction', {
    pageName: props.pageName,
    id: scope.row.id
  })
}

const handleSearch = (payload: any) => {
  getPageData(payload)
}

const handleRefresh = () => {
  getPageData()
}

propsSlotName.value = props.contentConfig.propsList.filter((item: any) => {
  return !['createAt', 'updateAt', 'handler', 'status'].includes(item.slotName)
})

defineExpose({
  handleSearch,
  handleRefresh
})
</script>

<style scoped lang="scss"></style>
