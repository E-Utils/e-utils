/**
 * The obj is not Object,
 *
 * @since 1.3.0;
 * @category Object;
 * @author fl2294;
 * @param obj {Object} the first param every type incoming;
 * @return {boolean};
 * @create_date 2018/10/23;
 * @modify_date 2018/10/23;
 * @example
 *
 * isObject({});
 * // => true
 * isObject(document.body.children);
 * // => true
 * isObject([]);
 * // => true
 *  * isObject(null);
 * // => false
 */

const isObject = function(obj) {
  const type = typeof obj;
  return type === 'function' || type === 'object' && !!obj;
};

export default isObject;