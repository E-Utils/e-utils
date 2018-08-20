/**
 * Replace global characters,
 * also 0x00000-0xfffff characters replace.
 *
 * @since 1.0.0;
 * @category string;
 * @author fl2294;
 * @param str {string} the first string incoming;
 * @param sourcement {string} the second (string|regexp) incoming;
 * @param replacement {string} the second string incoming;
 * @return {string};
 * @create_date 2018/07/06;
 * @modify_date 2018/07/06;
 * @example
 *
 * replaceAll('𠮷abcdef𠮷Acdef', /𠮷/, 'k')
 * // => 'kabcdefkAcdef'
 */

function replaceAll(...args) {
  if (args.length < 3) return args[0];
  const str = args[0];
  const sourcement = args[1];
  const replacement = args[2];
  let raRegExp;
  const strType = Object.prototype.toString.call(sourcement);
  if(strType === '[object RegExp]') {
    let _sourcement = sourcement;
    if(_sourcement.flags.indexOf('g') <= -1) {
      _sourcement = RegExp(_sourcement.source, _sourcement.flags + 'g');
    }
    raRegExp = _sourcement;
  }
  if(strType === '[object String]') {
    raRegExp = new RegExp(sourcement, 'g');
  }
  return str.replace(raRegExp, replacement);
}

export default replaceAll;
