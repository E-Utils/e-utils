'use strict'
const path = require('path')
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const config = require('../config')

exports.assetsPath = function (_path) {
    const assetsSubDirectory = process.env.NODE_ENV === 'production'
        ? config.build.assetsSubDirectory
        : config.dev.assetsSubDirectory

    return path.posix.join(assetsSubDirectory, _path)
}

exports.entries = getEntry
exports.htmlPlugin = (globPath) => {
    let entryHtml = glob.sync(globPath)
    let arr = []
    entryHtml.forEach((filePath) => {
        let filename = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.'))
        let file = filePath.split('src/entries/')[1]
        let conf = {
            // 模板来源
            template: filePath,
            // 文件名称
            filename: file,
            // 页面模板需要加对应的js脚本，如果不加这行则每个页面都会引入所有的js脚本
            chunks: ['manifest', 'vendor', filename],
            inject: true
        }
        if (process.env.NODE_ENV === 'production') {
            conf = merge(conf, {
                minify: {
                    removeComments: true,
                    collapseWhitespace: true,
                    removeAttributeQuotes: true
                }
            })
        }
        arr.push(new HtmlWebpackPlugin(conf))
    })
    return arr
}
function getEntry(globPath, pathDir) {
    var files = glob.sync(globPath);
    var entries = {},
        entry, dirname, basename, pathname, extname;
    files.forEach(filePath => {
        let filename = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.'))
        dirname = path.dirname(filePath);
        extname = path.extname(filePath);
        basename = path.basename(filePath, extname);
        pathname = path.join(dirname, basename);
        pathname = pathDir ? pathname.replace(new RegExp('^' + pathDir), '') : pathname;
        entries[filename] = ['./' + filePath];
    })
    // 添加公共模块
    entries['vendor'] = ['es5-shim', 'es5-shim/es5-sham', 'es6-promise', 'console-polyfill']
    return entries;
}