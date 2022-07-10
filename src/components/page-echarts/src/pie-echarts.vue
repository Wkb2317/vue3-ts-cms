<template>
  <echartVue :option="option" />
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue'
import echartVue from '@/base-ui/echart/src/echart.vue'

const props = defineProps({
  pieData: {
    type: Array
  }
})

const option = computed(() => ({
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'horizontal',
    left: 'left'
  },
  series: [
    {
      type: 'pie',
      radius: '50%',
      data: props.pieData,
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
}))
</script>

<style scoped></style>
