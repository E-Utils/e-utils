/* eslint-disable no-undef */
import cross from '../src/cross';

describe('cross test', () => {
  describe('array 测试用例：cross 测试值：[1, 3, 5, 6], [8, 8, 6, 3]', () => {
    test('array 测试用例：cross return [3, 6]', () => {
      const expectResult = [3, 6];
      expect(cross([1, 3, 5, 6], [8, 8, 6, 3])).toEqual(expectResult);
    });
  });
});