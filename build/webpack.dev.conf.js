const utils = require('./utils')
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const config = require('../config')
const path = require('path')
const portfinder = require('portfinder')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')


const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)
const htmls = utils.htmlPlugin('src/entries/**/*.html')

const devConfig = merge(baseWebpackConfig, {
    debug: true,
    devtool: config.dev.devtool,
    plugins: [
        new webpack.DefinePlugin({
            'process.env': require('../config/dev.env')
        }),
        new webpack.HotModuleReplacementPlugin(),//开启热替换插件
        new webpack.NoErrorsPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        ...htmls
    ],
    devServer: {
        clientLogLevel: 'warning',
        host: HOST || config.dev.host,
        port: PORT || config.dev.port,
        devtool: 'eval',
        historyApiFallback: {
            rewrites: [
                { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') }
            ]
        },
        hot:true,
        progress:true,
        contentBase: false,
        quiet: true,
        stats: 'minimal',
        open: config.dev.autoOpenBrowser,
        proxy: config.dev.proxyTable,
        watchOptions: {
            poll: config.dev.poll
        }
    }
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devConfig.devServer.port = port
      // 友好输出
      devConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`项目运行地址: http://${devConfig.devServer.host}:${port}`],
        },
        onErrors: config.dev.notifyOnErrors
        ? undefined
        : undefined
      }))

      resolve(devConfig)
    }
  })
})