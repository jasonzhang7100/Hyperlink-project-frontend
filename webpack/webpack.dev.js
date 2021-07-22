const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

module.exports = {
  mode: 'development',
  devServer: {
    hot: true,
    open: true,
    historyApiFallback: true,
  },
  devtool: 'cheap-module-source-map',
  plugins: [new ReactRefreshWebpackPlugin(),new NodePolyfillPlugin()],
};
