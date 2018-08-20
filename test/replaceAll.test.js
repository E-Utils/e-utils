/* eslint-disable no-undef */
import replaceAll from '../src/replaceAll';

describe('replaceAll test', () => {
  describe('string 测试用例：replaceAll', () => {
    test('string 测试用例：replaceAll return aAAa', () => {
      const expectResult = 'aAAa';
      expect(replaceAll('kkAAkk', 'kk', 'a')).toEqual(expectResult);
    });
  });
});
