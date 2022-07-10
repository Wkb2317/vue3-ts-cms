import { ILoginState } from './login/type'
import { ISystemState } from './system/type'
import { IDashBoardState } from './dashboard/type'
export interface IRootState {
  name: string
  age: number
  entireDepartment: []
  entireRole: []
  entireMenus: []
}

export interface IRootWithModule {
  login: ILoginState
  system: ISystemState
  dashboard: IDashBoardState
}

export type IStoreType = IRootState & IRootWithModule
