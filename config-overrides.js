const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
  addWebpackAlias({
    ['@features']: path.resolve(__dirname, './src/features'),
    ['@common']: path.resolve(__dirname, './src/common'),
    ['@utils']: path.resolve(__dirname, './src/utils'),
    ['@hooks']: path.resolve(__dirname, './src/hooks')
  })
);
