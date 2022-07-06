<template>
  <div class="user">
    <PageSearch :formConfig="formConfig"></PageSearch>
    <pageContent
      :contentConfig="contentConfig"
      :pageName="pageName"
      @addBtnClick="handleAdd"
      @editBtnClick="handleEdit"
    ></pageContent>
    <PageModel
      ref="PageModelRef"
      :pageName="pageName"
      :modelConfig="modelConfig"
      :defaultData="defaultData"
    >
      <div class="menu">
        <el-tree
          :props="props"
          show-checkbox
          @check-change="handleCheckChange"
        />
      </div>
    </PageModel>
  </div>
</template>

<script setup lang="ts">
import PageSearch from '@/base-ui/page-search'
import pageContent from '@/components/page-content/src/page-content.vue'
import PageModel from '@/components/page-model'
import { usePageModel } from '@/hooks/usePageModel'

import { formConfig } from './config/search-config'
import { contentConfig } from './config/content-config'
import { modelConfig } from './config/model-config'
import { useStore } from '@/store'

const pageName = 'role'

const { PageModelRef, handleAdd, handleEdit, defaultData } = usePageModel()

const store = useStore()
console.log(store.state.entireMenus)
</script>

<style scoped lang="scss"></style>
