/**
 * Find the minimum value from the array;
 *
 * @since 1.2.0
 * @category Math;
 * @author yhm1694;
 * @param { Array } array: The array to search;
 * @return { String | Number } result: The minimum value;
 * @create_date 2018/09/11;
 * @modify_date 2018/09/11;
 *
 * @example
 *
 * min([1, 2, 3, 4]);
 *
 * // => 1
 * 
 * min(['A', 'B', 'C']);
 * 
 * // => 'A'
 */

const min = (array) => {
  let result;

  if (!array || !Array.isArray(array) || array.length === 0) {
    return result;
  }

  result = array.sort()[0];

  return result;
};

export default min;