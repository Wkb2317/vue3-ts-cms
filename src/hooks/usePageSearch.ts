import { ref } from 'vue'
import pageContent from '@/components/page-content'

export function usePageSearch() {
  const pageContentRef = ref<InstanceType<typeof pageContent>>()

  const handleSearch = (payload: any) => {
    pageContentRef.value?.handleSearch(payload)
  }

  const handleRefresh = () => {
    pageContentRef.value?.handleRefresh()
  }

  return [pageContentRef, handleRefresh, handleSearch]
}
