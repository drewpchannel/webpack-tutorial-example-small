var webpack = require('webpack');

module.exports = {
    context: __dirname + '/app',
    entry: {
        app: './app.js',
    },
    output: {
        path: __dirname + '/js',
        filename: 'app.bundle.js'
    },
};