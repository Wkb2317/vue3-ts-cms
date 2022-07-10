import * as echarts from 'echarts'
import china from '@/base-ui/echart/data/china.json'

echarts.registerMap('china', china)
export function useEcharts(echartRef: HTMLElement) {
  const echartInstance = echarts.init(echartRef)

  const setOptions = (options: any) => {
    echartInstance.setOption(options)
  }

  const updateSize = () => {
    echartInstance.resize()
  }

  window.addEventListener('resize', () => {
    echartInstance.resize()
  })

  return {
    echartInstance,
    setOptions,
    updateSize
  }
}
