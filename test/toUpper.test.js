/* eslint-disable no-undef */
import toUpper from '../src/toUpper';

describe('toUpper test', () => {
  describe('string 测试用例：toUpper', () => {
    test('string 测试用例：toUpper return AAA---', () => {
      const expectResult = 'AAA--';
      expect(toUpper('aaa--')).toEqual(expectResult);
    });
  });
});
