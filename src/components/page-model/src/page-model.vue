<template>
  <div class="page-model">
    <el-dialog
      destroy-on-close
      v-model="dialogVisible"
      title="新建用户"
      width="30%"
    >
      <Form v-bind="modelConfig" v-model="modelValue"></Form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="cancelClick">取消</el-button>
          <el-button type="primary" @click="confirmClick">确认</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineExpose, watch } from 'vue'
import Form from '@/base-ui/form'
import { useStore } from '@/store'

const props = defineProps({
  modelConfig: {
    type: Object,
    require: true
  },
  defaultData: {
    type: Object,
    default: () => ({})
  },
  pageName: {
    type: String,
    require: true
  }
})

const store = useStore()
const dialogVisible = ref(false)
const modelValue = ref<any>({})

// 监听变化，动态赋值modelValue
watch(
  () => props.defaultData,
  (newValue) => {
    for (const item of props.modelConfig?.formItems) {
      modelValue.value[`${item.filed}`] = newValue[`${item.filed}`]
    }
  },
  { deep: true }
)

// 确认
const confirmClick = () => {
  if (Object.keys(props.defaultData).length) {
    // 编辑
    console.log('edit')
    const payload = {
      pageName: props.pageName,
      editData: { ...modelValue.value },
      id: props.defaultData.id
    }
    store.dispatch('system/editModalDataAction', payload)
  } else {
    // 新增
    console.log('add')
    const payload = {
      pageName: props.pageName,
      addData: { ...modelValue.value }
    }
    store.dispatch('system/addModalDataAction', payload)
  }
  dialogVisible.value = false
}

// 取消
const cancelClick = () => {
  dialogVisible.value = false
}

defineExpose({
  dialogVisible
})
</script>

<style scoped></style>
