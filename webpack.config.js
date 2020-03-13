const path = require('path');

module.exports = (env) => {
    
    const isProdcution = env === 'production';

    return{
        entry: './src/app.js',
        output: {
           path: __dirname,
           filename: 'bundle.js'
       },
       module: {
           rules: [{
               loader: 'babel-loader',
               test: /\.js$/,
               exclude: /node_modules/
           },
           {
               test: /\.s?css$/,
               use: [
                   'style-loader',
                   'css-loader',
                   'sass-loader'
               ]
           }]
       },
       devtool: isProdcution ? 'source-map' : 'cheap-module-eval-source-map',
       devServer: {
           contentBase: __dirname,
           historyApiFallback: true
       }
   }
};