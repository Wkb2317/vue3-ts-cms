<template>
  <div class="nav-header">
    <el-icon class="icon" :size="30" @click="toggleCollaps">
      <Fold v-if="props.collaps" />
      <Expand v-else />
    </el-icon>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, defineProps } from 'vue'
import { Expand, Fold } from '@element-plus/icons-vue'

const emit = defineEmits(['changeCollaps'])
const props = defineProps({
  collaps: {
    type: Boolean,
    defaule: false
  }
})

const toggleCollaps = () => {
  emit('changeCollaps')
}
</script>

<style scoped lang="scss">
.nav-header {
  .icon {
    :hover {
      cursor: pointer;
    }
  }
}
</style>
