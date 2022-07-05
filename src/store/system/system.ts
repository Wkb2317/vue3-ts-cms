import { Module } from 'vuex'
import { IRootState } from '../index'
import { ISystemState } from './type'
import {
  getPageList,
  deletePageList,
  addPageData,
  editPageData
} from '@/service/main/user'

export const system: Module<ISystemState, IRootState> = {
  namespaced: true,
  state: () => {
    return {
      userList: [],
      userCount: 0,
      roleList: [],
      roleCount: 0,
      goodsList: [],
      goodsCount: 0,
      menuList: [],
      menuCount: 0
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
    },
    changeGoodsList(state, payload: any) {
      state.goodsList = payload.list
    },
    changeGoodsCount(state, payload) {
      state.goodsCount = payload.totalCount
    },
    changeMenuList(state, payload: any) {
      state.menuList = payload.list
    },
    changeMenuCount(state, payload) {
      state.menuCount = payload.list.length
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
          case 'goods':
            return state.goodsList
          case 'menu':
            return state.menuList
        }
      }
    },
    getPageCountGetter(state) {
      return function (pathName: string) {
        switch (pathName) {
          case 'users':
            return state.userCount
          case 'role':
            return state.roleCount
          case 'goods':
            return state.goodsCount
          case 'menu':
            return state.menuCount
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
          break
        case '/goods/list':
          commit('changeGoodsList', res.data)
          commit('changeGoodsCount', res.data)
          break
        case '/menu/list':
          commit('changeMenuList', res.data)
          commit('changeMenuCount', res.data)
          break
      }
    },

    async deleteListPageAction({ dispatch }, payload: any) {
      await deletePageList(payload.pageName, payload.id)
      await dispatch('getListPageAction', {
        url: `/${payload.pageName}/list`,
        data: {
          offset: 0,
          size: 10
        }
      })
    },

    // 添加modal弹窗数据
    async addModalDataAction({ dispatch }, payload) {
      const { pageName, addData } = payload
      const url = `/${pageName}`
      await addPageData(url, addData)

      dispatch('getListPageAction', {
        url: `/${pageName}/list`,
        data: {
          offset: 0,
          size: 10
        }
      })
    },

    // 编辑modal弹窗数据
    async editModalDataAction({ dispatch }, payload) {
      const { pageName, editData, id } = payload
      const url = `/${pageName}/${id}`
      await editPageData(url, editData)

      dispatch('getListPageAction', {
        url: `/${pageName}/list`,
        data: {
          offset: 0,
          size: 10
        }
      })
    }
  }
}
