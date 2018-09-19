/**
 * Find the maximum value from the array;
 *
 * @since 1.2.0
 * @category Math;
 * @author yhm1694;
 * @param { Array } array: The array to search;
 * @return { String | Number } result: The maximum value;
 * @create_date 2018/09/10;
 * @modify_date 2018/09/10;
 *
 * @example
 *
 * max([1, 2, 3, 4]);
 *
 * // => 4
 */

const max = (array) => {
  let result;

  if (!array || !Array.isArray(array) || array.length === 0) {
    return result;
  }

  result = array.sort().reverse()[0];

  return result;
};

export default max;