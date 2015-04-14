module.exports = {
    options: {
        flatten: true,
        assets: '<%= config.dist %>/assets',
        layout: '<%= config.src %>/templates/layouts/wrapper.hbs',
        data: '<%= config.src %>/pages/**/*.{json,yml}',
        partials: '<%= config.src %>/templates/partials/*.hbs',
        environment: '<%= grunt.config.get("environment") %>',
        helpers: '<%= config.src %>/helpers/*.js'
    },
    pages: {
        files: [
            {
                src: ['**/*.hbs'],
                dest: '<%= config.dist %>/',
                cwd: '<%= config.content %>/',
                expand: true
            }
        ]
    }
};
