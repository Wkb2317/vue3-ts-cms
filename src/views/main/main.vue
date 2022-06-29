<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside :width="collaps ? '60px' : '210px'">
        <navMenu :collaps="collaps" />
      </el-aside>
      <el-container class="page">
        <el-header class="page-header">
          <navHeader @changeCollaps="changeCollaps" :collaps="collaps" />
        </el-header>
        <el-main class="page-content">
          <div class="page-info">
            <router-view v-slot="{ Component }">
              <transition name="fade" mode="out-in">
                <component :is="Component"></component> </transition
            ></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import navMenu from '@/components/nav-menu'
import navHeader from '@/components/nav-header'

const collaps = ref(false)

const changeCollaps = () => {
  collaps.value = !collaps.value
}
</script>

<style lang="scss" scoped>
.main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.main-content,
.page {
  height: 100%;
}

.page-content {
  height: calc(100% - 48px);

  .page-info {
    background-color: #fff;
    border-radius: 5px;
  }
}

.el-header,
.el-footer {
  display: flex;
  color: #333;
  text-align: center;
  align-items: center;
}

.el-header {
  height: 48px !important;
}

.el-aside {
  overflow-x: hidden;
  overflow-y: auto;
  line-height: 200px;
  text-align: left;
  cursor: pointer;
  color: rgb(255, 255, 255);
  background-color: #001529;
  transition: width 0.3s linear;
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */

  &::-webkit-scrollbar {
    display: none;
  }
}

.el-main {
  color: #333;
  text-align: center;
  background-color: #f0f2f5;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  transform: translateX(40px);
  opacity: 0;
}
</style>
