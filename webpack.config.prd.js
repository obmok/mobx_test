const path = require("path");

module.exports = {
  entry: "./src/index.js",
      mode: 'production',
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /(node_modules|bower_components)/,
            loader: "babel-loader",
            options: { presets: ["@babel/preset-env"] }
          },
          {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
          }
        ]
      },
      resolve: { extensions: ["*", ".js", ".jsx"] },
      output: {
        path: path.resolve(__dirname, "dist/"),
        publicPath: "/dist/",
        filename: "bundle.min.js"
      },
  }