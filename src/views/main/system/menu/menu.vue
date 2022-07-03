<template>
  <div class="menu">
    <pageContent
      :contentConfig="contentConfig"
      :pageName="pageName"
    ></pageContent>
  </div>
</template>

<script lang="ts" setup>
import pageContent from '@/components/page-content'
import { contentConfig } from './config/content-config'

const pageName = 'menu'
</script>

<style scoped></style>
