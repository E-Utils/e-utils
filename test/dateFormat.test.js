import dateFormat from '../src/dateFormat';

describe('Date test', () => {
  const timestamp = 1531643785284;
  const date = new Date(timestamp);
  const format = 'yyyy-MM-dd';
  const formatAll = 'yyyy-MM-dd hh:mm:ss';

  describe('Function dateFormat test - dateFormat(date, format)', () => {
    test('Argument date is timestramp, format is "yyyy-MM-dd": ', () => {
      expect(dateFormat(timestamp, format)).toBe('2018-07-15');
    });

    test('Argument date is Date Object, format is "yyyy-MM-dd: return "2018-07-15"', () => {
      expect(dateFormat(date, format)).toBe('2018-07-15');
    });

    test('Argument date is timestramp, format is empty: return 1531643785284', () => {
      expect(dateFormat(timestamp)).toBe(timestamp);
    });

    test('Argument date is timestramp, format is "yyyy-MM-dd hh:mm:ss": return "2018-07-15 16:36:25"', () => {
      expect(dateFormat(timestamp, formatAll)).toBe('2018-07-15 16:36:25');
    });

    test('Argument date is Date Object, format is "yyyy-MM-dd hh:mm:ss": ', () => {
      expect(dateFormat(date, formatAll)).toBe('2018-07-15 16:36:25');
    });

    test('Argument date is timestramp, format is "yyyy": return "2018-07-15 16:36:25"', () => {
      expect(dateFormat(date, 'yyyy')).toBe('2018');
    });

    test('Argument date is timestramp, format is "MM": return "07"', () => {
      expect(dateFormat(date, 'MM')).toBe('07');
    });

    test('Argument date is timestramp, format is "dd": return "15"', () => {
      expect(dateFormat(date, 'dd')).toBe('15');
    });

    test('Argument date is timestramp, format is "yyyy-M-d": return "2018-7-15"', () => {
      expect(dateFormat(date, 'yyyy-M-d')).toBe('2018-7-15');
    });
  });
});
