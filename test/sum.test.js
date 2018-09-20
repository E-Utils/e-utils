import sum from '../src/sum';

describe('Math function - sum test: ', () => {
  const numArr = [1, 2, 3, 4, 5];
  const charArr = ['A', 'B', 'C', 'D'];
  const obj = {a: 1};

  test('Array is a number array;', () => {
    expect(sum(numArr)).toBe(15);
  });

  test('Array is a char array;', () => {
    expect(sum(charArr)).toBe('ABCD');
  });

  test('Array is not an array;', () => {
    expect(sum(obj)).toBe(0);
  });
});