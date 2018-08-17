/**
 * Remove specified characters before and after,
 * also support 0x00000-0xfffff characters remove.
 *
 * @since 1.0.0;
 * @category string;
 * @author fl2294;
 * @param str {string} the first string incoming;
 * @param chars {string} the second string incoming;
 * @return {string};
 * @create_date 2018/07/06;
 * @modify_date 2018/07/06;
 * @example
 *
 * trim('#sadcdba#s', '#s') trim('  dsa  ') trim('𠮷abbb𠮷a', '𠮷a')
 * // => 'adcdba'  'dsa'  'bbb'
 */

function trim(str, chars) {
  if (str && chars === undefined) {
    return str.trim();
  }
  if (!str || !chars) {
    return str;
  }
  const r = `(^${chars})|(${chars}$)`;
  str = str.replace(new RegExp(r, 'gu'), '');
  return str;
}

export default trim;
