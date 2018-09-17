/* eslint-disable no-undef */
import intersection from '../src/intersection';

describe('cross test', () => {
  describe('array 测试用例：intersection 测试值：[1, 3, 5, 6], [8, 8, 6, 3]', () => {
    test('array 测试用例：cross return [3, 6]', () => {
      const expectResult = [3, 6];
      expect(intersection([1, 3, 5, 6], [8, 8, 6, 3])).toEqual(expectResult);
    });

    test('array 测试用例：intersection return [3, 6]', () => {
      const expectResult = [2, 3];
      expect(intersection([1, 2, 3, 4], [2, 3, 6, 7])).toEqual(expectResult);
    });
  });
});