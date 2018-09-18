/**
 * Has
 *
 * @since 1.2.0
 * @category object;
 * @author caiyue;
 * @param obj {object}
 * @param path {string}
 * @create_date 2018/09/18;
 * @create_date 2018/09/18;
 *
 * @example
 *
 * has({a:{b:1}},'a.b');
 * /=> true;
 *
 */
const has = (obj, path) => {
  const attrList = path.split('.');
  let temp = obj, attr = '';
  for (let i = 0; i < attrList.length; i++) {
    attr = attrList[i];
    if (!temp.hasOwnProperty(attr)) {
      return false;
    } else {
      temp = temp[attr];
    }
  }
  return true;
};

export default has;
 