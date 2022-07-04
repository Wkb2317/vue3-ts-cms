<template>
  <div>
    <Form v-bind="formConfig" v-model="formData">
      <template #footer>
        <div class="footer">
          <el-button @click="handleRefresh" class="btn" :icon="Refresh"
            >重置</el-button
          >
          <el-button
            @click="handleSearch"
            class="btn"
            type="primary"
            :icon="Search"
            >搜索</el-button
          >
        </div>
      </template>
    </Form>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref, defineEmits } from 'vue'
import { Search, Refresh } from '@element-plus/icons-vue'
import Form from '@/base-ui/form'

const props = defineProps({
  formConfig: {
    type: Object,
    require: true
  }
})

const emit = defineEmits(['handleSearch', 'handleRefresh'])

const formItem = props.formConfig?.formItems ?? []
const formOriginData: any = {}
for (const item of formItem) {
  formOriginData[item.filed] = ''
}
const formData = ref(formOriginData)

// 重置
const handleRefresh = () => {
  for (const key in formOriginData) {
    formData.value[`${key}`] = formOriginData[`${key}`]
  }
  emit('handleRefresh')
}

// 搜索
const handleSearch = () => {
  emit('handleSearch', formData.value)
}
</script>

<style scoped lang="scss">
.footer {
  text-align: end;
  padding: 0 50px 20px 0;
}
</style>
