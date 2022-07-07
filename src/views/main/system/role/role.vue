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
      :otherData="otherData"
    >
      <div class="menu">
        <el-tree
          ref="treeRef"
          :props="prop"
          :data="treeData"
          show-checkbox
          node-key="id"
          @check-change="handleCheckChange"
        />
      </div>
    </PageModel>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch, nextTick } from 'vue'
import { ElTree } from 'element-plus'
import { TreeKey } from 'element-plus/es/components/tree/src/tree.type'

import PageSearch from '@/base-ui/page-search'
import pageContent from '@/components/page-content/src/page-content.vue'
import PageModel from '@/components/page-model'
import { usePageModel } from '@/hooks/usePageModel'
import { useStore } from '@/store'
import { mapMenusGetId } from '@/utils/map-menus'

import { formConfig } from './config/search-config'
import { contentConfig } from './config/content-config'
import { modelConfig } from './config/model-config'

const pageName = 'role'

const { PageModelRef, handleAdd, handleEdit, defaultData } = usePageModel()

const store = useStore()
const treeRef = ref<InstanceType<typeof ElTree>>()

const prop = {
  label: 'name',
  children: 'children'
}
const treeData = computed(() => store.state.entireMenus)
// 菜单数组
const otherData = ref<TreeKey[]>([])

const handleCheckChange = () => {
  otherData.value = treeRef.value?.getCheckedKeys() || []
}

watch(defaultData, () => {
  // 点编辑的时候显示角色对应的菜单权限
  const menuList = defaultData.value.menuList
  if (menuList) {
    const checkedKeys = mapMenusGetId(menuList)

    nextTick(() => {
      treeRef.value?.setCheckedKeys(checkedKeys, false)
    })
  }
})
</script>

<style scoped lang="scss"></style>
