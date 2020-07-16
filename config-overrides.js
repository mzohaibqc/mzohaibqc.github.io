const rewiredReactHotLoader = require('react-app-rewire-hot-loader');
const webpack = require('webpack');

module.exports = function (config, env) {
  config = rewiredReactHotLoader(config, env);
  config.resolve.alias = {
    ...config.resolve.alias,
    'react-dom': '@hot-loader/react-dom',
  };
  if (!config.plugins) {
    config.plugins = [];
  }
  config.plugins.push(
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      document: 'document'
    })
  );

  return config;
}