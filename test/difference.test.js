/* eslint-disable no-undef */
import difference from '../src/difference';

describe('difference test', () => {
  describe('array difference 测试值：[1, 3, 5, 6], [8, 8, 6, 3, 2]', () => {
    test('array 测试用例：difference return [1, 5]', () => {
      const expectResult = [1, 5];
      expect(difference([1, 3, 5, 6], [8, 8, 6, 3, 2])).toEqual(expectResult);
    });
  });
});