<template>
  <div class="user">
    <PageSearch :formConfig="formConfig"></PageSearch>
    <Table :listData="userList" :propsList="propsList">
      <template #status="row">
        {{ row.enable ? '启用' : '禁止' }}
      </template>
    </Table>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from '@/store'
import PageSearch from '@/base-ui/page-search'
import Table from '@/base-ui/table'
import formConfig from './config/search-config'

const store = useStore()

const requestPayload = {
  url: '/users/list',
  data: {
    offset: 0,
    size: 10
    // name: 'w',
    // cellphone: 4
  }
}
store.dispatch('system/getListPageAction', requestPayload)

const userList = computed(() => store.state.system.userList)
const propsList = [
  { prop: 'name', label: '昵称', minWidth: '180px' },
  { prop: 'realname', label: '真实姓名', minWidth: '180px' },
  { prop: 'enable', label: '状态', minWidth: '180px', slotName: 'status' },
  { prop: 'cellphone', label: '手机号', minWidth: '180px' },
  { prop: 'createAt', label: '创建时间', minWidth: '180px' },
  { prop: 'updateAt', label: '更新时间', minWidth: '180px' }
]
</script>

<style scoped lang="scss"></style>
