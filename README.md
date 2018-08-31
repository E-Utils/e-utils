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
