const path = require("path");
const HtmlBundlerPlugin = require("html-bundler-webpack-plugin");

// define publicPath as a variable because it is used in many places:
// - output.publicPath
// - devServer.open
const publicPath = "/sub-path/";

module.exports = {
  output: {
    publicPath,
  },
  plugins: [
    new HtmlBundlerPlugin({
      entry: {
        // define all HTML templates here, the syntax is the same as Webpack entry
        index: {
          import: "./public/index.html", // => dist/index.html
          data: {
            title: "bar",
            name: "World",
          },
        },
        // use simple syntax when templates has't external variables
        //'pages/about': 'src/views/about/index.html', // output dist/pages/about.html
      },
      js: {
        filename: "js/[name].[contenthash:8].js", // output filename of extracted JS
      },
      css: {
        filename: "css/[name].[contenthash:8].css", // output filename of extracted CSS
      }
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(css|sass|scss)$/,
        use: ['css-loader'],
      },
    ],
  },

  devServer: {
    open: publicPath, // <= this must be same as output.publicPath
    compress: true,
    // enable watch changes in files
    watchFiles: {
      paths: ['src/**/*.*', 'public/**/*.*'],
      options: {
        usePolling: true,
      },
    },
  },
};
