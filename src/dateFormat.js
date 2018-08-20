/**
 * Date format and output the formatted date;
 *
 * @since 1.0.0
 * @category date;
 * @author yhm1694;
 * @param { number | Date } date, the origin date which you want to format;
 * @param { string } format, the format that the date you want to output;
 * @return { string } formatDate, return the formatted date;
 * @create_date 2018/07/15;
 * @modify_date 2018/07/15;
 *
 * @example
 *
 * dateFormat(1531643785284, 'yyyy-MM-dd');
 *
 * // => '2018-07-15'
 */

const dateFormat = (date, format) => {
  if (!format) {
    return date;
  }

  let formattedDate;
  date = new Date(date);

  const regObj = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    'q+': Math.floor((date.getMonth() + 3) / 3),
    'S': date.getMilliseconds(),
  };
  const keys = Object.keys(regObj);

  if (/(y+)/.test(format)) {
    formattedDate = format.replace(
      RegExp.$1,
      (`${date.getFullYear()}`).substr(4 - RegExp.$1.length));
  }

  keys.forEach((item) => {
    if ((new RegExp(`(${item})`)).test(format)) {
      formattedDate = formattedDate.replace(
        RegExp.$1,
        (RegExp.$1.length === 1) ?
          (regObj[item]) : ((`00${regObj[item]}`).substr((`${regObj[item]}`).length)));
    }
  });

  return formattedDate;
};

export default dateFormat;
