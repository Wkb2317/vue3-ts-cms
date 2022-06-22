<template>
  <div class="login">
    <login-panel></login-panel>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LoginPanel from './cpns/login-panel.vue'

export default defineComponent({
  name: 'login',
  components: {
    LoginPanel
  }
})
</script>

<style lang="scss" scoped>
.login {
  height: 100%;
  width: 100%;
  background-image: url('../../assets/img/login-bg.svg');
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
