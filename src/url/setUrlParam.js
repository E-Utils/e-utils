/**
 * set url param by object
 *
 * @since 1.0.0;
 * @category Object;
 * @author jiaguishan;
 * @param paramsObject {Object} param object;
 * @return no return
 * @create_date 2018/07/09;
 * @modify_date 2018/07/09;
 * @example
 *
 * current location href => http://web.ewt360.com
 * setUrlParam({
 *     id: 1,
 *     token: '807341-111-111aaa7a7a'
 * })
 * // => 'http://web.ewt360.com?id=1&token=807341-111-111aaa7a7a'
 *
 * current location href => http://web.ewt360.com?id=2
 * setUrlParam({
 *     id: 1,
 *     token: '807341-111-111aaa7a7a'
 * }, 'http://www.ewt360.com')
 * // => 'http://www.ewt360.com?id=1&token=807341-111-111aaa7a7a'
 */
function setUrlParam(targetParams, originUrl = window.location.href) {
  let resultUrl = originUrl;
  Object.entries(targetParams).forEach(([key, value]) => {
    const replaceReg = new RegExp('(^|)'.concat(key).concat('=([^&]*)(|$)'));
    const replaceText = key.concat('=').concat(value);
    if (resultUrl.match(replaceReg)) {
      const tmpReg = new RegExp('('.concat(key).concat('=)([^&]*)'), 'gi');
      resultUrl = originUrl.replace(tmpReg, replaceText);
    } else {
      const joinFlag = originUrl.match('[?]') ? '&' : '?';
      resultUrl = originUrl.concat(joinFlag).concat(replaceText);
    }
  });
  return resultUrl;
}

export default setUrlParam;
