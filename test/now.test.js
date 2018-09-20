import now from '../src/now';

describe('Date function - now test: ', () => {
  test('Timestamp is correct: ', () => {
    expect(now()).toBeLessThanOrEqual(new Date().getTime());
  });
});