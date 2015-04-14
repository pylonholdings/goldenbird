var path = require('path');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require(path.join(process.cwd(), 'webpack.config.js')).dev;

module.exports = {
    options: {
        publicPath: config.output.publicPath
    },
    start: {
        keepAlive: false,
        webpack: config,
        port: 4000,
        keepalive: false,
        contentBase: 'dist'
    }
};
