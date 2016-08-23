import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

import config from '../config'

const webpackConfig = {
	name: 'name',
	target: 'web',
	context: config.paths.app,
	entry: {
		app: [
      'webpack-hot-middleware/client?path=/__webpack_hmr',
      `${config.paths.app}/index.js`
    ],
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
    filename: '[name].[hash].js'
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
    new HtmlWebpackPlugin({
      template: `${ config.paths.app }/index.html`,
      hash: false,
      filename: 'index.html',
      inject: 'body'
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

export default webpackConfig