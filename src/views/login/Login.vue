// eslint-disable-next-line
<template>
  <div>
    {{ counter }}
    <el-button type="primary">login</el-button>
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'
// import { BASE_URL } from '@/global/config'
import kbRequest from '@/service'
const store = useStore()

const counter = store.state.counter

interface ResData {
  data: any
  returncode: string
  status: boolean
}

kbRequest
  .request<ResData>({
    url: '/home/multidata',
    method: 'get',
    showLoading: true
  })
  .then((res) => {
    console.log(res)
  })
</script>

<style lang="scss" scoped></style>
