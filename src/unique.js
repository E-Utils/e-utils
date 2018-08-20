/**
 * array to unique,
 *
 * @since 1.1.0;
 * @category array;
 * @author fl2294;
 * @param arr {array} the first array incoming;
 * @return {array};
 * @create_date 2018/07/19;
 * @modify_date 2018/07/19;
 * @example
 *
 * unique([1, 3, 5, 6, 8, 8, 6, 3])
 * // => [1, 3, 5, 6, 8]
 */

function unique(arr) {
  return [...new Set(arr)];
}

export default unique;