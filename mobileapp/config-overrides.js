//用于覆盖webpack的配置
const { override, fixBabelImports, addWebpackAlias } = require('customize-cra')
const path = require('path')

//antd的按需加载
const babelPlugin = fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css',
})

//配置快捷路径别名
const alias = addWebpackAlias({
    '@': path.join(__dirname, 'src'),
    '@scss': path.join(__dirname, 'src/assets/styles'),
})
module.exports = override(
    babelPlugin,
    alias
)
