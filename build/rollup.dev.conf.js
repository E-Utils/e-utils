import openBrowsers from 'open-browsers';
import { merge } from 'lodash';
import rollupBaseConf from './rollup.base.conf';

if (openBrowsers('http://localhost:3000')) {
  console.log('You are developing~~~~~~');
}

const devConfig = {};

const config = merge(rollupBaseConf, devConfig);

export default config;
