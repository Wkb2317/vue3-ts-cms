<template>
  <div class="table">
    <el-table :data="listData" border stripe style="width: 100%">
      <template v-for="item in propsList" :key="item.prop">
        <el-table-column
          align="center"
          :prop="item.prop"
          :label="item.label"
          :min-width="item.minWidth"
        >
          <template #default="scope">
            <slot :name="item.slotName" :row="scope">
              {{ scope.row[item.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
defineProps({
  listData: {
    type: Array,
    default: () => []
  },
  propsList: {
    type: Array,
    default: () => []
  }
})
</script>

<style scoped lang="scss">
.table {
  border-top: 20px solid #f5f5f5;
  padding: 20px;
}
</style>
