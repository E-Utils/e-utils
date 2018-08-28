import indexOf from '../src/indexOf';

describe('indexOf test', () => {

  describe('Function indexOf test - no from index', () => {
    test('Find a character in an array', () => {
      const array = [1, 2, 1, 2];
      const resultValue = 1;
      const findValue = 2;
      expect(indexOf(array, findValue)).toBe(resultValue);
    });

    test('Find characters from the specified position of the array', () => {
      const array = [1, 2, 1, 2];
      const resultValue = 3;
      const findValue = 2;
      const fromIndex = 2;
      expect(indexOf(array, findValue, fromIndex)).toBe(resultValue);
    });

    test('Find a character in an null', () => {
      const array = null;
      const resultValue = -1;
      const findValue = 2;
      expect(indexOf(array, findValue)).toBe(resultValue);
    });

    test('Find characters from the -1 position of the array', () => {
      const array = [1, 2, 1, 2];
      const resultValue = 3;
      const findValue = 2;
      const fromIndex = -1;
      expect(indexOf(array, findValue, fromIndex)).toBe(resultValue);
    });

    test('Find no characters from the array', () => {
      const array = [1, 2, 1, 2];
      const resultValue = -1;
      const findValue = 3;
      expect(indexOf(array, findValue)).toBe(resultValue);
    });
  });
});
