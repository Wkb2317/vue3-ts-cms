<template>
  <div class="base-echart">
    <div ref="echartRef" :style="{ width: width, height: height }"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineProps, watch } from 'vue'
import { useEcharts } from '@/hooks/useEchart'
const props = defineProps({
  option: {
    type: Object,
    default: () => ({})
  },
  width: {
    type: String,
    default: '100%'
  },
  height: {
    type: String,
    default: '360px'
  }
})

const echartRef = ref<HTMLElement>()

onMounted(() => {
  const { setOptions } = useEcharts(echartRef.value!)
  watch(props, () => {
    setOptions(props.option)
  })
})
</script>

<style scoped lang="scss">
.base-echart {
  width: 100%;
  height: 100%;

  .echarts {
    height: 360px;
    width: 100%;
  }
}
</style>
