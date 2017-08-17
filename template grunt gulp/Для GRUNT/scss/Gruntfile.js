"use strict";

module.exports = function(grunt) {
  require("load-grunt-tasks")(grunt);

  grunt.initConfig({
/* scss параметры*/
    sass: {
      style: {
        files: {
          "css/style.css": "sass/style.scss"
        }
      }
    },

/* postcss для префиксов параметры*/
    postcss: {
      options: {
        processors: [
          require("autoprefixer")({browsers: [
          "last 1 version",
          "last 2 Chrome versions",
          "last 2 Firefox versions",
          "last 2 Opera versions",
          "last 2 Edge versions"
          ]})
        ]
      },
      style: {src: "css/*.css"}
    },

/* отслеживает изменения для перекомпиляции  **проверить */
    watch: {
      style: {
      files: ["sass/**/*.scss"],
      tasks: ["sass", "postcss"]
      }
    },

/* локальный сервер*/
    browserSync: {
      server: {
        bsFiles: {
          src: ["*.html", "css/*.css"]
        },
        options: {
          server: "."
        }
      }
    }
                    
  });
};
