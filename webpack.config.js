var CleanWebpackPlugin = require("clean-webpack-plugin");

var config = {
    mode:"development",
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
    output: { filename: '../wwwroot/static/main.js' },
    plugins: [

        // clean wwwroot
        new CleanWebpackPlugin([
            '../wwwroot/static/main.js',
        ])
    ]
};
module.exports = config;