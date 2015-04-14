var _ = require('lodash');
var files = [
    './Gruntfile.js',
    './grunt/**/*.js',
    './webpack.config.js'
];
var options = {
    browser: true,
    curly: true,
    debug: true,
    eqeqeq: true,
    esnext: true,
    forin: false,
    indent: 4,
    latedef: true,
    node: true,
    noempty: true,
    nonbsp: true,
    strict: false,
    trailing: true,
    undef: true,
    quotmark: false,
    globals: {
        jQuery: false,
        $: false,
        console: false,
        angular: false
    }
};

module.exports = {
    options: {
        reporter: require('jshint-stylish')
    },
    dev: {
        options: options,
        files: {
            src: files
        }
    },
    prod: {
        options: _.extend(options, {
            debug: false,
            globals: {
                jQuery: false,
                $: false,
                console: true,
                angular: false
            }
        }),
        files: {
            src: files
        }
    }
};
