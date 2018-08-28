/**
 * indexOf, Find where a specified string value first appears in the string
 *
 * @since 1.0.0;
 * @category array;
 * @author jiaguishan;
 * @param array {array} origin array;
 * @param value {number/string} find value;
 * @param fromIndex {number} start number;
 * @return {number};
 * @create_date 2018/08/27;
 * @modify_date 2018/08/27;
 * @example
 *
 * indexOf([1, 2, 1, 2], 2)
 * // => 1
 *
 * // Search from the `fromIndex`
 * indexOf([1, 2, 1, 2], 2, 2)
 * // => 3
 */
function indexOf(array, value, fromIndex) {
  const length = array === null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  let index = fromIndex ? +fromIndex : 0;
  if (index < 0) {
    index = Math.max(length + index, 0);
  }
  index = index - 1;
  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

export default indexOf;
