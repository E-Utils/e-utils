/* eslint-disable no-undef */
import unique from '../src/unique';

describe('unique test', () => {
  describe('array 测试用例：unique 测试值：[1, 2, 3, 2, 3, 2, 3, [1,2], [1,2]]', () => {
    test('array 测试用例：unique return [1, 2, 3, [1,2]]', () => {
      const expectResult = [1, 2, 3, [1,2], {item: 1, 2: 3}];
      expect(unique([1, 2, 3, 2, 3, 2, 3, [1,2], [1,2], {item: 1, 2: 3}, {item: 1, 2: 3}])).toEqual(expectResult);
    });
  });
  describe('array 测试用例：unique 测试值：[1, 2, 3, 2, 3, 2, 3, [1,2], [1,2], {item: 1, 2: 3}, {item: 1, 2: 3}]', () => {
    test('array 测试用例：unique return [3]', () => {
      const expectResult = [3];
      expect(unique([1, 2, 3, 2, 3, 2, 3, [1,2], [1,2], {item: 1, 2: 3}, {item: 1, 2: 3}], item => item > 2)).toEqual(expectResult);
    });
  });
});