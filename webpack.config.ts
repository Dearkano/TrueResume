var CleanWebpackPlugin=require ("clean-webpack-plugin")
import * as Webpack from 'webpack';
import * as path from "path";

var config = {
    mode:"production",
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'awesome-typescript-loader'
        }
        ]
    },
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    },

    resolve: {
        extensions: ['.js', '.ts','.jsx','.tsx']
    },
    entry: ['./App.tsx'],
    /*externals: {
        'react': 'React'
    },*/
    output: {
        path: path.resolve(__dirname, 'wwwroot/'),
        // should use absolute path
        publicPath: '/',
        filename: '../wwwroot/static/main.js'
    },
    plugins: [
        // clean wwwroot
        new CleanWebpackPlugin([
            'static/main.js',
        ]),
    ]
};
module.exports = config;