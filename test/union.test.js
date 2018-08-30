/* eslint-disable no-undef */
import union from '../src/union';

describe('union test', () => {
  describe('array 测试用例：union 测试值：[1, 3, 5], [6, 8, 8, 6, 3]', () => {
    test('array 测试用例：union return [1, 3, 5, 6, 8]', () => {
      const expectResult = [1, 3, 5, 6, 8];
      expect(union([1, 3, 5], [6, 8, 8, 6, 3])).toEqual(expectResult);
    });
  });
});