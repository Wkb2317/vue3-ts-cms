import { Module } from 'vuex'
import { IDashBoardState } from './type'
import { IRootState } from '../type'
import {
  getGoodsAddressSale,
  getGoodsCategoryCount,
  getGoodsCategoryFavor,
  getGoodsCategorySale
} from '@/service/analysis/dashboard'

export const dashboard: Module<IDashBoardState, IRootState> = {
  namespaced: true,
  state() {
    return {
      goodsAddressSale: [],
      goodsCategorySale: [],
      goodsCategoryCount: [],
      goodsCategoryFavor: []
    }
  },
  mutations: {
    changeGoodsAddressSale(state, list) {
      state.goodsAddressSale = list
    },
    changeGoodsCategorySale(state, list) {
      state.goodsCategorySale = list
    },
    changeGoodsCategoryCount(state, list) {
      state.goodsCategoryCount = list
    },
    changeGoodsCategoryFavor(state, list) {
      state.goodsCategoryFavor = list
    }
  },
  actions: {
    async getDashboardDataAction({ commit }) {
      const cateGorySaleRes = await getGoodsCategorySale()
      const cateGoryCountRes = await getGoodsCategoryCount()
      const cateGoryFavorRes = await getGoodsCategoryFavor()
      const addressSaleRes = await getGoodsAddressSale()

      commit('changeGoodsAddressSale', addressSaleRes.data)
      commit('changeGoodsCategorySale', cateGorySaleRes.data)
      commit('changeGoodsCategoryCount', cateGoryCountRes.data)
      commit('changeGoodsCategoryFavor', cateGoryFavorRes.data)
    }
  }
}
