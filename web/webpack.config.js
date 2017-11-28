const webpack = require('webpack');

const path = require('path');

// This is needed for webpack to compile JavaScript.
// Many OSS React Native packages are not compiled to ES5 before being
// published. If you depend on uncompiled packages they may cause webpack build
// errors. To fix this webpack can be configured to compile to the necessary
// `node_module`.

const babelLoaderConfiguration = {
  test: /\.js$/,
  // Add every directory that needs to be compiled by Babel during the build
  include: [
    path.resolve(__dirname, '../index.web.js'),
    path.resolve(__dirname, '../src'),
  ],
  use: {
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
      // This aliases 'react-native' to 'react-native-web' and includes only
      // the modules needed by the app
      plugins: ['react-native-web/babel'],
      // The 'react-native' preset is recommended (or use your own .babelrc)
      presets: ['react-native'],
    },
  },
};

// This is needed for webpack to import static images in JavaScript files
const imageLoaderConfiguration = {
  test: /\.(gif|jpe?g|png|svg)$/,
  use: {
    loader: 'url-loader',
    options: {
      name: '[name].[ext]',
    },
  },
};
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
    rules: [babelLoaderConfiguration, imageLoaderConfiguration],
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
