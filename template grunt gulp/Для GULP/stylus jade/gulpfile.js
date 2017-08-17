"use strict";

var gulp = require("gulp");

/* jade*/
var jade = require("gulp-jade");

var stylus = require("gulp-stylus");

/*Водопроводчик. Продолжает обработку при ошибке*/
var plumber = require("gulp-plumber");

/*автопрефиксер*/
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");

/*Локальный разработч. сервер*/
var server = require("browser-sync").create();

/* обработка и запись в css файл*/
gulp.task("style", function(){

  gulp.src("stylus/style.styl")

    .pipe(plumber())

    .pipe(stylus())

    .pipe(postcss([
      autoprefixer({browsers: [
        "last 1 version",
        "last 2 Chrome versions",
        "last 2 Firefox versions",
        "last 2 Opera versions",
        "last 2 Edge versions"
      ]})
    ]))

    .pipe(gulp.dest("./builds/css"))
    /* Отслеживание изменения стилей для лок. сервера** */
    .pipe(server.stream());
});
   /* jade*/
// чтобы запустить эту задачу, наберите в командной строке gulp jade
gulp.task("jade", function() {
  return gulp.src("templates/**/*.jade")
    .pipe(jade())
    .pipe(gulp.dest("builds/"))
    .pipe(server.stream());
});

/* Локальный сервер*/
gulp.task("serve", function() {
  server.init({
    server: "./builds"
  });

  gulp.watch("stylus/**/*.styl", ["style"]);
  gulp.watch("templates/*.jade", ["jade"]);
  /* Отслеживание изменения html для лок. сервера с перезагрузкой** */
  gulp.watch("templates/*.jade")
    .on("change", server.reload);
});

gulp.task('default', ['serve', 'jade', 'style'])
