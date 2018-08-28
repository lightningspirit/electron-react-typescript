const HtmlWebPackPlugin = require('html-webpack-plugin')

const env = process.env.NODE_ENV
const isDev = () => env === "development"

module.exports = [{
  target: "electron-main",
  mode: env,
  entry: "./src/electron/index.ts",
  devtool: isDev() ? "inline-source-map" : "source-map",
  output: {
    filename: "main.js",
    path: __dirname + '/build',
  },
  node: {
    __dirname: false,
    __filename: false
  },
  resolve: {
    extensions: [ ".ts", ".js", ".json" ]
  },
  module: {
    rules: [
      { 
        test: /\.tsx?$/, 
        loader: "ts-loader" 
      },

      { 
        test: /\.(jpg|png|svg|ico|icns)$/, 
        loader: "file-loader", 
        options: { 
          name: "images/[name].[ext]", 
        }, 
      },
    ]
  }
}, {
  target: "electron-renderer",
  mode: env,
  devtool: isDev() ? "inline-source-map" : "source-map",
  entry: [
    "./src/react/index.tsx",
    "./src/assets/scss/main.scss",
    "./src/views/index.html",
  ],
  output: {
    filename: "bundle.js",
    path: __dirname + '/build',
  },
  node: {
    __dirname: false,
    __filename: false
  },
  resolve: {
    extensions: [ ".ts", ".tsx", ".js", ".json" ]
  },
  module: {
    rules: [
      { 
        test: /\.tsx?$/, 
        loader: "ts-loader" 
      },

      {
        test: /\.(scss|css)$/,
        use: [
          { 
            loader: "style-loader" 
          },
          { 
            loader: "css-loader", 
            options: { 
              sourceMap: true 
            } 
          },
          { 
            loader: "sass-loader", 
            options: { 
              sourceMap: true
            } 
          },
        ],
      },

      { 
        test: /\.(jpg|png|svg|ico|icns)$/, 
        loader: "file-loader", 
        options: { 
          name: "images/[name].[ext]", 
        }, 
      },

      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: [
          { 
            loader: "html-loader", 
            options: { 
              exportAsEs6Default: true 
            } 
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/views/index.html",
      filename: "./index.html",
    }),
  ]
}]
