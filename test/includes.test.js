/* eslint-disable no-undef */
import includes from '../src/includes';

describe('includes test', () => {
  describe('array 测试用例：includes 测试值：3', () => {
    test('array 测试用例：includes return true', () => {
      const expectResult = true;
      expect(includes([1, 3, [1,2]], 3)).toEqual(expectResult);
    });
  });

  describe('array 测试用例：includes 测试值：[1,2]', () => {
    test('array 测试用例：includes return true', () => {
      const expectResult = true;
      expect(includes([1, 3, [1,2]], [1,2])).toEqual(expectResult);
    });
  });

  describe('array 测试用例：includes 测试值：=>[1,2]', () => {
    test('array 测试用例：includes return false', () => {
      const expectResult = false;
      expect(includes([1, 3, [1,3]], [1,2])).toEqual(expectResult);
    });
  });

  describe('array 测试用例：includes 测试值：{1: 3}', () => {
    test('array 测试用例：includes return true', () => {
      const expectResult = true;
      expect(includes([1, 3, [1,2], {1:3}], {1:3})).toEqual(expectResult);
    });
  });

  describe('array 测试用例：includes 测试值："cc"', () => {
    test('array 测试用例：includes return true', () => {
      const expectResult = true;
      expect(includes('abccdd', 'cc')).toEqual(expectResult);
    });
  });

  describe('array 测试用例：includes 测试值：cc', () => {
    test('array 测试用例：includes return true', () => {
      const expectResult = true;
      expect(includes({cc: 222}, 'cc')).toEqual(expectResult);
    });
  });

  describe('array 测试用例：includes 测试值：boolean', () => {
    test('array 测试用例：includes return true', () => {
      const expectResult = false;
      expect(includes(true, 'cc')).toEqual(expectResult);
    });
  });
});