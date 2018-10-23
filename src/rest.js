/**
 * return new reset Array
 *
 * @since 1.3.0;
 * @category array;
 * @author fl2294;
 * @param sourceArr {array} the first array incoming;
 * @return {array};
 * @create_date 2018/10/23;
 * @modify_date 2018/10/23;
 * @example
 *
 * reset([1, 2, 3]);
 * // => [2,3]
 * reset([]);
 * // => []
 * reset([1, 2, 3], 2);
 * // => [3]
 */
import isArray from './isArray';
const rest = Array.rest || function(sourceArr, index = 1) {
  if(isArray(sourceArr)) {
    return undefined;
  }
  if(index <= 0) {
    index = 1;
  }
  return sourceArr.slice(index);
};

export default rest;