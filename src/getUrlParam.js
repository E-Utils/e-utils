/**
 * get url param by name
 *
 * @since 1.0.0;
 * @category string;
 * @author jiaguishan;
 * @param name {string} param key;
 * @return {string};
 * @create_date 2018/07/09;
 * @modify_date 2018/07/18;
 * @example
 *
 * getUrlParam('token')
 * // => '807351-999-1asdni7asdn61621e8'
 */
function getUrlParam(key, originUrl) {
  const reg = new RegExp('(^|&)'.concat(key).concat('=([^&]*)(&|$)'), 'i');
  originUrl = originUrl ? originUrl.toString() : window.location.href;
  const index = originUrl.indexOf('?');
  const result = originUrl
    .substr(index + 1)
    .match(reg);
  if (result != null) {
    return unescape(result[2]);
  }
  return '';
}

export default getUrlParam;
