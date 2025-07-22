<template>

  <div id="app">

    <svg-icon-sprite />
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  overflow: hidden;
  background-color: #f5f7fa;
}
</style>
<script>
export default {
  components: {
    SvgIconSprite: {
      template: '<svg xmlns="http://www.w3.org/2000/svg" style="display: none;"><defs></defs></svg>'
    }
  }
}
</script>