/**
 * two of array to union,
 *
 * @since 1.1.0;
 * @category array;
 * @author fl2294;
 * @param oneArr {array} the first array incoming;
 * @param twoArr {array} the second array incoming;
 * @return {array};
 * @create_date 2018/07/19;
 * @modify_date 2018/07/19;
 * @example
 *
 * union([1, 3, 5],  [6, 8, 8, 6, 3])
 * // => [1, 3, 5, 6, 8]
 */

import unique from './unique';

//并集
function union(oneArr, twoArr) {
  return unique(oneArr.concat(twoArr));
}

export default union;