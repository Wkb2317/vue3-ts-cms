<template>
  <echartVue :option="option" />
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue'
import echartVue from '@/base-ui/echart/src/echart.vue'

const props = defineProps({
  yData: {
    type: Array
  },
  xData: {
    type: Array
  }
})

const option = computed(() => ({
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: props.xData
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: props.yData,
      type: 'line',
      areaStyle: {}
    }
  ]
}))
</script>

<style scoped></style>
