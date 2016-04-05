var gulp = require("gulp"),
    gutil = require("gulp-util"),
    webpack = require("webpack"),
    path = require("path"),
    root = path.join(path.join(path.resolve(__dirname), '..'), '..'),
    webpackConfig = require("../webpack.config.js");

var webpackDevserverConfig = {
    contentBase: path.join(path.resolve(__dirname), '../..')
};

gulp.task("build", function(callback) {
    // run webpack
    webpack(webpackConfig, function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            // output options
        }));
        callback();
    });
});