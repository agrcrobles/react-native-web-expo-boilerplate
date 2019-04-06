const path = require("path");

const webpack = require("webpack");

const babelLoaderConfiguration = {
  test: /\.(js|jsx)$/,
  use: {
    loader: "babel-loader",
    query: {
      presets: ["@babel/preset-env", "@babel/preset-react"]
    }
  },
  // Add every directory that needs to be compiled by Babel during the build
  include: [
    path.resolve(__dirname, "./App.js"),
    path.resolve(__dirname, "./src/")
  ]
};

module.exports = {
  entry: path.join(__dirname, "src", "App.js"),
  module: {
    rules: [babelLoaderConfiguration]
  },
  output: {
    path: path.join(__dirname, "web", "dist"),
    filename: "bundle.js"
  },
  devtool: "source-map",
  plugins: [
    // `process.env.NODE_ENV === 'production'` must be `true` for production
    // builds to eliminate development checks and reduce build size. You may
    // wish to include additional optimizations.
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development")
    })
  ],

  resolve: {
    alias: {
      "react-native$": "react-native-web"
    },
    // If you're working on a multi-platform React Native app, web-specific
    // module implementations should be written in files using the extension
    // `.web.js`.
    extensions: [".web.js", ".js"]
  }
};
