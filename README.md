# EUtils Scaffold
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
  npm install eutils
```

## 二、使用
1.  整包引用
```
  import EUtils from 'eutils';

  const demo = EUtils.test();
```
2.  引用具体某一函数
```
  import { test } from 'eutils';

  const demo = test();
```

## 三、TODO
1.  按需打包技术开发；
2.  注释转markdown文档技术开发；
3.  代码覆盖率监测技术开发；
4.  eslint代码规范调整；