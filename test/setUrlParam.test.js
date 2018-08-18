/* eslint-disable no-undef */
import setUrlParam from '../src/setUrlParam';

// setUrlParam 测试用例
test('setUrlParam 测试用例-1:', () => {
  // 通过key获取url参数值
  const originUrl = 'http://www.ewt360.com?id=1&name=haha&age=10';
  const params = {
    id: 2,
    title: 'enen',
  };
  const expectResult = 'http://www.ewt360.com?id=2&name=haha&age=10&title=enen';
  expect(setUrlParam(params, originUrl)).toEqual(expectResult);
});

test('setUrlParam 测试用例-2:', () => {
  // 通过key获取url参数值
  const params = {
    id: 2,
    title: 'enen',
  };
  // 因直接运行测试用例时，window.location.href为about:blank
  const expectResult = 'http://localhost/?id=2&title=enen';
  expect(setUrlParam(params)).toEqual(expectResult);
});
