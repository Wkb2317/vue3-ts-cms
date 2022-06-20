// eslint-disable-next-line
<template>
  <div>
    {{ counter }}
    <el-button type="primary">login</el-button>
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'
import { BASE_URL } from '@/global/config'

const store = useStore()

const counter = store.state.counter

console.log(process.env.VUE_APP_BASE_URL)
console.log(BASE_URL)
</script>

<style lang="scss" scoped></style>
