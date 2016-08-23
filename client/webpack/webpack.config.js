import webpack from 'webpack'
import CleanWebpackPlugin from 'clean-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'

import config from '../config'

export default {
  name: 'name',
  target: 'web',
  context: config.paths.app,
  entry: {
    vender: [
      'babel-polyfill',
      'react',
      'react-redux',
      'react-router',
      'react-router-redux',
      'redux'
    ]
  },
  output: {
    path: config.paths.dist,
    pathInfo: true,
    publicPath: '/',
    filename: '[name]-[hash].js'
  },
  resolve: {
    root: config.paths.base,
    modulesDirectories: [
      'node_modules',
      `${ config.paths.app }`
    ],
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.DefinePlugin(config.globals),
    new webpack.optimize.CommonsChunkPlugin({ names: ['vendor'] }),
    new HtmlWebpackPlugin({
      template: `${ config.paths.app }/index.html`,
      hash: false,
      filename: 'index.html',
      inject: true
    }),
    new CleanWebpackPlugin(['dist'], {
      root: config.paths.app,
      verbose: true,
      dry: false
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          plugins: ['transform-runtime'],
          presets: ['es2015', 'react', 'stage-0']
        }
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: "file-loader?name=img/img-[hash:6].[ext]"
      }
    ]
  }
}