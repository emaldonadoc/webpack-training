var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: __dirname + "/app",
  devServer: {
    inline:true,
    port: 8888
  },
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
       loader: ExtractTextPlugin.extract({fallback: 'style-loader',use: "css-loader!less-loader",})
     },
     {
         test: /\.(jpe?g|gif|png)$/,
         loader: 'file-loader?emitFile=false&name=[path][name].[ext]'
      }],
   },
   plugins: [
     new HtmlWebpackPlugin({template: __dirname + '/app/index.html'}),
     new ExtractTextPlugin("styles.css")
   ]
 }
