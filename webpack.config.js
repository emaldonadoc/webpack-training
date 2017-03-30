var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: __dirname + "/app",
  entry: {
    javascript: "./app.js"
  },
  output: {
    filename: "app.js",
    path: __dirname + "/dist",
  },
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
       loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'less-loader' }) // compiles Less to CSS
     }],
   },
   plugins: [
     new HtmlWebpackPlugin({template: __dirname + '/app/index.html'}),
     new ExtractTextPlugin("styles.css")
   ]
 }
