<template>
  <div class="user">
    <PageSearch
      :formConfig="formConfig"
      @handleSearch="handleSearch"
      @handleRefresh="handleRefresh"
    ></PageSearch>
    <pageContent
      ref="pageContentRef"
      :contentConfig="contentConfig"
      :pageName="pageName"
    ></pageContent>
  </div>
</template>

<script setup lang="ts">
import { formConfig } from '@/views/main/system/user/config/search-config'
import { contentConfig } from '@/views/main/system/user/config/content-config'
import PageSearch from '@/base-ui/page-search'
import pageContent from '@/components/page-content/src/page-content.vue'
import { usePageSearch } from '@/hooks/usePageSearch'

const pageName = 'users'
const [pageContentRef, handleRefresh, handleSearch] = usePageSearch()
</script>

<style scoped lang="scss"></style>
