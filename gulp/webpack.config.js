var webpack = require('webpack'),
    path = require('path'),
    root = path.join(path.resolve(__dirname), '..');

//console.log(__dirname);

module.exports = {

    resolve: {
        root: root,
        modulesDirectories: ['js', 'node_modules']
    },

    entry: {
        vendor: [
            'angular'
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
            { test: /\.css$/, loader: "style!css" },
            { test: /\.html$/, loader: 'raw', exclude: /node_modules/ }
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js', Infinity)
    ]
};