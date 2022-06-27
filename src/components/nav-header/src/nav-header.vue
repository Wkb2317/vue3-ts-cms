<template>
  <div class="nav-header">
    <div class="header-left">
      <el-icon class="icon" :size="30" @click="toggleCollaps">
        <Fold v-if="props.collaps" />
        <Expand v-else />
      </el-icon>
    </div>
    <div class="header-right">
      <userAvatar></userAvatar>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, defineProps } from 'vue'
import { Expand, Fold } from '@element-plus/icons-vue'
import userAvatar from './user-avatar.vue'

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
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .icon {
    :hover {
      cursor: pointer;
    }
  }

  .header-right {
  }
}
</style>
