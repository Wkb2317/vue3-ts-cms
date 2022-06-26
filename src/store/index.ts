import { createStore, Store, useStore as useVuexStore } from 'vuex'
import login from './login/login'
import type { IRootState, IStoreType } from './type'

const store = createStore<IRootState>({
  state() {
    return {
      name: '',
      age: 0
    }
  },
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    login
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
