import generateUUID from '../src/generateUUID';

const generateUUIDArr = (len) => {
  const uuidArr = [];

  for (let i = 0; i < len; i++) {
    uuidArr[i] = generateUUID();
  }

  return uuidArr;
};

describe('Generate UUID test', () => {
  const len1 = 10;
  const len2 = 100;
  const uuidArr1 = generateUUIDArr(len1);
  const uuidArr2 = generateUUIDArr(len2);

  describe('Function generateUUID test - generateUUID()', () => {
    test('Generate 10 uuids and they are all not same', () => {
      for (let j = 0; j < len1; j++) {
        for (let k = j + 1; k < len1; k++) {
          expect(uuidArr1[j]).not.toBe(uuidArr1[k]);
        }
      }
    });

    test('Generate 100 uuids and they are all not same', () => {
      for (let j = 0; j < len2; j++) {
        for (let k = j + 1; k < len2; k++) {
          expect(uuidArr2[j]).not.toBe(uuidArr2[k]);
        }
      }
    });
  });
});
