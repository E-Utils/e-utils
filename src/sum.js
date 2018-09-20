/**
 * Compute the sum of the values in 'array';
 *
 * @since 1.2.0
 * @category Math;
 * @author yhm1694;
 * @param { Array } array: The array to search;
 * @return { String | Number } result: The sum of the values;
 * @create_date 2018/09/20;
 * @modify_date 2018/09/20;
 *
 * @example
 *
 * sum([1, 2, 3, 4]);
 * // => 10
 * 
 * sum(['a', 'b', 'c']);
 * // => 'abc'
 */

import baseSum from './.internal/baseSum';

const sum = (array) => {
  return (array != null && array.length)
    ? baseSum(array, (value) => value) : 0;
};

export default sum;