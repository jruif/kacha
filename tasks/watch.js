module.exports = function (js_dest, css_src) {
    return {
        js: {
            files: [
                js_dest + '**/*.js',
                js_dest + '**/*.min.js',
                //'!' + js_src + 'build/*.js'
            ],
            //tasks: ['coffee:compile', 'concat:build', 'uglify:minify'],
            tasks: ['newer:uglify:minify'],
            options:{spawn: false,reloasd:true}
        },
        less: {
            files: [
                css_src + '*.less',
                css_src + '**/*.less'
            ],
            tasks: ['newer:less:build', 'newer:cssmin:minify'],
            options:{
                livereload:true
            }
        }
    }
}
