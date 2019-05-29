const { override, addBabelPlugin } = require('customize-cra');

const rootImport = addBabelPlugin([
  'root-import',
  {
    rootPathPrefix: '~',
    rootPathSuffix: 'src',
  },
]);

module.exports = override(rootImport);
