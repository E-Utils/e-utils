/**
 * Get element scrolling distance
 *
 * @since 1.2.0;
 * @category dom;
 * @author fl2294;
 * @param elem {dom object} origin dom;
 * @param target {number} find value;
 * @return {number|void};
 * @create_date 2018/09/17;
 * @modify_date 2018/09/17;
 * @example
 *
 * scrollTop(document)
 * // => 0
 *
 * // input in target
 * scrollTop(document, 200)
 * // => Scroll bar moves to 200.
 */

function scrollTop(elem, target) {
  function isWindow( elem ) {
    return elem != null && elem === elem.window;
  }
  let prop = 'pageYOffset';
  let win, top = 'pageYOffset' === prop;
  if ( isWindow( elem ) ) { // window
    win = elem;
  } else if ( elem.nodeType === 9 ) { // document
    win = elem.defaultView;
  }
  if ( target === undefined ) {
    // window|document => window.pageYOffset
    // dom => elem.scrollTop
    return win ? win[prop] : elem.scrollTop;
  }
  if ( win ) {
    win.scrollTo(
      !top ? target : win.pageXOffset,
      top ? target : win.pageYOffset
    );
  } else {
    elem.scrollTop = target;
  }
}

export default scrollTop;