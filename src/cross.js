/**
 * two of array to cross,
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
 * cross([1, 3, 5, 6], [8, 8, 6, 3])
 * // => [3, 6]
 */

import unique from './unique';

//交集
function cross(arr1, arr2) {
  return unique(arr1).filter(o => {
    return arr2.includes(o) ? o : null;
  });
}

export default cross;