<template>
  <div class="table">
    <div class="header">
      <h2>{{ title }}</h2>
      <slot name="add"></slot>
    </div>

    <el-table
      v-bind="pageConfig"
      :data="listData"
      border
      stripe
      style="width: 100%"
    >
      <el-table-column
        v-if="showIndex"
        type="index"
        width="80px"
        label="序号"
        align="center"
      ></el-table-column>
      <template v-for="item in propsList" :key="item.prop">
        <el-table-column
          show-overflow-tooltip
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

    <slot name="footer">
      <div class="footer" v-if="showFooter">
        <el-pagination
          :currentPage="page.currentPage"
          :page-size="page.pageSize"
          :page-sizes="[10, 20, 30]"
          layout="total, sizes, prev, pager, next, jumper"
          :total="listCount"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </slot>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
const props = defineProps({
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
  },
  listCount: {
    type: Number,
    default: 0
  },
  page: {
    type: Object,
    default: () => ({ currentPage: 0, pageSize: 10 })
  },
  pageConfig: {
    type: Object,
    default: () => ({})
  },
  showFooter: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['update:page'])

const handleSizeChange = (pageSize: any) => {
  emit('update:page', { pageSize, currentPage: props.page.currentPage })
}

const handleCurrentChange = (currentPage: any) => {
  emit('update:page', { pageSize: props.page.pageSize, currentPage })
}
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

.footer {
  width: 100%;
  margin-top: 20px;
  text-align: center;
  display: flex;
  justify-content: center;
}
</style>
