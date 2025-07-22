<template>
  <div class="app-breadcrumb">
    <el-breadcrumb :separator="separator">
      <el-breadcrumb-item v-for="(item, index) in breadcrumbs" :key="item.path">
        <router-link
            v-if="index < breadcrumbs.length - 1"
            :to="item.path"
            class="breadcrumb-link"
        >
          {{ item.meta.title }}
        </router-link>
        <span v-else class="current-page">
          {{ item.meta.title }}
        </span>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router' 

const route = useRoute()
const separator = ref('/')
const breadcrumbs = ref([])

// 生成面包屑导航
const getBreadcrumbs = () => {
  const matched = route.matched.filter(item => item.meta && item.meta.title)
  breadcrumbs.value = matched.map(item => {
    return {
      path: item.path,
      meta: { ...item.meta }
    }
  })
}

// 监听路由变化
watch(
    () => route.path,
    () => {
      getBreadcrumbs()
    },
    { immediate: true }
)
</script>

<style lang="scss" scoped>
.app-breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 10px;

  .breadcrumb-link {
    color: #97a8be;
    font-weight: normal;
    transition: color 0.3s;

    &:hover {
      color: var(--el-color-primary);
    }
  }

  .current-page {
    color: #303133;
    font-weight: 500;
  }

  :deep(.el-breadcrumb__separator) {
    color: #c0c4cc;
    margin: 0 6px;
    font-weight: normal;
  }
}
</style>