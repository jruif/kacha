module.exports = function (css_src, css_dest) {

    return {
        build: {
            options: {
                paths: [css_src]
            },
            files: [
                {
                    expand: true,
                    cwd: css_src,
                    src: ['**/*.less','!**/_*.less'],
                    dest: css_dest,
                    ext: '.css'
                }
            ]
        }
    }

}
