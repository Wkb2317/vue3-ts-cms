import { ref } from 'vue'
import PageModel from '@/components/page-model'

type callBackFn = () => void

export function usePageModel(
  addCallBack?: callBackFn,
  editCallBack?: callBackFn
) {
  const PageModelRef = ref<InstanceType<typeof PageModel>>()
  const defaultData = ref<any>({})

  const handleAdd = () => {
    if (PageModelRef.value) {
      addCallBack && addCallBack()
      defaultData.value = {}
      PageModelRef.value.dialogVisible = true
    }
  }

  const handleEdit = (row: any) => {
    if (PageModelRef.value) {
      editCallBack && editCallBack()
      defaultData.value = { ...row }
      PageModelRef.value.dialogVisible = true
    }
  }

  return { handleAdd, handleEdit, PageModelRef, defaultData }
}
