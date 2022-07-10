<template>
  <div class="dashboard">
    <el-row class="row" :gutter="20">
      <el-col :span="7">
        <card title="分类商品数量(饼图)">
          <pieEcharts :pieData="pieData" />
        </card>
      </el-col>
      <el-col :span="10">
        <card title="不同城市商品销量">
          <mapEcharts :mapData="addressGoodsSale"></mapEcharts>
        </card>
      </el-col>
      <el-col :span="7">
        <card title="分类商品数量(玫瑰图)">
          <roseEcharts :roseData="pieData"></roseEcharts>
        </card>
      </el-col>
    </el-row>
    <el-row class="row" :gutter="20" style="margin-top: 20px">
      <el-col :span="12">
        <card title="分类商品的销量">
          <lineEcharts v-bind="categoryGoodsSale"></lineEcharts>
        </card>
      </el-col>
      <el-col :span="12">
        <card title="分类商品的收藏">
          <barEcharts v-bind="categoryGoodsFavor"></barEcharts>
        </card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useStore } from '@/store'
import card from '@/base-ui/card'
import {
  pieEcharts,
  roseEcharts,
  lineEcharts,
  barEcharts,
  mapEcharts
} from '@/components/page-echarts'
const store = useStore()
store.dispatch('dashboard/getDashboardDataAction')

const pieData = computed(() => {
  return store.state.dashboard.goodsCategoryCount.map((item: any) => {
    return { name: item.name, value: item.goodsCount }
  })
})

const categoryGoodsSale = computed(() => {
  const xData: any[] = []
  const yData: any[] = []

  store.state.dashboard.goodsCategorySale.forEach((item) => {
    xData.push(item.name)
    yData.push(item.goodsCount)
  })
  return { xData, yData }
})

const categoryGoodsFavor = computed(() => {
  const xData: any[] = []
  const yData: any[] = []

  store.state.dashboard.goodsCategoryFavor.forEach((item) => {
    xData.push(item.name)
    yData.push(item.goodsFavor)
  })
  return { xData, yData }
})

const addressGoodsSale = computed(() => {
  return store.state.dashboard.goodsAddressSale.map((item: any) => {
    return { name: item.address, value: item.count }
  })
})
</script>

<style scoped lang="scss">
.dashboard {
  width: 100%;
  height: 100%;
}
</style>
