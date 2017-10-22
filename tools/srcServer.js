import historyApiFallback from 'connect-history-api-fallback';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import {chalkSuccess} from './chalkConfig';
import config from '../webpack.config.dev';
import express from 'express';
import http from 'http';

const bundler = webpack(config);
const app = express();
const server = http.createServer(app);
console.log(chalkSuccess('Starting Express server...'));

app.use(express.static('src/*.html'));
app.use(historyApiFallback());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(webpackHotMiddleware(bundler));

app.use(webpackDevMiddleware(bundler, {
  // Dev middleware can't access config, so we provide publicPath
  publicPath: config.output.publicPath,

  // These settings suppress noisy webpack output so only errors are displayed to the console.
  noInfo: false,
  quiet: false,
  stats: {
    assets: false,
    colors: true,
    version: false,
    hash: false,
    timings: false,
    chunks: false,
    chunkModules: false
  },

  // for other settings see
  // http://webpack.github.io/docs/webpack-dev-middleware.html
}));
server.listen(3000);
console.log(chalkSuccess('Express server is listening on port: ' + server.address().port));
