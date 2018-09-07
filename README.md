# EUtils
EWT前端工具库

## 一、安装
1.  直接引入eUtils.min.js
``` html
  <script src="eUtils.min.js"></script>
  <script>
    var test = EUtils.test();
  </script>
```

2.  npm/yarn安装
```
  npm install @ewt/eutils
```

## 二、使用
1.  整包引用
```
  import EUtils from '@ewt/eutils';

  const demo = EUtils.test();
```
2.  引用具体某一函数
```
  import { test } from '@ewt/eutils';

  const demo = test();
```

## 三、TODO
1.  按需打包技术开发；
2.  注释转markdown文档技术开发；
3.  eslint代码规范调整；
4.  开发模式下的代码调试优化；

## 四、文档
<a href="https://github.com/E-Utils/documents">文档地址</a>

## 五、客户端按需打包配置
客户端工程中引入时，为了减小最终打包后的包体积，可引入按需打包技术，工程最终只会将你项目中用到的方法打包，未引用的方法将不会被打入最终的目标文件，配置方法如下：

### 1. 安装依赖
```
  为了实现按需打包，引入插件：babel-plugin-import

  npm install --save-dev babel-plugin-import
```

### 2. 配置.babelrc
```
  {
    "plugins":[["import",
      {
        "libraryName": "@ewt/eutils",
        "libraryDirectory": "src", 
        "camel2DashComponentName": false,
        "camel2UnderlineComponentName": false, 
      }
    ]]
  }
```
