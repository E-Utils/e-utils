/* eslint-disable no-undef */
import toLower from '../src/toLower';

describe('toLower test', () => {
  describe('string 测试用例：toLower', () => {
    test('string 测试用例：toLower return aaa---', () => {
      const expectResult = 'aaa--';
      expect(toLower('AAA--')).toEqual(expectResult);
    });
  });
});
