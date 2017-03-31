var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');


var webpack = require('webpack');

module.exports = function (config) {
  config.set({
    browsers: ['PhantomJS'], //run in Chrome
    singleRun: true, //just run once by default
    frameworks: [ 'jasmine' ], //use the mocha test framework
    files: [
      { pattern: 'tests.webpack.js', watched: false },
    ],
    preprocessors: {
      'tests.webpack.js': 'webpack'  //preprocess with webpack and our sourcemap loader
    },
    reporters: [ 'dots' ], //report results in this format
    webpack: {
      module: {
        loaders: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query:{
                presets:['es2015', 'react']
            }
          },
           {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' }),
         },
         {
           test: /\.less$/,
           loader: ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: "css-loader!less-loader",
            })
         },
         {
             test: /\.(jpe?g|gif|png)$/,
             loader: 'file-loader?emitFile=false&name=[path][name].[ext]'
          }],
       },
      watch: true,
    },
    webpackServer: {
      noInfo: true //please don't spam the console when running in karma!
    }
  });
};
