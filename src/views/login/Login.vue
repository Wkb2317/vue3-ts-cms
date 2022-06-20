// eslint-disable-next-line
<template>
  <div>{{ counter }}</div>
</template>

<script setup>
import { useStore } from 'vuex'
const store = useStore()
const counter = store.state.counter
</script>

<style lang="scss" scoped></style>
