<template>
  <div class="app-wrapper">
    <!-- 侧边栏 -->
    <Sidebar class="sidebar-container" />

    <div class="main-container">
      <!-- 顶部导航栏 -->
      <Header />

       <!-- 子路由内容渲染在这里 -->
      <router-view />


    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Sidebar from './TlcpSidebar.vue'
import Header from './TlcpHeader.vue'


export default defineComponent({
  name: 'TlcpLayout',
  components: {
    Sidebar,
    Header
  }
})
</script>

<style lang="scss" scoped>
.app-wrapper {
  display: flex;
  width: 100%;
  height: 100%;
}

.sidebar-container {
  width: 210px;
  height: 100vh;
  background-color: #304156;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  overflow-y: auto;
  transition: width 0.28s;
}

.main-container {
  flex: 1;
  min-height: 100vh;
  margin-left: 210px;
  transition: margin-left 0.28s;
}
</style>