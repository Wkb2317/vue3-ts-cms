<template>
  <div class="user">
    <PageSearch :formConfig="formConfig"></PageSearch>
    <pageContent
      :contentConfig="contentConfig"
      :listData="userList"
    ></pageContent>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
// import { Delete, Edit, AddLocation, Refresh } from '@element-plus/icons-vue'
import { useStore } from '@/store'
import { formConfig } from '@/views/main/system/user/config/search-config'
import { contentConfig } from '@/views/main/system/user/config/content-config'
import PageSearch from '@/base-ui/page-search'
import pageContent from '@/components/page-content/src/page-content.vue'

const store = useStore()

const requestPayload = {
  url: '/users/list',
  data: {
    offset: 0,
    size: 10
  }
}
store.dispatch('system/getListPageAction', requestPayload)

const userList = computed(() => store.state.system.userList)
</script>

<style scoped lang="scss"></style>
