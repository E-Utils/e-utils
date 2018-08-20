/* eslint-disable no-undef */
import unique from '../src/unique';

describe('unique test', () => {
  describe('array 测试用例：unique 测试值：[1, 3, 2, 2, 3, 2, 3]', () => {
    test('array 测试用例：unique return [1, 2, 3]', () => {
      const expectResult = [1, 2, 3];
      expect(unique([1, 2, 3, 2, 3, 2, 3])).toEqual(expectResult);
    });
  });
});