/* eslint-disable no-undef */
import replace from '../src/replace';

// string 测试用例：验证各个方法
describe('replace test', () => {
  describe('string 测试用例：replace', () => {
    test('string 测试用例：replace return kAA', () => {
      const expectResult = 'kAA';
      expect(replace('dAA', 'd', 'k')).toEqual(expectResult);
    });
    test('string 测试用例：只传一个参数,replace return kAA', () => {
      const expectResult = 'kAA';
      expect(replace('kAA')).toEqual(expectResult);
    });
  });
});
