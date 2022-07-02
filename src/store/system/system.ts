import { Module } from 'vuex'
import { IRootState } from '../index'
import { ISystemState } from './type'
import { getPageList } from '@/service/main/user'

export const system: Module<ISystemState, IRootState> = {
  namespaced: true,
  state: () => {
    return {
      userList: [],
      userCount: 0,
      roleList: [],
      roleCount: 0
    }
  },
  mutations: {
    changeUserList(state, payload: any) {
      state.userList = payload.list
    },
    changeUserCount(state, payload) {
      state.userCount = payload.totalCount
    },
    changeRoleList(state, payload: any) {
      state.roleList = payload.list
    },
    changeRoleCount(state, payload) {
      state.roleCount = payload.totalCount
    }
  },
  getters: {
    getPageListGetter(state) {
      return function (pathName: string) {
        switch (pathName) {
          case 'users':
            return state.userList
          case 'role':
            return state.roleList
        }
      }
    }
  },
  actions: {
    async getListPageAction({ commit }, payload: any) {
      const res = await getPageList(payload.url, payload.data)
      switch (payload.url) {
        case '/users/list':
          commit('changeUserList', res.data)
          commit('changeUserCount', res.data)
          break
        case '/role/list':
          commit('changeRoleList', res.data)
          commit('changeRoleCount', res.data)
      }
    }
  }
}
