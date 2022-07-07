import { Module } from 'vuex'
import router from '@/router'
import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusByRoleId
} from '@/service/login/login'
import LocalCache from '@/utils/cache'
import { mapMenusToRoutes, mapMenusPerssions } from '@/utils/map-menus'

import type { ILoginState } from './type'
import type { IRootState } from '../type'
import type { IAccount } from '@/service/login/type'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      menus: [],
      permissions: []
    }
  },
  getters: {},
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo) {
      state.userInfo = userInfo
    },
    changeMenus(state, menus) {
      state.menus = menus
      // 路由动态注册
      const routes = mapMenusToRoutes(menus)

      const permissions = mapMenusPerssions(menus)
      state.permissions = permissions

      routes.forEach((route) => {
        router.addRoute('main', route)
      })
    }
  },
  actions: {
    async accountLoginAction({ commit, dispatch }, payload: IAccount) {
      const loginRes = await accountLoginRequest(payload)
      const { id, token } = loginRes.data

      commit('changeToken', token)
      LocalCache.setCache('token', token)

      const userInfoRes = await requestUserInfoById(id)
      const userInfo = userInfoRes.data
      commit('changeUserInfo', userInfo)
      LocalCache.setCache('userInfo', userInfo)

      const userMenusRes = await requestUserMenusByRoleId(userInfo.role.id)
      const menus = userMenusRes.data
      commit('changeMenus', menus)
      LocalCache.setCache('menus', menus)

      router.push('/main')
    },

    loadLocalLogin({ commit }) {
      const token = LocalCache.getCache('token')
      const userInfo = LocalCache.getCache('userInfo')
      const menus = LocalCache.getCache('menus')
      if (menus) commit('changeMenus', menus)
      if (token) commit('changeToken', token) // 获取token后，请求部门和角色数据

      if (userInfo) commit('changeUserInfo', userInfo)
    }
  }
}

export default loginModule
