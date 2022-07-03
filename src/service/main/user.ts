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
