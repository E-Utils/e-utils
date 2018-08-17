/* eslint-disable no-undef */
import * as eUtils from '../src/eUtils';

// string 测试用例：验证各个方法
test('string 测试用例：replace', () => {
  const expectResult = 'kAA';
  expect(eUtils.replace('dAA', 'd', 'k')).toEqual(expectResult);
});

test('string 测试用例：replaceAll', () => {
  const expectResult = 'aAAa';
  expect(eUtils.replaceAll('kkAAkk', 'kk', 'a')).toEqual(expectResult);
});

test('string 测试用例：trim', () => {
  const expectResult = 'AA';
  expect(eUtils.trim('dAA', 'd')).toEqual(expectResult);
});

test('string 测试用例：toUpper', () => {
  const expectResult = 'AAA--';
  expect(eUtils.toUpper('aaa--')).toEqual(expectResult);
});

test('string 测试用例：toLower', () => {
  const expectResult = 'aaa--';
  expect(eUtils.toLower('AAA--')).toEqual(expectResult);
});
