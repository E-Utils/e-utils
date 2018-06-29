const utils = require('./utils')
const path = require('path')
const config = require('../config')

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}
const entries = utils.entries('src/entries/**/*.js', 'src')
module.exports  = {
    context: path.resolve(__dirname, '../'),
    disableHostCheck: true,
    entry: entries,
    output: {
        path: config.build.assetsRoot,
        chunkFilename: '[name].chunk.js',
        filename: '[name].js',
        publicPath: process.env.NODE_ENV === 'production'
            ? config.build.assetsPublicPath
            : config.dev.assetsPublicPath
    },
    resolve: {
        extensions: ['', '.js'],
        alias: {
            '~': resolve('src')
        }
    },
    module: {
        loaders: [
            {
                test: /\.(js)$/,
                include: [resolve('src')],
                loader: 'babel-loader!eslint-loader'
            }   
        ],
        postLoaders: [
            {
                test: /(\.js)$/,
                loaders: ['es3ify-loader']
            }
        ]
    }
}
