  <template>
    <div class="sidebar" :class="{ collapsed: isCollapse }">
      <!-- 顶部标题区（同登录页 card-header 风格） -->
      <div class="header">
        <div class="logo-box">
          <span class="logo-text">TLCP</span>
        </div>
        <h1 class="title">国密TLCP协议数据采集分析系统</h1>
        <p class="subtitle">政务信息安全管理平台</p>
      </div>

      <!-- 菜单区域 -->
      <el-menu
          class="nav"
          :default-active="activeMenu"
          :collapse="isCollapse"
          background-color="transparent"
          text-color="#5d4e37"
          active-text-color="#fff"
          unique-opened
          router
      >
        <sidebar-item
            v-for="route in routes"
            :key="route.path"
            :item="route"
            :base-path="route.path"
        />
      </el-menu>
    </div>
  </template>

  <script>
  import { defineComponent, computed } from 'vue'
  import { useRouter } from 'vue-router'
  import SidebarItem from './SidebarItem.vue'

  export default defineComponent({
    name: 'TlcpSidebar',
    components: { SidebarItem },
    props: { isCollapse: { type: Boolean, default: false } },
    setup() {
      const router = useRouter()
      const routes = computed(() =>
          router.getRoutes().find(r => r.path === '/views')?.children || []
      )
      const activeMenu = computed(() => router.currentRoute.value.path)
      return { routes, activeMenu }
    }
  })
  </script>

  <style lang="scss" scoped>
  /* --- 与登录页完全一致的变量 --- */
  $primary-red: #b71c1c;
  $primary-red-dark: #951515;
  $primary-red-light: #d32f2f;
  $gold: #c9b037;
  $bg-start: #e6edf5;
  $bg-mid: #f2f7fc;
  $bg-end: #ffffff;

  .sidebar {
    width: 260px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: linear-gradient(180deg, $bg-start 0%, $bg-mid 60%, $bg-end 100%);
    box-shadow: 2px 0 8px rgba($primary-red, 0.08);
    overflow-y: auto;          // 仅纵向
    overflow-x: hidden;
    transition: width 0.3s ease;

    &.collapsed {
      width: 64px;
    }

    /* ===== 顶部标题区（复刻登录页 header） ===== */
    .header {
      text-align: center;
      padding: 36px 20px 24px;
      border-bottom: 1px solid rgba($primary-red, 0.1);

      .logo-box {
        width: 72px;
        height: 72px;
        margin: 0 auto 20px;
        background: linear-gradient(135deg, $primary-red, $primary-red-light);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-size: 26px;
        font-weight: bold;
        box-shadow: 0 3px 10px rgba($primary-red, 0.25);
      }

      .title {
        font-size: 18px;
        font-weight: 600;
        color: $primary-red;
        margin: 0 0 6px;
        letter-spacing: 0.5px;
      }

      .subtitle {
        font-size: 13px;
        color: #666;
        margin: 0;
      }
    }

    /* ===== 菜单样式 ===== */
    .nav {
      flex: 1;
      border-right: none;
      background: transparent;

      ::v-deep(.el-menu-item),
      ::v-deep(.el-sub-menu__title) {
        color: #5d4e37;
        font-size: 14px;
        height: 50px;
        line-height: 50px;
        padding: 0 20px;
        border-radius: 6px;
        margin: 3px 12px;
        transition: all 0.3s ease;
        position: relative;

        &:hover {
          background: rgba($primary-red, 0.08);
          color: $primary-red;
        }

        &.is-active {
          background: linear-gradient(90deg, $primary-red, $primary-red-light);
          color: #fff;
          font-weight: 600;
          box-shadow: 0 2px 6px rgba($primary-red, 0.2);

          &::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            width: 4px;
            background: $gold;
            border-radius: 0 4px 4px 0;
          }
        }
      }

      ::v-deep(.el-menu--inline) {
        background: rgba($primary-red, 0.02);
        border-radius: 6px;
        margin: 0 12px;
      }
    }

    /* 隐藏横向滚动条 */
    &::-webkit-scrollbar {
      width: 4px;
    }
    &::-webkit-scrollbar-thumb {
      background: rgba($primary-red, 0.2);
      border-radius: 2px;
    }
  }
  </style>