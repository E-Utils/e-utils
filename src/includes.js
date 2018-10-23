/**
 * find a value in array|string|object,
 *
 * @since 1.1.0;
 * @category array;
 * @author fl2294;
 * @param collection  {array|string|object} the first collection incoming;
 * @param value {array} the second value incoming;
 * @param fromIndex=0 {array} the three array incoming;
 * @return {boolean};
 * @create_date 2018/07/19;
 * @modify_date 2018/07/19;
 * @example
 *
 * difference([1, 3, 5, 6], [8, 8, 6, 3, 2])
 * // => [1, 5]
 */

//查找元素是否在指定集合中
function includes(collection, value, fromIndex = 0){
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
  if(Object.prototype.toString.call(collection) === '[object Array]') {
    collection = collection.slice(fromIndex, collection.length);
    for(let i = 0, len = collection.length; i < len; i++) {
      if(_hash(collection[i]) === _hash(value)) {
        return true;
      }
    }
    return false;
  }

  if(Object.prototype.toString.call(collection) === '[object String]') {
    collection = collection.substr(fromIndex);
    return collection.indexOf(value) > -1;
  }

  if(Object.prototype.toString.call(collection) === '[object Object]') {
    return collection.hasOwnProperty(value);
  }

  _hash = null;
  return false;
}

export default includes;