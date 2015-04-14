var path = require('path');

module.exports = function(grunt, options) {
    return {
        dev: {
            options: {
                variables: {
                    environment: 'dev'
                }
            }
        },
        prod: {
            options: {
                variables: {
                    environment: 'production'
                }
            }
        },
        aws: grunt.file.read(path.join(process.cwd(), 'configs/sample_s3Config.json'), {encoding: 'utf-8'}),
        content: 'src/pages',
        dist: 'dist',
        temp: 'temp',
        src: 'src'
    };
};
