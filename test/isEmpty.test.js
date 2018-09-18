import isEmpty from '../src/isEmpty';

describe('isEmpty test', () => {
  describe('Function isEmpty test - isEmpty(target)', () => {
    test('Argument target is null: return true', () => {
      expect(isEmpty(null)).toBe(true);
    });
    test('Argument target is undefined: return true', () => {
      expect(isEmpty(undefined)).toBe(true);
    });
    test('Argument target is "": return true', () => {
      expect(isEmpty('')).toBe(true);
    });
    test('Argument target is 0: return true', () => {
      expect(isEmpty(0)).toBe(true);
    });
    test('Argument target is []: return true', () => {
      expect(isEmpty([])).toBe(true);
    });
    test('Argument target is new Set(): return true', () => {
      expect(isEmpty(new Set())).toBe(true);
    });
    test('Argument target is new Map(): return true', () => {
      expect(isEmpty(new Map())).toBe(true);
    });
    test('Argument target is {}: return true', () => {
      expect(isEmpty({})).toBe(true);
    });
    test('Argument target is [123]: return false', () => {
      expect(isEmpty([123])).toBe(false);
    });
    test('Argument target is new Set([1]): return false', () => {
      expect(isEmpty(new Set([1]))).toBe(false);
    });
    test('Argument target is new Map([[1,2]]): return false', () => {
      expect(isEmpty(new Map([[1, 2]]))).toBe(false);
    });
    test('Argument target is {a:11}: return false', () => {
      expect(isEmpty({ a: 11 })).toBe(false);
    });
    test('Argument target is "abc": return false', () => {
      expect(isEmpty('abc')).toBe(false);
    });
    test('Argument target is 123: return false', () => {
      expect(isEmpty(123)).toBe(false);
    });
    test('Argument target is true: return false', () => {
      expect(isEmpty(true)).toBe(false);
    });
  });
});
