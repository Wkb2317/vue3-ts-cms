<template>
  <div class="user">
    <div>
      <Form v-bind="formConfig"></Form>
    </div>
  </div>
</template>

<script setup lang="ts">
import {} from 'vue'
import Form from '@/base-ui/form'
import formConfig from './config/search-config'
</script>

<style scoped></style>
