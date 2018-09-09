/**
 * scrollTop, 返回指定元素dom滚动条的距离
 *
 * @since 1.0.0;
 * @category dom;
 * @author fl2294;
 * @param array {array} origin array;
 * @param value {number/string} find value;
 * @param fromIndex {number} start number;
 * @return {number};
 * @create_date 2018/09/09;
 * @modify_date 2018/09/09;
 * @example
 *
 * indexOf([1, 2, 1, 2], 2)
 * // => 1
 *
 * // Search from the `fromIndex`
 * indexOf([1, 2, 1, 2], 2, 2)
 * // => 3
 */

function scrollTop() {
  let y = (window.pageYOffset !== undefined)
    ? window.pageYOffset
    : (document.documentElement || document.body.parentNode || document.body).scrollTop;


}