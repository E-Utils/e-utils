/**
 * The obj is not Array,
 *
 * @since 1.3.0;
 * @category array;
 * @author fl2294;
 * @param obj {array} the first array incoming;
 * @return {boolean};
 * @create_date 2018/10/23;
 * @modify_date 2018/10/23;
 * @example
 *
 * isArray([1, 2, 3]);
 * // => true
 * isArray(document.body.children);
 * // => false
 * isArray('abc');
 * // => false
 */

const isArray = Array.isArray || function(obj) {
  const ObjProto = Object.prototype;
  const toString = ObjProto.toString;
  return toString.call(obj) === '[object Array]';
};

export default isArray;