// Jeżeli wyjdzie GULP 4 to zamienić run-sequence na gulp.series !
// INSTALACJA PLUGINÓW
// npm install --save-dev gulp gulp-watch browser-sync gulp-sass gulp-autoprefixer gulp-plumber del gulp-useref gulp-if gulp-uglify gulp-imagemin run-sequence



//  Variables

var gulp = require("gulp");
var sass = require("gulp-sass");                    //kompilacja scss --> css i minifikacja csss
// var	autoprefixer = require('autoprefixer');    // dodanie wendor prefiksów
var postcss = require('gulp-postcss');
var	autoprefixer = require('gulp-autoprefixer');    // dodanie wendor prefiksów
var	watch = require('gulp-watch');                      // nasłuchiwanie zmian w plikach
var plumber = require('gulp-plumber');              // zapobiega przerywaniu zadań - obsługa błędów
var del = require("del");
var useref = require('gulp-useref');        // konkatenacja plików js bez minifikacji
var gulpif = require('gulp-if');            // sprawdzanie warunków
var uglify = require('gulp-uglify');        // minifikacja plików js
var imagemin = require('gulp-imagemin');    // kompresja obrazów
var runSequence = require('run-sequence');    // kompresja obrazów
var browserSync = require('browser-sync').create(); // przeładowanie przeglądarki


// styleSheets

gulp.task('styles', function() {
    return gulp.src("src/sass/main.scss")
    .pipe(plumber())  //  zapobiega przerywaniu zadań - obsługa błędów
    .pipe(sass.sync({  //   kompilacja SCSS → CSS
        outputStyle: "expanded"          // możliwości: nested, expanded, compact, compressed
    }))
    .pipe(postcss([ autoprefixer({ grid: true }) ]))  // dodanie wendor prefiksów
    // .pipe(autoprefixer({ grid: true }))	  // dodanie wendor prefiksów
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.stream())	// przeładowanie przeglądarki
});
// gulp.task('styles', function() {
//     return gulp.src("src/sass/main.scss")
//     .pipe(plumber())  //  zapobiega przerywaniu zadań - obsługa błędów
//     .pipe(sass.sync({  //   kompilacja SCSS → CSS
//         outputStyle: "expanded"          // możliwości: nested, expanded, compact, compressed
//     }))
//     .pipe(autoprefixer({ grid: true }))	  // dodanie wendor prefiksów
//     .pipe(gulp.dest('src/css'))
//     .pipe(browserSync.stream())	// przeładowanie przeglądarki
// });


//  JavaScript


gulp.task("scripts", function() {
    return gulp.src("src/*.html")
    .pipe(useref())
    .pipe(gulpif("*.js",uglify()))      // jeżeli plik ma rozszerzenie js, to wywołujemy uglify
    .pipe(gulp.dest("dist/"));
    })
 // w index html nalezy zgodnie ze wzorem podac:
// przykład do USEREF - konkatenacja plików, należy dodać:
// <html>
//     <head>
//         <!-- build:css css/combined.css -->                tutaj scieżka i nazwa nowego pliku
//         <link href="css/one.css" rel="stylesheet">
//         <link href="css/two.css" rel="stylesheet">
//         <!-- endbuild -->
//     </head>
//     <body>
//         <!-- build:js js/combined.js -->                    tutaj scieżka i nazwa nowego pliku
//          <script type="text/javascript" src="scripts/one.js"></script>
//          <script type="text/javascript" src="scripts/two.js"></script>
//         <!-- endbuild -->
//     </body>
// </html>


//  Images

gulp.task("images", function() {
    return gulp.src("dist/img/*", {      // tworzy obiekt aby pobrac pliki z bazy dist
        base: "dist/"
        })
    .pipe(imagemin())
    .pipe(gulp.dest("dist/"));
    });


// Automatyzacja

gulp.task('watch', function() {	                // nasłuchiwanie zmian w plikach
    gulp.watch('src/sass/**/*.scss', ['styles']);
    gulp.watch(["src/*.html", "src/**/*.js"], browserSync.reload);
});
    // gulp.watch(["src/*.scripts", "src/**/*.js"]).on('change', browserSync.reload);


gulp.task('clean', function() {	                // usunięcie katalogu dist - z wersją dystrybucyjna projektu
    return del("dist/")
});

gulp.task("copy", function() {
    return gulp.src(["src/css/**/*.css", "src/img/*"], {
    base: "src"
    })
    .pipe(gulp.dest("dist/"));
    })


gulp.task('server-sync', function() {     // stworzenie serwera w katalogu src
    browserSync.init({
    server: {
        baseDir: "src/"
        }
    });
});




// wykonywanie sekwencji zadań - wywoanie gulp build
// Jeżeli wyjdzie GULP 4 to zamienić to na gulp.series !

gulp.task("build", function() {
    runSequence("clean", "scripts", "copy", "images");
    })


//  Zadania domyślne

gulp.task("default", ["styles", "server-sync", "watch"]);   //wywołanie w terminalu: gulp






//układ katalogów:
// Project /src
//             css/main.css
//             img/
//             js/
//                 scripts.js
//                 jquery.js
//                 Itd.
//             scss/
//                 base/
//                 component/
//                 layout/
//                 helpers/
//                 itd.
//                 main.scss
//             index.html
//         /node_modules
//         /dist
//         .gitignore
//         gulpfile.js
//         package.json
//         package-lock.json