var g = require('gulp');
g.task("autoprefix" , function () {
    var _prefixer = require("gulp-autoprefixer");
    g.src("changePlaces/css/*.css")
        .pipe(_prefixer({
            browsers:['last 2 versions'],
            cascade : true,
            remove : true
        }))
        .pipe(g.dest("changePlaces/dist/css"));
});
g.task('watch' , function () {
    var _load = require('gulp-livereload');
    _load.listen();
    g.watch("**/*.*" , function (file) {
        _load.changed(file.path);
    });
});
g.task("default" , ["autoprefix"]);

