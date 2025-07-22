const { defineConfig } = require('@vue/cli-service')
const path = require('path');
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  chainWebpack: config => {
    // 移除默认的 SVG loader
    config.module.rules.delete('svg');

    // 添加 SVG sprite loader
    config.module
        .rule('svg')
        .test(/\.svg$/)
        .include.add(path.resolve(__dirname, 'src/assets/icons/svg'))
        .end()
        .use('svg-sprite-loader')
        .loader('svg-sprite-loader')
        .options({
          symbolId: 'icon-[name]'
        });
  }
};