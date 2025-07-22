<template>
  <div class="header">
    <div class="header-left">
      <i class="el-icon-s-fold" @click="toggleCollapse"></i>
      <breadcrumb class="breadcrumb-container" />
    </div>

    <div class="header-right">
      <div class="screen-full" @click="toggleFullScreen">
        <i class="el-icon-full-screen"></i>
      </div>

      <el-dropdown>
        <span class="el-dropdown-link">
          <el-avatar :size="30" :src="user.avatar" />
          <span class="user-name">{{ user.name }}</span>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue'
import { useRouter } from 'vue-router'
import Breadcrumb from '@/components/page/BreadCrumb.vue'

export default defineComponent({
  name: 'TlcpHeader',
  components: {
    Breadcrumb
  },
  setup() {
    const router = useRouter()

    const user = reactive({
      name: '管理员',
      avatar: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
    })

    const toggleCollapse = () => {
      // 切换侧边栏折叠状态
    }

    const toggleFullScreen = () => {
      // 切换全屏
    }

    const logout = () => {
      localStorage.removeItem('tlcp-token')
      router.push('/login')
    }

    return {
      user,
      toggleCollapse,
      toggleFullScreen,
      logout
    }
  }
})
</script>

<style lang="scss" scoped>
.header {
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .header-left {
    display: flex;
    align-items: center;

    i {
      font-size: 20px;
      cursor: pointer;
      margin-right: 20px;
    }
  }

  .header-right {
    display: flex;
    align-items: center;

    .screen-full {
      margin-right: 20px;
      cursor: pointer;
      i {
        font-size: 20px;
      }
    }

    .el-dropdown-link {
      display: flex;
      align-items: center;
      cursor: pointer;

      .user-name {
        margin-left: 10px;
      }
    }
  }
}
</style>