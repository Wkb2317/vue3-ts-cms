<template>
  <div class="dashboard">
    <div ref="echartsRef" class="wrapper"></div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import * as echarts from 'echarts'

const echartsRef = ref<HTMLElement>()
onMounted(() => {
  const echartsInsta = echarts.init(echartsRef.value!)
  // 绘制图表
  echartsInsta.setOption({
    title: {
      text: 'ECharts 入门示例'
    },
    tooltip: {},
    xAxis: {
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    yAxis: {},
    series: [
      {
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }
    ]
  })
})
</script>

<style scoped lang="scss">
.wrapper {
  width: 500px;
  height: 400px;
}
</style>
