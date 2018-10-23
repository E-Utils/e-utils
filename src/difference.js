/**
 * two of array to difference,
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
 * difference([1, 3, 5, 6], [8, 8, 6, 3, 2])
 * // => [1, 5]
 */

import unique from './unique';
import includes from './includes';

//差集
function difference(firstArr, secondArr){
  return unique(firstArr).filter(function(o){
    return includes(secondArr, o) ? null : o;
  });
}

export default difference;