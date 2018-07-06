/**
 * Replace global characters,
 * also 0x00000-0xfffff characters replace.
 *
 * @since 1.0.0;
 * @category string;
 * @author fl;
 * @param str {string} the first string incoming;
 * @param pattern {string|regexp} the second (string|regexp) incoming;
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
  let pattern = args[1];
  const replacement = args[2];
  const type = Object.prototype.toString.call(pattern);
  if (type === '[object String]') {
    const raRegExp = new RegExp(pattern, 'g');
    return str.replace(raRegExp, replacement);
  }
  let { flags } = pattern;
  const { source } = pattern;
  if (flags.indexOf('g') === -1) {
    flags += 'g';
    pattern = new RegExp(source, flags);
  }
  return str.replace(pattern, replacement);
}

export default replaceAll;
