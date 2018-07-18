const path = require('path');
let webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './app/app.js',
    output: {
      path: path.resolve(__dirname, 'static/js/'),
      filename: "[name].js",
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          }]
    },
    // plugins:[
    //   new HtmlWebpackPlugin({
    //     template: './static/index.html'
    //   })
    // ],
    devtool: "eval-source-map"
};
