'use strict'


const path = require('path')

module.exports = {
  dev: {
    // 路由
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
        "/config": {
            target: "http://yapi.235.mistong.com/mock/83",
            changeOrigin: true,
            secure: false
        },
    },
    host: 'localhost', // 本地方访问host
    port: 8080, // 端口
    autoOpenBrowser: true, // 自动打开浏览器
    poll: true, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-
    // use postcss loader ?
    usePostcss: true,
    // Use Eslint Loader?
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    useEslint: true, // 使用eslint
    // If true, eslint errors and warnings will also be shown in the error overlay
    // in the browser.
    showEslintErrorsInOverlay: true,

    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging  in devtools,
    // set this to false - it *may* help
    cacheBusting: true,

    cssSourceMap: true
  },
  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'lib',
    assetsPublicPath: '/',

    /**
     * Source Maps
     */

    productionSourceMap: false,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
