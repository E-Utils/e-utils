/* eslint-disable no-undef */
import replaceAll from '../src/replaceAll';

describe('replaceAll test', () => {
  describe('string 测试用例：replaceAll', () => {
    test('string 测试用例：replaceAll return aAAa', () => {
      const expectResult = 'aAAa';
      expect(replaceAll('kkAAkk', 'kk', 'a')).toEqual(expectResult);
    });

    test('string 测试用例：第二个参数传正则/kk/i，replaceAll return aAAa', () => {
      const expectResult = 'aAAa';
      expect(replaceAll('kkAAKk', /kk/i, 'a')).toEqual(expectResult);
    });

    test('string 测试用例：第二个参数传正则/kk/ig, replaceAll return aAAa', () => {
      const expectResult = 'aAAa';
      expect(replaceAll('kkAAKk', /kk/ig, 'a')).toEqual(expectResult);
    });

    test('string 测试用例：只传2个参数，replaceAll return aAAa', () => {
      const expectResult = 'aAAa';
      expect(replaceAll('aAAa', /kk/i)).toEqual(expectResult);
    });
  });
});
