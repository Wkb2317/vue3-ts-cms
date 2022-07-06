import { IDataType } from './type'
import Request from '../index'

export function getPageList(url: string, data: any) {
  return Request.post<IDataType>({
    url,
    data
  })
}

export function deletePageList(url: string, id: any) {
  return Request.delete<IDataType>({
    url: url + `/${id}`
  })
}

export function addPageData(url: string, data: any) {
  return Request.post({
    url,
    data
  })
}

export function editPageData(url: string, data: any) {
  return Request.patch({
    url,
    data
  })
}

export function getMenuData(url: string, data: any) {
  return Request.get({
    url,
    data
  })
}
