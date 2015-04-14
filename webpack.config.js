var path = require('path');
var _ = require('lodash');
var webpack = require('webpack');
var excludedDirs = [
    /node_modules/,
    /bower_components/,
    /global/
];
var plugins = [
    new webpack.ResolverPlugin([
        new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
    ], ['normal', 'loader']),

    new webpack.ContextReplacementPlugin(/.*$/, /a^/),

    new webpack.ProvidePlugin({
        'angular': 'exports?window.angular!bower/angular'
    })
];
var devPlugins = [
    new webpack.DefinePlugin({
        __DEV__: true
    }),

    new webpack.HotModuleReplacementPlugin(),

    new webpack.NoErrorsPlugin()
];
var prodPlugins = [
    new webpack.DefinePlugin({
        __DEV__: false
    }),

    new webpack.optimize.DedupePlugin(),

    new webpack.optimize.UglifyJsPlugin({
        compress: {
            conditionals: false,
            warnings: false
        },
        sourceMap: false
    })
];
var jshintConfig = function(env) {
    return _.extend({
        emitErrors: true,
        failOnHint: true
    }, require('./grunt/jshint')[env].options);
};

exports.dev = {
    entry: {
        home: './src/assets/js/index.js',
        hot: 'webpack/hot/only-dev-server',
        server: 'webpack-dev-server/client?http://localhost:4000'
    },
    output: {
        path: path.join(__dirname, 'dist/assets/js'),
        publicPath: '/assets/js/',
        filename: '[name].bundle.js'
    },
    jshint: jshintConfig('dev'),
    jsx: {
        insertPragma: 'React.DOM'
    },
    module: {
        preLoaders: [
            { test: /\.jsx?/, exclude: excludedDirs, loader: 'jsxhint-loader' }
        ],
        loaders: [
            { test: /\.jsx$/, exclude: excludedDirs, loaders: [ 'react-hot', '6to5-loader' ]},
            { test: /\.js$/, exclude: excludedDirs, loaders: [ 'react-hot', '6to5-loader' ]},
            { test: /\.hbs$/, loader: 'handlebars-loader?helperDirs[]=' + __dirname + '/src/helpers' }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.hbs'],
        modulesDirectories: ['node_modules'],
        root: [
            path.join(__dirname, '/src/assets/js/global')
        ],
        alias: {
            bower: path.join(__dirname, 'bower_components')
        }
    },
    plugins: plugins.concat(devPlugins),
    devtool: 'source-map',
    watch: true
};

exports.prod = {
    entry: {
        home: './src/assets/js/index.js'
    },
    output: {
        path: path.join(__dirname, 'dist/assets/js'),
        publicPath: '/assets/',
        filename: '[name].bundle.js'
    },
    jshint: jshintConfig('prod'),
    jsx: {
        insertPragma: 'React.DOM'
    },
    module: {
        preLoaders: [
            { test: /\.jsx?/, exclude: excludedDirs, loader: 'jsxhint-loader' }
        ],
        loaders: [
            { test: /\.jsx$/, exclude: excludedDirs, loader: '6to5-loader' },
            { test: /\.js$/, exclude: excludedDirs, loader: '6to5-loader' },
            { test: /\.hbs$/, loader: 'handlebars-loader?helperDirs[]=' + __dirname + '/src/helpers' }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.hbs'],
        modulesDirectories: ['node_modules'],
        root: [
            path.join(__dirname, '/src/assets/js/global')
        ],
        alias: {
            bower: path.join(__dirname, 'bower_components')
        }
    },
    plugins: plugins.concat(prodPlugins)
};
