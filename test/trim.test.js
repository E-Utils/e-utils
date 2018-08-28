/* eslint-disable no-undef */
import trim from '../src/trim';

describe('trim test', () => {
  describe('string 测试用例：trim', () => {
    test('string 测试用例：传字符，trim return AA', () => {
      const expectResult = 'AA';
      expect(trim('dAA', 'd')).toEqual(expectResult);
    });

    test('string 测试用例：只传一个参数, trim return AA', () => {
      const expectResult = 'AA';
      expect(trim('AA')).toEqual(expectResult);
    });

    test('string 测试用例：什么都不传，trim return undefined', () => {
      const expectResult = undefined;
      expect(trim()).toEqual(expectResult);
    });
  });
});