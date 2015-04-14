module.exports = {
    dev: {
        options: {
            proxy: 'localhost:4000',
            watchTask: true
        },
        bsFiles: {
            src : 'dist/**/*.{css,html}'
        }
    }
};
