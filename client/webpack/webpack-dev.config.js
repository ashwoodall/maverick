import webpack from 'webpack'
import { merge } from 'lodash'

import config from '../config'
import webpackConfig from './webpack.config'

webpackConfig.devtool = 'cheap-module-eval-source-map'
webpackConfig.plugins = webpackConfig.plugins.concat([
	new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin()
])

export default webpackConfig