<template>
  <div class="table">
    <div class="header">
      <h2>{{ title }}</h2>
      <slot name="add"></slot>
    </div>

    <el-table :data="listData" border stripe style="width: 100%">
      <el-table-column
        v-if="showIndex"
        type="index"
        width="80px"
        label="序号"
        align="center"
      ></el-table-column>
      <template v-for="item in propsList" :key="item.prop">
        <el-table-column
          align="center"
          :prop="item.prop"
          :label="item.label"
          :min-width="item.minWidth"
        >
          <template #default="scope">
            <slot :name="item.slotName" :row="scope.row">
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
  },
  showIndex: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: '默认标题'
  }
})
</script>

<style scoped lang="scss">
.table {
  border-top: 20px solid #f5f5f5;
  padding: 20px;
}

.header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
