"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");

// создать резервную копию проекта чтобы не заруинить
// зависимости, пути до css и графики, не прописывал сборку svg спрайта
// .gitignore для модулей
// всё поместить в build перед оптимизацией
// ШРИФТЫ форматы


/*json
* "scripts": {
* "build": "gulp build",
* "start": "npm run build && gulp serve"
* }*/
//["style"] убрать?
var mqpacker = require("css-mqpacker");
var minify = require("gulp-csso");
var rename = require("gulp-rename");
var imagemin = require("gulp-imagemin");
var rename = require("gulp-rename");
var server = require("browser-sync").create();
var run = require("run-sequence");
var del = require("del");

// gulp build

gulp.task("style", function() {
    gulp.src("sass/style.scss")
        .pipe(plumber())
        .pipe(sass())
        .pipe(postcss([
            autoprefixer({browsers: [
                "last 2 versions"
            ]}),
            mqpacker({
                sort: true
            })
        ]))
        .pipe(gulp.dest("build/css"))
        .pipe(minify())
        .pipe(rename("style.min.css"))
        .pipe(gulp.dest("build/css"))
});

gulp.task("images", function() {
    return gulp.src("build/img/**/*.{png,jpg,gif}")
          .pipe(imagemin([
            imagemin.optipng({optimizationLevel: 3}),
            imagemin.jpegtran({progressive: true})
          ]))
    .pipe(gulp.dest("build/img"));
});

gulp.task("serve", function() {
    server.init({
        server: ".",
        notify: false,
        open: true,
        cors: true,
        ui: false
    });

    gulp.watch("sass/**/*.{scss,sass}", ["style"]);
    gulp.watch("*.html").on("change", server.reload);
});

gulp.task("copy", function() {
    return gulp.src([
        "fonts/**/*.{woff,woff2}",
        "img/**",
        "js/**",
        "*.html"
    ], {
        base: "."
    })
        .pipe(gulp.dest("build"));
});

gulp.task("clean", function () {
    return del("build");
});

gulp.task("build", function (fn) {
    run(
        "clean",
        "copy",
        "style",
        "images",
        fn);
});
