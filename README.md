# E-Utils项目

## 项目简介

```
  本项目为e-utils公共方法库项目，为前端提供基础方法库的实现，本项目所有实现兼容到IE8。
```

# 构建说明 （ie8）

## 目录结构

```
e-utils
└── build
    └── utils
    └── webpack.base.conf.js
    └── webpack.dev.conf.js
    └── webpack.prod.conf.js
└── config
    └── dev.env.js
    └── index.js
    └── prod.env.js
└── src
    └── eBiz
    └── eUtils
├── .babelrc
├── .gitignore
├── package.json
├── README.md
```

## 第一次运行项目
```
  cd ~/react-scaffold
  npm install
  npm start
```

## 构建命令
npm start 启动项目开发
npm dev:ie 启动ie8模式开发 <p style="font-size:14px;color:red">tip:ie8不支持内联模式热更新</p>
npm build 项目打包
npm clean 清空dist目录

## 构建依赖
Node http://nodejs.cn/

Npm

webpack  https://www.runoob.com/w3cnote/webpack-tutorial.html

## 基础配置

### 入口文件
```
└── src
  └── entries
        └── index
            └── index.html
            └── index.js
```
1. 支持单页和多页只需要在建对应文件目录及文件名
2. <p style = "font-size:16px;color:red">多页应用入口文件夹及文件名不能重复</p>
3.  文件输出目录在根文件下带目录结构

### 常用配置

打开以下目录的文件
```
└── config
    └── index.js
```
配置项
```
  {
    dev: { 开发配置
      // 路由
      assetsSubDirectory: 'static',  静态资源文件夹
      assetsPublicPath: '/',  静态资源目录  默认根目录，如果不是根目录配置相应路径
      proxyTable: { 开发代理
        "/config": {
            target: "http://yapi.235.mistong.com/mock/83",
            changeOrigin: true,
            secure: false
        }
      },
      host: 'localhost',  本地方访问host
      port: 8080,  端口
      autoOpenBrowser: true,  自动打开浏览器
      useEslint: true 是否开启lint
    },
    build: { 构建配置
      index: path.resolve(__dirname, '../dist/index.html'), 根目录

      // Paths
      assetsRoot: path.resolve(__dirname, '../dist'),
      assetsSubDirectory: 'static', 静态资源文件夹
      assetsPublicPath: '/',  静态资源目录  默认根目录，如果不是根目录配置相应路径

      /**
      * Source Maps
      */

      productionSourceMap: false  调试映射
    }
  }
```

### 常用loader

less
```
  npm i less@2.7.1  --save-dev
  npm i less-loader@4.8.3  --save-dev
```

sass
```
  npm i sass-loader@6.0.7
  npm i node-sass@4.8.3
```

postcss
```
  npm i postcss-loader@2.1.5 --save-dev
  npm i postcss-pxtorem --save-dev  // 移动rem转换方案
  npm i postcss-import --save-dev  // css import 兼容
  npm i postcss-url    --save-dev
  npm i autoprefixer --save-dev    // css3前缀自动补充
  根目录创建
  .postcssrc.js 进行相应配置
```

### bebel配置

```
  └── .babelrc 配置文件
```


### lint配置
编辑器代码格式化工具
```
  └── .editorconfig 配置文件
```
webstorm 不需要安装 ATOM vscode sublime 需要安装editorConfig插件


