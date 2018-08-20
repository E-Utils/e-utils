/* eslint-disable no-undef */
import trim from '../src/trim';

describe('trim test', () => {
  describe('string 测试用例：trim', () => {
    test('string 测试用例：trim return AA', () => {
      const expectResult = 'AA';
      expect(trim('dAA', 'd')).toEqual(expectResult);
    });
  });
});