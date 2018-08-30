/**
 * Set Cookie
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
 * setCookie('name','value');
 * @argument name string
 * @argument value string/object, if value is an object, it will be parsed by JSON.stringify,
 * and you can get it as an object using getCookie('key',true)
 * @argument config object, sample:{
 *  expires:7                       (number, indicating how many days should the cookie expired)
 *  domain:'www.domain.com',        (string, indicating a valid domain where the cookie should be visible. The cookie will also be visible to all subdomains.)
 *  path:'/cookie/path',            (string,  indicating the path where the cookie is visible.)
 *  secure:true                     (boolean, indicating if the cookie transmission requires a secure protocol (https))
 * }
 *
 */
import Cookies from 'js-cookie';

const setCookie = (name, value, config) => {
  Cookies.set.call(null, name, value, config);
};

export default setCookie;
 