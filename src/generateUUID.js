/**
 * Generate UUID, maybe used to render react list;
 *
 * @since 1.1.0
 * @category string;
 * @author yhm1694;
 * @return { string } uuid;
 * @create_date 2018/08/22;
 * @modify_date 2018/08/22;
 *
 * @example
 *
 * generateUUID();
 *
 * // => 'af22-3fa8-4028-8dea-30a2'
 */

const generateUUID = () => {
  const uuid =  'xxxx-xxxx-xxxx-xxxx-xxxx'.replace(/[x]/g, function() {
    const randomNum = Math.random() * 16 | 0;
    const newChar = randomNum.toString(16);

    return newChar;
  });

  return uuid;
};

export default generateUUID;
 