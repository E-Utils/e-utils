/**
 * Remove Cookie
 *
 * @since 1.1.0
 * @category storage;
 * @author caiyue823;
 * @return
 * @create_date 2018/08/27;
 * @modify_date 2018/08/27;
 *
 * @example
 *
 * removeCookie('name',{path:'/the/correct/cookie/path'});
 * @argument name string
 * @argument config object, sample:{
 *  domain:'www.domain.com',        (string, indicating a valid domain where the cookie should be visible. The cookie will also be visible to all subdomains.)
 *  path:'/cookie/path',            (string,  indicating the path where the cookie is visible.)
 * }
 * IMPORTANT! when deleting a cookie, you must pass the exact same path and domain attributes that was used to set the cookie.
 *
 */
import Cookies from 'js-cookie';

const removeCookie = (name, config) => {
  Cookies.remove.call(null, name, config);
};

export default removeCookie;
 