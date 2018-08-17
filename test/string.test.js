/* eslint-disable no-undef */
import replaceAll from '../src/replaceAll';
import replace from '../src/replace';
import toLower from '../src/toLower';
import toUpper from '../src/toUpper';
import trim from '../src/trim';

// string 测试用例：验证各个方法
describe('replace test', () => {
  describe('string 测试用例：replace', () => {
    test('string 测试用例：replace return kAA', () => {
      const expectResult = 'kAA';
      expect(replace('dAA', 'd', 'k')).toEqual(expectResult);
    });
  });
});

describe('replaceAll test', () => {
  describe('string 测试用例：replaceAll', () => {
    test('string 测试用例：replaceAll return aAAa', () => {
      const expectResult = 'aAAa';
      expect(replaceAll('kkAAkk', 'kk', 'a')).toEqual(expectResult);
    });
  });
});

describe('trim test', () => {
  describe('string 测试用例：trim', () => {
    test('string 测试用例：trim return AA', () => {
      const expectResult = 'AA';
      expect(trim('dAA', 'd')).toEqual(expectResult);
    });
  });
});

describe('toUpper test', () => {
  describe('string 测试用例：toUpper', () => {
    test('string 测试用例：toUpper return AAA---', () => {
      const expectResult = 'AAA--';
      expect(toUpper('aaa--')).toEqual(expectResult);
    });
  });
});

describe('toLower test', () => {
  describe('string 测试用例：toLower', () => {
    test('string 测试用例：toLower return aaa---', () => {
      const expectResult = 'aaa--';
      expect(toLower('AAA--')).toEqual(expectResult);
    });
  });
});
