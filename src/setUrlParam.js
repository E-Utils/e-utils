/**
 * set url param by object
 *
 * @since 1.0.0;
 * @category Object;
 * @author jiaguishan;
 * @param paramsObject {Object} param object;
 * @return no return
 * @create_date 2018/07/09;
 * @modify_date 2018/07/18;
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
  const keys = Object.keys(targetParams);
  let i = keys.length;
  let resArray =[];

  while(i--){
    resArray[i] = [keys[i], targetParams[keys[i]]];
  }

  resArray.forEach(([key, value]) => {
    const replaceReg = new RegExp(`(^|)${key}=([^&]*)(|$)`);
    const replaceText = `${key}=${value}`;
    if (resultUrl.match(replaceReg)) {
      const tmpReg = new RegExp(`(${key}=)([^&]*)`, 'gi');
      resultUrl = resultUrl.replace(tmpReg, replaceText);
    } else {
      const joinFlag = resultUrl.match('[?]')
        ? '&'
        : '?';
      resultUrl = `${resultUrl}${joinFlag}${replaceText}`;
    }
  });

  return resultUrl;
}

export default setUrlParam;
