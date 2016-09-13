import config from './config'
import webpackConfig from './webpack/webpack.base.config'

const karmaConfig = {
  singleRun: true,
	browsers: ['PhantomJS'],
	files: [
		{ pattern: `${config.paths.base}/webpack/webpack.test.config.js`, watched: false }
	],
	frameworks: ['mocha'],
	preprocessors: {
		[`${config.paths.base}/webpack/webpack.test.config.js`]: ['webpack']
	},
	webpack: {
		devtool: 'inline-source-map',
		resolve: webpackConfig.resolve,
		plugins: webpackConfig.plugins,
		externals: {
			'jsdom': 'window',
      'cheerio': 'window',
      'react/lib/ExecutionEnvironment': true
		},
		module: {
			loaders: webpackConfig.module.loaders
		},
		sassLoader: webpackConfig.sassLoader
	},
	webpackServer: {
    noInfo: true
  }
}

module.exports = (cfg) => cfg.set(karmaConfig)
