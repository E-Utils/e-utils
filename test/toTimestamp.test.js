import toTimestamp from '../src/toTimestamp';

describe('Date function - toTimestamp test: ', () => {
  const dateStr = '2018-09-09 17:00:00';
  const dateObj = new Date(dateStr);
  const dateTimestamp = 1536483600000;

  test('date is a string: ', () => {
    expect(toTimestamp(dateStr)).toBe(1536483600000);
  });

  test('date is a date object: ', () => {
    expect(toTimestamp(dateObj)).toBe(1536483600000);
  });

  test('date is a timestamp: ', () => {
    expect(toTimestamp(dateTimestamp)).toBe(1536483600000);
  });
});