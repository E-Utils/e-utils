/**
 * two of array to cross,
 *
 * @since 1.1.0;
 * @category array;
 * @author fl2294;
 * @param firstArr {array} the first array incoming;
 * @param secondArr {array} the second array incoming;
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
function intersection(firstArr, secondArr) {
  return unique(firstArr).filter(o => {
    return secondArr.includes(o) ? o : null;
  });
}

export default intersection;