<template>
  <div class="user">
    <PageSearch
      :formConfig="formConfig"
      @handleSearch="handleSearch"
      @handleRefresh="handleRefresh"
    ></PageSearch>
    <pageContent
      ref="pageContentRef"
      :contentConfig="contentConfig"
      :pageName="pageName"
      @addBtnClick="handleAdd"
      @editBtnClick="handleEdit"
    ></pageContent>
    <PageModel
      :modelConfig="modelConfig"
      ref="PageModelRef"
      :defaultData="defaultData"
    ></PageModel>
  </div>
</template>

<script setup lang="ts">
import PageSearch from '@/base-ui/page-search'
import pageContent from '@/components/page-content/src/page-content.vue'
import PageModel from '@/components/page-model'

import { formConfig } from './config/search-config'
import { contentConfig } from './config/content-config'
import { modelConfig } from './config/model-config'

import { usePageSearch } from '@/hooks/usePageSearch'
import { usePageModel } from '@/hooks/usePageModel'

const pageName = 'users'
const [pageContentRef, handleRefresh, handleSearch] = usePageSearch()

const addCallBack = () => {
  const passwordItem = modelConfig.formItems.find(
    (item: any) => item.filed === 'password'
  )
  if (passwordItem) {
    passwordItem.isHidden = false
  }
}

const editCallBack = () => {
  const passwordItem = modelConfig.formItems.find(
    (item: any) => item.filed === 'password'
  )
  if (passwordItem) {
    passwordItem.isHidden = true
  }
}

const { PageModelRef, handleAdd, handleEdit, defaultData } = usePageModel(
  addCallBack,
  editCallBack
)
</script>

<style scoped lang="scss"></style>
