<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="~@/assets/img/logo.svg" alt="logo" />
      <span class="title" v-if="!props.collaps">后台管理系统</span>
    </div>
    <el-menu
      :collapse="props.collaps"
      class="el-menu-vertical"
      background-color="#0c2135"
      text-color="#b7bdc3"
      active-text-color="#0a60bd"
    >
      <template v-for="item in userMenus" :key="item.id">
        <template v-if="item.type === 1">
          <el-sub-menu :index="item.id.toString()">
            <template #title>
              <el-icon color="#409EFC" v-if="item.icon">
                <component :is="splitIconClass(item.icon)"></component>
              </el-icon>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="subItem in item.children" :key="subItem.id">
              <el-menu-item
                @click="handleMenuItemClick(subItem)"
                :index="subItem.id.toString()"
              >
                <el-icon v-if="subItem.icon">
                  <component :is="splitIconClass(subItem.icon)"></component>
                </el-icon>
                <span>{{ subItem.name }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <template v-else-if="item.type === 2"> </template>
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue'
import { useStore } from '@/store'
import { useRouter } from 'vue-router'

const props = defineProps({
  collaps: {
    type: Boolean,
    default: false
  }
})
const store = useStore()
const router = useRouter()
const userMenus = computed(() => store.state.login.menus)
console.log(store.state.login.menus)

const splitIconClass = (classStr: string) => {
  const str = classStr.split('-')[2]
  const newStr = str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase()
  return newStr === 'Chat' ? 'ChatDotRound' : newStr
}

const handleMenuItemClick = (item: any) => {
  router.push(item.url)
}
</script>

<style scoped lang="scss">
.nav-menu {
  height: 100%;
  background-color: #001529;

  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    justify-content: flex-start;
    align-items: center;

    .img {
      width: 40px;
      height: 40px;
    }

    .title {
      height: 50px !important;
      line-height: 50px;
      color: white;
    }
  }

  .el-menu {
    border-right: none;
  }

  // 目录
  .el-submenu {
    background-color: #6c8aa7 !important;

    // 二级菜单 ( 默认背景 )
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #0c2135 !important;
    }
  }

  ::v-deep .el-submenu__title {
    background-color: #001529 !important;
  }

  // hover 高亮
  .el-menu-item:hover {
    color: #fff !important; // 菜单
  }

  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #0a60bd !important;
  }
}

.el-menu-vertical:not(.el-menu--collapse) {
  background-color: #001529;
  width: 100%;
  height: calc(100% - 48px);
}
</style>
