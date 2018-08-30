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
3.  代码覆盖率监测技术开发；
4.  eslint代码规范调整；
5.  开发模式下的代码调试优化；

## 四、文档
<a href="https://github.com/E-Utils/documents">文档地址</a>

## 五、单个测试用例运行命令
../node_modules/.bin/jest xxx.test.js --coverage
如果写了条件判断 测试用例要覆盖条件判断if true和false两个情况 哪怕只写了if没有else也要把 if没被执行的情况覆盖到