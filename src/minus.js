/**
 * two of array to minus,
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
 * minus([1, 3, 5, 6], [8, 8, 6, 3, 2])
 * // => [1, 5]
 */

import unique from './unique';

//差集
function minus(oneArr, twoArr){
  return unique(oneArr).filter(function(o){
    return twoArr.includes(o) ? null : o;
  });
}

export default minus;