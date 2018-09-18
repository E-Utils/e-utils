import has from '../src/has';

describe('Has test', () => {
  const obj = {
    a: {
      b: 1
    },
  };

  describe('Function has test - has(obj, path)', () => {
    test('Argument obj is {a:{b:1}}, path is "a": return true', () => {
      expect(has(obj, 'a')).toBe(true);
    });
    test('Argument obj is {a:{b:1}}, path is "a.b": return true', () => {
      expect(has(obj, 'a.b')).toBe(true);
    });
    test('Argument obj is {a:{b:1}}, path is "a.b.c": return false', () => {
      expect(has(obj, 'a.b.c')).toBe(false);
    });
    test('Argument obj is {a:{b:1}}, path is "a.c": return false', () => {
      expect(has(obj, 'a.c')).toBe(false);
    });
    test('Argument obj is {a:{b:1}}, path is "c": return false', () => {
      expect(has(obj, 'c')).toBe(false);
    });
  });
});
