/* eslint-disable no-undef */
import getUrlParam from '../src/getUrlParam';

// getUrlParam 测试用例
test('getUrlParam 测试用例---key + originUrl-1:', () => {
  // 通过key获取url参数值
  const originUrl = 'http://www.ewt360.com?id=1&name=haha&age=10';
  const key = 'id';
  const expectResult = '1';
  expect(getUrlParam(key, originUrl)).toEqual(expectResult);
});

test('getUrlParam 测试用例---key + originUrl-2:', () => {
  // 通过key获取url参数值
  const originUrl = 'http://www.ewt360.com?id=1&name=haha&age=10';
  const key = 'id1';
  const expectResult = '';
  expect(getUrlParam(key, originUrl)).toEqual(expectResult);
});

test('getUrlParam 测试用例---key + originUrl-3:', () => {
  // 通过key获取url参数值
  const originUrl = 'http://www.ewt360.com';
  const key = 'id';
  const expectResult = '';
  expect(getUrlParam(key, originUrl)).toEqual(expectResult);
});


test('getUrlParam 测试用例---key', () => {
  // 通过key获取url参数值
  const expectResult = '';
  const key = 'id';
  expect(getUrlParam(key)).toEqual(expectResult);
});
