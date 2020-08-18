// app.js -> First up we have to let it know where the entry point is where does our application kick off for us
// We also have to tell it where to output the final bundle file. So we're creating that one big javascript file that contains everything our app needs to run.
const path = require('path');

module.exports = (env) => {
  const isProduction = env === 'production';
  return {
    // mode: 'development',
    // app entry point
    entry: './src/app.js',
    // output point
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'public'),
    },
    // module rules with loader
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.(css|scss)$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
      ],
    },
    // Webpack Developer Tool - for pointing out errors/console.log.out's in a complex components structure using browser console
    devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',

    // webpack development server
    devServer: {
      contentBase: './public',
      compress: true,
      watchContentBase: true,
    },
  };

  // A loader :
  // - lets you customize the behavior of web pack when it loads a given file.
  // - So for example anytime web package sees a .js file we will run it through BABEL
};
