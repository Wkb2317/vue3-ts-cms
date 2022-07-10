<template>
  <echartVue :option="option" />
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue'
import echartVue from '@/base-ui/echart/src/echart.vue'

const props = defineProps({
  roseData: {
    type: Array
  }
})

const option = computed(() => ({
  tooltip: {
    trigger: 'item'
  },
  series: [
    {
      type: 'pie',
      data: props.roseData,
      radius: [10, 100],
      center: ['50%', '50%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 8
      },
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
