<template>
  <div class="nav-header">
    <div class="header-left">
      <el-icon class="icon" :size="30" @click="toggleCollaps">
        <Fold v-if="props.collaps" />
        <Expand v-else />
      </el-icon>
      <navBread :breads="breads" class="bread"></navBread>
    </div>
    <div class="header-right">
      <userAvatar></userAvatar>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, defineProps, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from '@/store'
import { Expand, Fold } from '@element-plus/icons-vue'
import userAvatar from './user-avatar.vue'
import navBread from '@/base-ui/bread'
import { pathMapBreads } from '@/utils/find-id-by-path'

const emit = defineEmits(['changeCollaps'])
const props = defineProps({
  collaps: {
    type: Boolean,
    defaule: false
  }
})

const breads = computed(() => {
  const store = useStore()
  const route = useRoute()
  return pathMapBreads(store.state.login.menus, route.path)
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

  .header-left {
    display: flex;
    align-items: center;

    .bread {
      margin-left: 10px;
    }
  }
}
</style>
