<template>
  <div v-if="!item.hidden">
    <!-- 只有一个子路由且无下级 -->
    <template
        v-if="
        hasOneShowingChild(item.children, item) &&
        (!onlyOneChild.children || onlyOneChild.noShowingChildren)
      "
    >
      <el-menu-item :index="resolvePath(onlyOneChild.path)">
        <!-- 修改图标渲染部分 -->
        <template v-if="onlyOneChild.meta?.icon">
          <svg-icon
              v-if="onlyOneChild.meta.iconType === 'svg'"
              :icon-class="onlyOneChild.meta.icon"
              class="svg-container"
          />
          <i v-else :class="onlyOneChild.meta.icon"></i>
        </template>
        <template #title>{{ onlyOneChild.meta?.title }}</template>
      </el-menu-item>
    </template>

    <!-- 多个子路由 -->
    <el-sub-menu v-else :index="resolvePath(item.path)" popper-append-to-body>
      <template #title>
        <!-- 修改图标渲染部分 -->
        <template v-if="item.meta?.icon">
          <svg-icon
              v-if="item.meta.iconType === 'svg'"
              :icon-class="item.meta.icon"
              class="svg-container"
          />
          <i v-else :class="item.meta.icon"></i>
        </template>
        <span>{{ item.meta?.title }}</span>
      </template>

      <sidebar-item
          v-for="child in item.children"
          :key="child.path"
          :item="child"
          :base-path="resolvePath(child.path)"
      />
    </el-sub-menu>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue';
import SvgIcon from '@/components/icons/SvgIcon.vue'; // 导入自定义图标组件

export default defineComponent({
  name: 'SidebarItem',
  components: {
    SvgIcon // 注册组件
  },
  props: {
    item: { type: Object, required: true },
    basePath: { type: String, default: '' }
  },
  setup(props) {
    const state = reactive({ onlyOneChild: null });

    const hasOneShowingChild = (children = [], parent) => {
      const showingChildren = children.filter(c => !c.hidden);
      if (showingChildren.length === 1) {
        state.onlyOneChild = showingChildren[0];
        return true;
      }
      if (showingChildren.length === 0) {
        state.onlyOneChild = { ...parent, path: '', noShowingChildren: true };
        return true;
      }
      return false;
    };

    function resolvePath(routePath) {
      // 简单处理：保证中间只有一个 /
      return (props.basePath.replace(/\/$/, '') + '/' + routePath.replace(/^\//, '')).replace(/\/+/g, '/');
    }

    return { ...toRefs(state), hasOneShowingChild, resolvePath };
  }
});
</script>

<style scoped>
.svg-container {
  margin-right: 10px;
  font-size: 18px;
  width: 1.2em;
  height: 1.2em;
  vertical-align: middle;
}
</style>