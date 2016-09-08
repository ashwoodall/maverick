import express from 'express'
import path from 'path'
import historyApiFallback from 'connect-history-api-fallback'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

import config from './config'
import webpackDevConfig from './webpack/webpack.dev.config'

// Server setup
const app = express()

app.use(express.static(config.paths.base))

app.use(historyApiFallback({
  verbose : true
}))

const compiler = webpack(webpackDevConfig)
const { publicPath } = webpackDevConfig.output

compiler.plugin('compile', () => {
  console.log('Compiling Source...')
})

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
  console.log(`The server is running at http://${config.host}:${config.port}`);
})
