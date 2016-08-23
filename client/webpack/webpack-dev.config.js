import webpack from 'webpack'
import merge from 'webpack-merge'

import config from '../config'
import webpackConfig from './webpack.config'

const devConfig = {
	entry  : {
		app: [
      'webpack-hot-middleware/client?path=/__webpack_hmr',
      `${config.paths.app}/index.js`
    ]
	},
	devtool: 'cheap-module-eval-source-map',
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
  	new webpack.NoErrorsPlugin()
	]
}

export default merge.smart({}, webpackConfig, devConfig)