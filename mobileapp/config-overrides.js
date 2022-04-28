//用于覆盖webpack的配置
const { override, fixBabelImports, 
    addWebpackAlias, 
    // addPostcssPlugins 
} = require('customize-cra')
// const px2viewport = require('postcss-px-to-viewport')
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

// const postcssPlugins = addPostcssPlugins([
//     px2viewport({
//         unitToConvert: 'px',
//         viewportWidth: 320,
//         unitPrecision: 5,
//         propList: ['*'],
//         viewportUnit: 'vw',
//         fontViewportUnit: 'vw',
//         selectorBlackList: [],
//         minPixelValue: 1,
//         mediaQuery: false,
//         replace: true,
//         exclude: undefined,
//         include: undefined,
//         landscape: false,
//         landscapeUnit: 'vw',
//         landscapeWidth: 568
//       }),
// ])
module.exports = override(
    babelPlugin,
    alias,
    // postcssPlugins,
)
