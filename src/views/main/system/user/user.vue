<template>
  <div class="user">
    <PageSearch :formConfig="formConfig"></PageSearch>
  </div>
</template>

<script setup lang="ts">
import PageSearch from '@/base-ui/page-search'
import formConfig from './config/search-config'
</script>

<style scoped lang="scss"></style>
