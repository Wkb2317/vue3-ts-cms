import { Module } from 'vuex'
import { IRootState } from '../index'
import { ISystemState } from './type'
import { getPageList } from '@/service/main/user'

export const system: Module<ISystemState, IRootState> = {
  namespaced: true,
  state: () => {
    return {
      userList: [],
      userCount: 0
    }
  },
  mutations: {
    changeUserList(state, payload: any) {
      state.userCount = payload.totalCount
      state.userList = payload.list
    }
  },
  actions: {
    async getListPageAction({ commit }, payload: any) {
      const res = await getPageList(payload.url, payload.data)
      commit('changeUserList', res.data)
    }
  }
}
