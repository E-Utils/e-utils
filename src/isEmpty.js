/**
 * isEmpty
 *
 * @since 1.2.0
 * @category object;
 * @author caiyue;
 * @param target {object}
 * @create_date 2018/09/18;
 * @create_date 2018/09/18;
 *
 * @example
 *
 * isEmpty([])
 * /=> true;
 *
 */
const isEmpty = (target) => {
  if (!!target === false) {
    // null/undefined/''/0
    return true;
  } else if (Array.isArray(target)) {
    // array
    return target.length === 0;
  } else if (typeof target[Symbol.iterator] === 'function') {
    //iterable obj
    return target[Symbol.iterator]().next().done;
  } else if (typeof target === 'object') {
    //simple obj
    return Object.getOwnPropertyNames(target).length === 0;
  } else {
    //basic true data type.
    return false;
  }
};

export default isEmpty;
 