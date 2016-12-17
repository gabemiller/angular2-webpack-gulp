var webpack = require('webpack');

var webpackConfig = {
    output:{
        filename : '[name].js',
        libraryTarget: 'commonjs2'
    },

    devtool: 'sourcemap',

    target: 'node',

    resolve: {
        extensions: ['', '.ts', '.js'],
        modules: [ './node_modules' ]
    },

    context: __dirname,

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
            name: ['server']
        }),
        new webpack.IgnorePlugin(/vertx/)
    ]
};


module.exports = webpackConfig;