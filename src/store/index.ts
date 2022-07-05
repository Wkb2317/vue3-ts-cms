import { createStore, Store, useStore as useVuexStore } from 'vuex'
import login from './login/login'
import { system } from './system/system'
import type { IRootState, IStoreType } from './type'
export * from './type'
import { getPageList } from '@/service/main/user'

const store = createStore<IRootState>({
  state() {
    return {
      name: '',
      age: 0,
      entireDepartment: [],
      entireRole: []
    }
  },
  mutations: {
    changeEntireDepartment(state, payload) {
      state.entireDepartment = payload
    },
    changeEntireRole(state, payload) {
      state.entireRole = payload
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

      commit('changeEntireDepartment', departmentRes.data.list)
      commit('changeEntireRole', roleRes.data.list)
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
  store.dispatch('getInitData')
}

export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export default store
