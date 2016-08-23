import express from 'express'
import path from 'path'
import historyApiFallback from 'connect-history-api-fallback'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

import config from './config'
import webpackDevConfig from './webpack/webpack-dev.config'
import webpackProdConfig from './webpack/webpack-prod.config'

// Server setup
const app = express()

app.use(express.static(config.paths.base))

app.use(historyApiFallback({
  verbose : true
}))

if (config.env === 'development') {
	const compiler = webpack(webpackDevConfig)
	const { publicPath } = webpackDevConfig.output

	const devMiddleWare = webpackDevMiddleware(compiler, {
    publicPath,
    contentBase: config.paths.app,
    hot: true,
    stats: {
      chunks : false,
	    chunkModules : false,
	    colors : true
    }
  })

	app.use(devMiddleWare)
	app.use(webpackHotMiddleware(compiler))

	app.listen(config.port, () => {
		console.log(`The server is running at http://${ config.host }:${ config.port }`);
	})

} else if (config.env === 'production') {
	const compiler = webpack(webpackProdConfig)

	compiler.run((error, results) => {
		if (error) { 
			console.log(`Error occured durring build: ${ error }`) 
		}
	})
}