import { ILoginState } from './login/type'
import { ISystemState } from './system/type'
export interface IRootState {
  name: string
  age: number
  entireDepartment: []
  entireRole: []
}

export interface IRootWithModule {
  login: ILoginState
  system: ISystemState
}

export type IStoreType = IRootState & IRootWithModule
