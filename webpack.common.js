const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/client/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
            },
            {
              loader: 'sass-loader',
              options: {
                outputStyle: 'expanded',
              },
            },
          ],
        }),
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin([path.resolve(__dirname, './dist')]),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/client/index.html'),
      filename: 'index.html',
      inject: 'body',
    }),
    new ExtractTextPlugin('style.css'),
  ],
};
