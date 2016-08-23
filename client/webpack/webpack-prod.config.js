import webpack from 'webpack'
import { cloneDeep } from 'lodash'

import config from '../config'
import webpackConfig from './webpack.config'

webpackConfig.devtool = 'source-map'
webpackConfig.plugins = webpackConfig.plugins.concat([
	new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }),
  new webpack.optimize.AggressiveMergingPlugin(),
])

export default webpackConfig