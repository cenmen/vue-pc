const path = require('path')
const { DefinePlugin } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

const { NODE_ENV } = process.env

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  entry: './src/main.js',
  output: {
    filename: 'js/[name].bundle.[contenthash:6].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist')
    },
    compress: true,
    port: 9000,
    hot: true,
    // open: true,
    proxy: {
      '/dev': {
        target: 'http://localhost:3000',
        secure: true,
        pathRewrite: {
          '^/dev': ''
        }
      },
      // '/test': {
      //   target: 'http://localhost:3001',
      //   secure: true,
      //   pathRewrite: {
      //     '^/test': ''
      //   }
      // }
    }
  },
  plugins: [
    new DefinePlugin({
      ENV: JSON.stringify(NODE_ENV)
    }),
    new HtmlWebpackPlugin({
      title: '首页',
      template: 'template.html'
    }),
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[hash][ext][query]'
        }
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.mjs', '.vue'],
    alias: {
      '@': path.resolve(__dirname, '/src')
    }
  }
}
