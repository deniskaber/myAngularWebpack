var webpack = require('webpack'),
    path = require('path'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    root = path.join(path.resolve(__dirname), '..');

//console.log(__dirname);

module.exports = {

    resolve: {
        root: root,
        modulesDirectories: ['js', 'node_modules'],
        alias: {
            'ui.router': 'angular-ui-router/release/angular-ui-router',
            'ui.grid': 'angular-ui-grid/ui-grid'
        }
    },

    entry: {
        vendor: [
            'angular',
            'angular-bootstrap-npm/dist/angular-bootstrap',
            'ui.router',
            'ui.grid'
        ],
        app: [
            'index.js'
        ]
    },
    output: {
        path: path.join(root, 'build'),
        publicPath: '',
        filename: '[name].bundle.js'
    },

    module: {
        loaders: [
            { 
                test: /\.css$/,
                loader: "style!css"
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader'),
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                loader: 'raw',
                exclude: /node_modules/
            }
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js', Infinity),
        new ExtractTextPlugin('styles.css')
    ],

    watch: true
};