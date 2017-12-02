const webpack = require('webpack');

const path = require('path');

const imageLoaderConfiguration = require('./loaderConfiguration')
  .imageLoaderConfiguration;
const babelLoaderConfiguration = require('./loaderConfiguration')
  .babelLoaderConfiguration;

const devServer = {
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    // enable HMR
    hot: true,
    // embed the webpack-dev-server runtime into the bundle
    inline: true,
    // serve index.html in place of 404 responses to allow HTML5 history
    historyApiFallback: true,
    port: 3000,
  },
};
module.exports = {
  // ...the rest of your config
  ...devServer,
  entry: [path.resolve(__dirname, '../index.web.js')],
  module: {
    rules: [
      babelLoaderConfiguration,
      imageLoaderConfiguration,
    ],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  plugins: [
    // `process.env.NODE_ENV === 'production'` must be `true` for production
    // builds to eliminate development checks and reduce build size. You may
    // wish to include additional optimizations.
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
  ],

  resolve: {
    // If you're working on a multi-platform React Native app, web-specific
    // module implementations should be written in files using the extension
    // `.web.js`.
    extensions: ['.web.js', '.js'],
  },
};
