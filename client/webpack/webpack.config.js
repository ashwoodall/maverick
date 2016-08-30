import autoprefixer from 'autoprefixer'
import webpack from 'webpack'
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
    extensions: ['', '.js', '.jsx', '.scss']
  },
  postcss: [autoprefixer],
  sassLoader: {
    data: `@import "${config.paths.app}/core/theme/_config.scss";`
  },
  plugins: [
    new webpack.DefinePlugin(config.globals),
    new webpack.optimize.CommonsChunkPlugin({ names: ['vendor'] }),
    new HtmlWebpackPlugin({
      template: `${ config.paths.app }/index.html`,
      hash: false,
      filename: 'index.html',
      inject: true
    })
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
        test    : /(\.scss|\.css)$/,
        loader: 'style!css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass?sourceMap'
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: "file-loader?name=img/img-[hash:6].[ext]"
      },
      {
        test: /\.svg$/,
        loader: 'babel!svg-react'
      }
    ]
  }
}