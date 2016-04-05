var gulp = require("gulp"),
    gutil = require("gulp-util"),
    webpack = require("webpack"),
    WebpackDevServer = require("webpack-dev-server"),
    path = require("path"),
    root = path.join(path.join(path.resolve(__dirname), '..'), '..'),
    webpackConfig = require("../webpack.config.js");

var webpackDevserverConfig = {
    contentBase: path.join(path.resolve(__dirname), '../..')
};

gulp.task("dev", function (callback) {
    var compiler = webpack(webpackConfig);

    new WebpackDevServer(compiler, {
        contentBase: root
    }).listen(8123, "localhost", function(err) {
        if(err) throw new gutil.PluginError("webpack-dev-server", err);
        // Server listening
        gutil.log("[webpack-dev-server]", "http://localhost:8123/webpack-dev-server/index.html");

        // keep the server alive or continue?
        // callback();
    });
});