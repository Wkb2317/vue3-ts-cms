<template>
  <div class="form">
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item
              v-if="!item.isHidden"
              :style="itemStyle"
              :label="item.lable"
            >
              <template v-if="item.type === 'input'">
                <el-input
                  :placeholder="item.placeholder"
                  v-model="formData[`${item.filed}`]"
                ></el-input>
              </template>
              <template v-else-if="item.type === 'password'">
                <el-input
                  show-password
                  v-model="formData[`${item.filed}`]"
                  :placeholder="item.placeholder"
                ></el-input>
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  v-model="formData[`${item.filed}`]"
                  style="width: 100%"
                  :placeholder="item.placeholder"
                >
                  <el-option
                    v-for="optionItem in item.options"
                    :key="optionItem.value"
                    :label="optionItem.label"
                    :value="optionItem.value"
                  ></el-option>
                </el-select>
              </template>
              <template v-else-if="item.type === 'date-picker'">
                <el-date-picker
                  v-model="formData[`${item.filed}`]"
                  :type="item.otherOptions.type"
                  :placeholder="item.placeholder"
                  :start-placeholder="item.otherOptions.startPlaceholder"
                  :end-placeholder="item.otherOptions.endPlaceholder"
                />
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <slot name="footer"></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, PropType, defineEmits, watch } from 'vue'
import { IFormItem } from '../type'

const emits = defineEmits(['update:modelValue'])

const props = defineProps({
  modelValue: {
    type: Object,
    require: true
  },
  formItems: {
    type: Array as PropType<IFormItem[]>,
    default: () => []
  },
  labelWidth: {
    type: String,
    default: '100px'
  },
  itemStyle: {
    type: Object,
    default: () => {
      return {
        padding: '10px 20px'
      }
    }
  },
  colLayout: {
    type: Object,
    default: () => {
      return {
        xl: 8,
        lg: 8,
        md: 12,
        sm: 24,
        xs: 24
      }
    }
  }
})

const formData = ref({ ...props.modelValue })
// watch(
//   () => props.modelValue,
//   (newValue) => {
//     formData.value = { ...newValue }
//   }
// )

watch(
  formData,
  (newValue) => {
    emits('update:modelValue', newValue)
  },
  { deep: true }
)
</script>

<style scoped></style>
