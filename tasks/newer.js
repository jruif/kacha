module.exports = function (js_src, css_src) {
    return {
        js: {
            files: [
                js_src + '**/*.js',
                '!' + js_src + '**/*.min.js'
            ],
            tasks: ['uglify:minify'],
            reloasd:true
        },

        less: {
            files: [
                css_src + '*.less',
                css_src + '**/*.less'
            ],
            tasks: ['less:build', 'cssmin:minify']
        }
    }
}