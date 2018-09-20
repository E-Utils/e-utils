/**
 * Transform the date to timestamp;
 *
 * @since 1.2.0
 * @category Date;
 * @author yhm1694;
 * @param { Date | String | number } date: The date to be transformed;
 * @return { Number } timestamp: The timestamp;
 * @create_date 2018/09/20;
 * @modify_date 2018/09/20;
 *
 * @example
 *
 * toTimestamp(new Date());
 * // => 1536659540425;
 * 
 * toTimestamp('2018-09-09');
 * // => 1536451200000;
 * 
 * toTimestamp(1536422400000);
 * // => 1536451200000;
 */

const toTimestamp = (date) => {
  return (new Date(date)).getTime();
};

export default toTimestamp;