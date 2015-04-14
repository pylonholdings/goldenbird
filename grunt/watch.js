module.exports = {
    options: {
        livereload: 35729
    },
    sass: {
        files: ['<%= config.src %>/assets/css/*.scss',],
        tasks: ['sass', 'clean:post']
    },
    html: {
        files: ['<%= config.src %>/{templates,pages}/**/*.hbs'],
        tasks: ['config:dev', 'assemble']
    },
    configFiles: {
        options: {
            reload: true
        },
        files: [ 'Gruntfile.js', 'grunt/*.js', 'webpack.config.js' ],
        tasks: ['jshint'],
    }
};
