/**
 * Get Cookie
 *
 * @since 1.1.0
 * @category storage;
 * @author caiyue823;
 * @param name, {string} cookie name
 * @param isObject, {boolean} is the return an object,using JSON.parse
 * @return value;
 * @create_date 2018/08/27;
 * @modify_date 2018/08/27;
 *
 * @example
 *
 * getCookie('name');
 *
 * // => 'value'
 */
import Cookies from 'js-cookie';

const getCookie = (name, isObject) => {
  if (isObject) {
    try {
      return Cookies.getJSON(name);
    } catch (e) {
      return null;
    }
  } else {
    return Cookies.get(name);
  }
};

export default getCookie;
 