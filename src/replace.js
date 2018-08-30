/**
 * Replaces matches for `pattern` in `string` with `replacement`,
 * default is not global repalce,
 * also 0x00000-0xfffff characters replace.
 *
 * @since 1.0.0;
 * @category string;
 * @author fl;
 * @param str {string} the first string incoming;
 * @param pattern {string|regexp} the second (string|regexp) incoming;
 * @param replacement {string} the third string incoming;
 * @return {string};
 * @create_date 2018/07/06;
 * @modify_date 2018/07/06;
 * @example
 *
 * replace('hello world', /o/, 'hi')
 * // => 'hellhi world'
 */

function replace(...args) {
  const str = `${args[0]}`;
  return args.length < 3 ? str : str.replace(args[1], args[2]);
}

export default replace;
