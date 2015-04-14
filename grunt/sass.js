var path = require('path');

module.exports = {
    dist: {
        options: {
            cacheLocation: '<%= config.temp %>/.sass-cache',
            precision: 3,
            style: 'collapsed',
            sourcemap: 'file',
            compass: true
            //loadPath: [
            //    path.join(process.cwd(), 'node_modules/lego/src/scss/')
            //]
        },
        files: [
            {
                src: '<%= config.src %>/assets/css/styles.scss',
                dest: '<%= config.dist %>/assets/css/main.css'
            }
        ]
    }
};
