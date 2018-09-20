import min from '../src/min';

describe('Math function - min test: ', () => {
  const numArr = [1, 3, 2, 6, 88];
  const charArr = ['A', 'B', 'C', 'D'];
  const obj = {a: 1};

  test('Array is a number array;', () => {
    expect(min(numArr)).toBe(1);
  });

  test('Array is a char array;', () => {
    expect(min(charArr)).toBe('A');
  });

  test('Array is not an object;', () => {
    expect(min(obj)).toBe(undefined);
  });
});