import dateFormat from '../src/dateFormat';

describe('Date test', () => {
  const timestamp = 1531643785284;
  const format = 'yyyy-MM-dd';

  describe('Function dateFormat test timestamp: dateFormat(1531643785284)', () => {
    test('dateFormat(timestamp) return "2018-07-15"', () => {
      expect(dateFormat(timestamp, format)).toBe('2018-07-15');
    });
  });
});
