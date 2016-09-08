import webpack from 'webpack'
import autoprefixer from 'autoprefixer'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

import config from '../config'

export default {
  name: 'name',
  target: 'web',
  context: config.paths.app,
  entry: {
    vendor: [
      'babel-polyfill',
      'react',
      'react-redux',
      'react-router',
      'react-router-redux',
      'redux',
      'amstock3',
      'amcharts3/amcharts/serial',
      'amstock3/amcharts/amstock',
      'amstock3/amcharts/amcharts',
      'amcharts3/amcharts/themes/light'
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
      `${config.paths.app}`
    ],
    extensions: ['', '.js', '.jsx', '.scss', '.css', '.json']
  },
  postcss: [autoprefixer],
  sassLoader: {
    data: `@import "${config.paths.app}/core/theme/_config.scss";`
  },
  plugins: [
    new ExtractTextPlugin('main.css', { allChunks: true }),
    new webpack.DefinePlugin(config.globals),
    new HtmlWebpackPlugin({
      template: `${config.paths.app}/index.html`,
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
        test: /(\.scss|\.css)$/,
        loader: 'style!css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass?sourceMap'
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: "file-loader?name=img/img-[hash:6].[ext]"
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.svg$/,
        loader: 'raw-loader'
      }
    ]
  }
}
