module.exports = function (js_dest) {
  return {
    minify: {
      options: {
        compress: {
          drop_console: true
        },
        beautify: {
          ascii_only : true,
          quote_keys: true
        }
      },
      files: [
       {
          expand: true,
          cwd: js_dest,
          src: ['**/*.js', '!**/*.min.js'],
          dest: js_dest,
          rename: function(dest, src) {
            var path = require('path');
            // Prefix each javascript file with the folder name into the destination
            var dest_src=dest + path.dirname(src);
            return path.join(dest_src , path.basename(src).replace('.js', '.min.js'));
          }
        }
      ]
    }
  }
}