import max from '../src/max';

describe('Math function - max test: ', () => {
  const numArr = [1, 3, 2, 6, 88];
  const charArr = ['A', 'B', 'C', 'D'];
  const obj = {a: 1};

  test('Array is a number array;', () => {
    expect(max(numArr)).toBe(88);
  });

  test('Array is a char array;', () => {
    expect(max(charArr)).toBe('D');
  });

  test('Array is not an object;', () => {
    expect(max(obj)).toBe(undefined);
  });
});