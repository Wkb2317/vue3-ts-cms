import { Module } from 'vuex'
import router from '@/router'
import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusByRoleId
} from '@/service/login/login'
import LocalCache from '@/utils/cache'

import type { ILoginState } from './type'
import type { IRootState } from '../type'
import type { IAccount } from '@/service/login/type'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      menus: []
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
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
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
    }
  }
}

export default loginModule
