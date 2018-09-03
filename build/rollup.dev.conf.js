// import openBrowsers from 'open-browsers';
import { merge } from 'lodash';
import rollupBaseConf from './rollup.base.conf';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

// if (openBrowsers('http://localhost:3000')) {
//   console.log('You are developing~~~~~~');
// }

const devConfig = {
  plugins: [
    serve({
      open: true, // 是否打开浏览器
      contentBase: './', // 入口html的文件位置
      historyApiFallback: true, // Set to true to return index.html instead of 404
      host: 'localhost',
      port: 8888
    }),
    livereload(),
  ],
};

const config = merge(rollupBaseConf, devConfig);

export default config;
