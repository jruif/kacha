module.exports = function (js_src, js_dest) {
    var paths = function (srcs) {
        for (var i = 0, l = srcs.length; i < l; i++) srcs[i] = js_src + srcs[i];
        return srcs;
    }

    return {
        build: {
            options: {
                separator: ';\n'
            },
            files: [
                // Bootstrap
                {
                    dest: js_dest + 'bootstrap.js',
                    src: paths([
                        'libs/bootstrap-3.1.1/transition.js',
                        'libs/bootstrap-3.1.1/alert.js',
                        'libs/bootstrap-3.1.1/button.js',
                        'libs/bootstrap-3.1.1/carousel.js',
                        'libs/bootstrap-3.1.1/collapse.js',
                        'libs/bootstrap-3.1.1/dropdown.js',
                        'libs/bootstrap-3.1.1/modal.js',
                        'libs/bootstrap-3.1.1/tooltip.js',
                        'libs/bootstrap-3.1.1/popover.js',
                        'libs/bootstrap-3.1.1/scrollspy.js',
                        'libs/bootstrap-3.1.1/tab.js',
                        'libs/bootstrap-3.1.1/affix.js'
                    ])
                }
            ]
        }
    }
}
