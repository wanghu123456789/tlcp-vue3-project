<template>
  <div
      class="svg-icon"
      v-html="iconContent"
      :style="{
      width: size,
      height: size,
      fill: color
    }"
  ></div>
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    icon: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: '1em'
    },
    color: {
      type: String,
      default: 'currentColor'
    }
  },
  computed: {
    iconContent() {
      // 如果传入的是 SVG 字符串，直接使用
      return this.icon
    }
  }
}
</script>

<style scoped>
.svg-icon {
  display: inline-block;
  vertical-align: middle;
  margin-right: 8px;
}

.svg-icon >>> svg {
  width: 100%;
  height: 100%;
  fill: inherit;
}
</style>