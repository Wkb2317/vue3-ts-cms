import Request from '../index'

enum DashboardApi {
  goodsCategoryCount = '/goods/category/count',
  goodsCategorySale = '/goods/category/Sale',
  goodsCategoryFavor = '/goods/category/favor',
  goodsAddressSale = '/goods/address/sale'
}

export function getGoodsCategoryCount() {
  return Request.get({
    url: DashboardApi.goodsCategoryCount,
    showLoading: false
  })
}

export function getGoodsCategorySale() {
  return Request.get({
    url: DashboardApi.goodsCategorySale,
    showLoading: false
  })
}

export function getGoodsCategoryFavor() {
  return Request.get({
    url: DashboardApi.goodsCategoryFavor,
    showLoading: false
  })
}

export function getGoodsAddressSale() {
  return Request.get({
    url: DashboardApi.goodsAddressSale
  })
}
