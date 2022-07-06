import { createStore, Store, useStore as useVuexStore } from 'vuex'
import login from './login/login'
import { system } from './system/system'
import type { IRootState, IStoreType } from './type'
export * from './type'
import { getPageList, getMenuData } from '@/service/main/user'

const store = createStore<IRootState>({
  state() {
    return {
      name: '',
      age: 0,
      entireDepartment: [],
      entireRole: [],
      entireMenus: []
    }
  },
  mutations: {
    changeEntireDepartment(state, payload) {
      state.entireDepartment = payload
    },
    changeEntireRole(state, payload) {
      state.entireRole = payload
    },
    changeEntireMenus(state, payload) {
      state.entireMenus = payload
    }
  },
  actions: {
    async getInitData({ commit }) {
      const departmentRes = await getPageList('/department/list', {
        offset: 0,
        size: 100
      })
      const roleRes = await getPageList('/role/list', {
        offset: 0,
        size: 100
      })
      const menusRes = await getMenuData('/menu/list', {
        offset: 0,
        size: 100
      })

      commit('changeEntireDepartment', departmentRes.data.list)
      commit('changeEntireRole', roleRes.data.list)
      commit('changeEntireMenus', menusRes.data.list)
    }
  },
  getters: {},
  modules: {
    login,
    system
  }
})

// 初始化store
export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}

export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export default store
