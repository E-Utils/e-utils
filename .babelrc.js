// const map = {
//   replace: 'eUtils/replace',
//   replaceAll: 'eUtils/replaceAll',
//   toLower: 'eUtils/toLower',
//   toUpper: 'eUtils/toUpper',
//   trim: 'eUtils/trim'
// };

module.exports = {
  presets: ['es2015', 'stage-2'],
  plugins: [
    'babel-plugin-transform-runtime',
    ['import', {
      libraryName: 'ff3',
      libraryDirectory: 'lib/eUtils',
      camel2UnderlineComponentName: false,
      camel2DashComponentName: false,
      customName:(name)=>{
        // if (!map[name]) {
        //   return false;
        // }
        return `/1/ff3/lib/eUtils/${name}`;
      },
    }]
  ],
};
