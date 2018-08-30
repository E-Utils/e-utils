/* eslint-disable no-undef */
import minus from '../src/minus';

describe('minus test', () => {
  describe('array 测试用例：minus 测试值：[1, 3, 5, 6], [8, 8, 6, 3, 2]', () => {
    test('array 测试用例：minus return [1, 5]', () => {
      const expectResult = [1, 5];
      expect(minus([1, 3, 5, 6], [8, 8, 6, 3, 2])).toEqual(expectResult);
    });
  });
});