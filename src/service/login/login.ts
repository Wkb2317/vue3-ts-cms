import Request from '../index'
import type { IAccount, IDataType, ILoginResult } from './type'

enum LoginApi {
  AccountLogin = '/login',
  LoginUserInfo = '/users/',
  UserMenus = '/role/'
}

export function accountLoginRequest(account: IAccount) {
  return Request.post<IDataType<ILoginResult>>({
    url: LoginApi.AccountLogin,
    data: account
  })
}

export function requestUserInfoById(id: number) {
  return Request.get<IDataType>({
    url: LoginApi.LoginUserInfo + id
  })
}

export function requestUserMenusByRoleId(id: number) {
  return Request.get<IDataType>({
    url: LoginApi.UserMenus + id + '/menu'
  })
}
