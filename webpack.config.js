var webpack = require('webpack');

var webpackConfig = {
    output:{
        filename : '[name].min.js'
    },

    devtool: 'sourcemap',

    target: 'web',

    resolve: {
        extensions: ['', '.ts', '.js']
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader']
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app','vendor', 'polyfills']
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            mangle: {
                keep_fnames: true
            }
        })
    ]
};


module.exports = webpackConfig;