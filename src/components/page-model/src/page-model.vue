<template>
  <div class="page-model">
    <el-dialog
      destroy-on-close
      v-model="dialogVisible"
      title="新建用户"
      width="30%"
    >
      <Form v-bind="modelConfig" :modelValue="modelValue"></Form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="dialogVisible = false"
            >确认</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineExpose, watch } from 'vue'
import Form from '@/base-ui/form'

const props = defineProps({
  modelConfig: {
    type: Object,
    require: true
  },
  defaultData: {
    type: Object,
    default: () => ({})
  }
})

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

defineExpose({
  dialogVisible
})
</script>

<style scoped></style>
