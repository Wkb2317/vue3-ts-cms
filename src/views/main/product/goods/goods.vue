<template>
  <div class="goods">
    <PageSearch
      @handleSearch="handleSearch"
      @handleRefresh="handleRefresh"
    ></PageSearch>
    <pageContent
      ref="pageContentRef"
      :contentConfig="contentConfig"
      pageName="goods"
    >
      <template #imgUrl="scope">
        <el-image
          style="width: 100px; height: 100px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
          :initial-index="4"
          fit="cover"
          preview-teleported
        />
      </template>
      <template #oldPrice="scope">
        {{ '￥' + scope.row.oldPrice }}
      </template>
      <template #newPrice="scope">
        {{ '￥' + scope.row.newPrice }}
      </template>
    </pageContent>
  </div>
</template>

<script lang="ts" setup>
import PageSearch from '@/base-ui/page-search'
import pageContent from '@/components/page-content'
import { contentConfig } from './config/content-config'
import { usePageSearch } from '@/hooks/usePageSearch'

const [pageContentRef, handleRefresh, handleSearch] = usePageSearch()
</script>

<style scoped></style>
