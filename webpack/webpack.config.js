/* eslint-disable global-require */
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

module.exports = (envVars) => {
  const { env } = envVars;
  let envConfig;
  if (env === 'dev') {
    envConfig = require('./webpack.dev');
  } else if (env === 'prod') {
    envConfig = require('./webpack.prod');
  }
  return merge(commonConfig, envConfig);
};
