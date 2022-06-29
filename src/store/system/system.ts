import { Module } from 'vuex'
import { IRootState } from '../index'
import { ISystemState } from './type'

export const system: Module<ISystemState, IRootState> = {
  namespaced: true,
  state: () => {
    return {
      userManage: []
    }
  },
  mutations: {},
  actions: {}
}
