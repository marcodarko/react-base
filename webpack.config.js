

var path = require('path');
let webpack = require("webpack");

module.exports = {
    mode: 'production',
    entry: {
        app: './app/app.js',
        vendor: ["react","react-dom"]
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: "[name].js",
      publicPath: '/public/'
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader?cacheDirectory=true',
            }
        },
            {
                test: /\.js$/,
                use: 'babel-loader?cacheDirectory=true'
            }]
    },
    devtool: "eval-source-map"
};
