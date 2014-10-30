var paths = {
    js_src: 'assets/js',
    js_dest: 'assets/outfile/js/',
    css_src: 'assets/less/',
    css_dest: 'assets/outfile/style/'
}

module.exports = function (grunt) {

    /*  Load tasks  */

    require('load-grunt-tasks')(grunt);

    /*  Configure project  */

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: require('./tasks/concat')(paths.js_src, paths.js_dest), //合并js
        uglify: require('./tasks/uglify')(paths.js_dest),
        less: require('./tasks/less')(paths.css_src, paths.css_dest),
        remove:require("./tasks/remove")(paths.css_dest),
        cssmin: require('./tasks/cssmin')(paths.css_dest),
        watch: require('./tasks/watch')(paths.js_dest, paths.css_src)
    });

    /*  Register tasks  */

    // Default task.
    grunt.registerTask('default', ['less:build', 'cssmin:minify','watch']);

    grunt.registerTask('only-less', ['less:build', 'cssmin:minify']);

    grunt.registerTask('only-js', ['concat:build', 'uglify:minify']);
};
