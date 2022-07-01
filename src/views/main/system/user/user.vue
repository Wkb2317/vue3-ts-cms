<template>
  <div class="user">
    <PageSearch :formConfig="formConfig"></PageSearch>
    <pageContent
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

const pageName = 'users'
</script>

<style scoped lang="scss"></style>
