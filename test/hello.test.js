import sayHello from '../src/hello';

describe('Hello test', () => {
  const str = 'world';

  describe('Hello return value test: sayHello(str)', () => {
    test('sayHello(str) return "Hello world"', () => {
      expect(sayHello(str)).toBe('Hello world');
    });
  });
});
