/**
 * Gets the location of the element in the entire page.
 *
 * @since 1.2.0;
 * @category dom;
 * @author fl2294;
 * @param elem {dom object} origin dom;
 * @param type {string} defalut '';
 * @return {number|object};
 * @create_date 2018/09/17;
 * @modify_date 2018/09/17;
 * @example
 *
 * position(document.getElemenstsByTag('body')[0], 'top')
 * position(document.getElemenstsByTag('body')[0], 'left')
 * // => 0
 *
 * position(document.getElemenstsByTag('body')[0])
 * // => {top: 0, left: 0}
 */
function position(elem, type='') {
  return type.toLowerCase() === 'left' ?
    elem.offsetLeft : (type.toLowerCase() === 'top' ?
      elem.offsetTop : {
        top: elem.offsetTop,
        left: elem.offsetLeft
      });
}

export default position;