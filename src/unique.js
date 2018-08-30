/**
 * array to unique,
 *
 * @since 1.1.0;
 * @category array;
 * @author fl2294;
 * @param arr {array} the first array incoming;
 * @return {array};
 * @create_date 2018/07/19;
 * @modify_date 2018/07/19;
 * @example
 *
 * unique([1, 3, 5, 6, 8, 8, 6, 3, [1,2], [1,2], {item: 1, 2: 3}, {item: 1, 2: 3}])
 * // => [1, 3, 5, 6, 8, [1,2], {item: 1, 2: 3}]
 */

function unique(arr, iterator) {
  let _hash = (obj) => {
    let power = 1;
    let res = 0;
    const string = JSON.stringify(obj, null, 2);
    for (let i = 0, l = string.length; i < l; i++) {
      switch (string[i]) {
        case '{':
          power *= 2;
          break;
        case '}':
          power /= 2;
          break;
        case ' ':
        case '\n':
        case '\r':
        case '\t':
          break;
        default:
          res += string[i].charCodeAt(0) * power;
      }
    }
    return res;
  };

  let __arr = [];
  arr.forEach(item => {
    if(__arr.some(__item => _hash(__item) === _hash(item))) return;
    __arr.push(item);
  });
  _hash = null;
  if(iterator) {
    __arr = __arr.filter(iterator);
  }
  return __arr;
}

export default unique;