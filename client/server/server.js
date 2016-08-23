import express from 'express'
import path from 'path'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

import config from '../config'
import webpackDevConfig from '../webpack/webpack-dev.config'

// Server setup
const app = express()

app.use(express.static(config.paths.app))

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

	app.get('*', function (req, res, next) {
	  const memoryFs = compiler.outputFileSystem
    const index = path.join(compiler.outputPath, 'index.html')

    memoryFs.readFile(index, (error, result) => {
	    if (error) { return next(error) }

	    res.set('content-type','text/html')
	    res.send(result)
	    res.end()
    })
	})

	app.listen(config.port, () => {
		console.log(`The server is running at http://${ config.host }:${ config.port }`);
	})

} else if (config.env === 'production') {
	const compiler = webpack(require('../webpack/webpack-prod.config'))

	compiler.run((error, results) => {
		if (error) { 
			console.log(`Error occured durring build: ${ error }`) 
			return 
		}

		console.log(`Build successful: ${ results }`)
	})
}