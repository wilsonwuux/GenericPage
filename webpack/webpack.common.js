const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');//es un clase 

// es un objeto de la clase HtmlWebpackPlugin 
const htmlWebpack = new HtmlWebpackPlugin({
    template:'./assets/index.template.html',
    filename:'index.html'
})

module.exports = {
  entry: './assets/javascript/entry.js',
  output: {
    publicPath: '/',
    path: path.join(__dirname, '..'),
    filename: 'dist/javascript/bundle.js'
  },
  // se para el objeto con el template se recarga el servidor 

  plugins: [htmlWebpack],
   // module configuracion de loader para SAAS
   //rules argumentos o loader a procesar 
   //use de url en css use uso  loader url ? 
  module: {
     
      rules:[
          {
            test:/\.jpg$/,
            loader:'url-loader'
          }
    ]
  }
};
