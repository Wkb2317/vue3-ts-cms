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
      :pageName="pageName"
      :modelConfig="modelConfigRef"
      ref="PageModelRef"
      :defaultData="defaultData"
    ></PageModel>
  </div>
</template>

<script setup lang="ts">
import PageSearch from '@/base-ui/page-search'
import pageContent from '@/components/page-content/src/page-content.vue'
import PageModel from '@/components/page-model'
import { useStore } from '@/store'

import { formConfig } from './config/search-config'
import { contentConfig } from './config/content-config'
import { modelConfig } from './config/model-config'

import { usePageSearch } from '@/hooks/usePageSearch'
import { usePageModel } from '@/hooks/usePageModel'
import { computed } from 'vue'

const pageName = 'users'
const [pageContentRef, handleRefresh, handleSearch] = usePageSearch()

// 处理显示密码输入框
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

// dialog显示部门，角色
const modelConfigRef = computed(() => {
  const store = useStore()
  const department = store.state.entireDepartment.map((item: any) => {
    return { label: item.name, value: item.id }
  })
  const role = store.state.entireRole.map((item: any) => {
    return { label: item.name, value: item.id }
  })

  let departmentOption = modelConfig.formItems.find(
    (item) => item.filed === 'departmentId'
  )
  let roleOption = modelConfig.formItems.find((item) => item.filed === 'roleId')
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  departmentOption!.options = department
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  roleOption!.options = role

  return modelConfig
})
</script>

<style scoped lang="scss"></style>
