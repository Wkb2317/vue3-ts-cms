<template>
  <div>
    <Form v-bind="formConfig" v-model="formData">
      <template #footer>
        <div class="footer">
          <el-button class="btn" :icon="Refresh">重置</el-button>
          <el-button class="btn" type="primary" :icon="Search">搜索</el-button>
        </div>
      </template>
    </Form>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue'
import { Search, Refresh } from '@element-plus/icons-vue'
import Form from '@/base-ui/form'

defineProps({
  formConfig: {
    type: Object,
    require: true
  }
})

const formData = ref({
  name: '',
  password: '',
  hooby: '',
  time: ''
})
</script>

<style scoped lang="scss">
.footer {
  text-align: end;
  padding: 0 50px 20px 0;
}
</style>
