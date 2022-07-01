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
import { formConfig } from './config/search-config'
import { contentConfig } from './config/content-config'
import PageSearch from '@/base-ui/page-search'
import pageContent from '@/components/page-content/src/page-content.vue'

const pageName = 'role'
</script>

<style scoped lang="scss"></style>
