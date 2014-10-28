module.exports = function (css_dest) {
    return {
        remove: {
            fileList: ['**/*.min.css','!**/*.css'],
            dirList: [css_dest],
            option: {
                trace: true
            }
        }
    }
}