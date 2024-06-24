const path = require("path");

//定义插件
const HtmlWebpackPlugin = require("html-webpack-plugin"); //自动生成html文件的插件
const CleanWebpackPlugin = require("clean-webpack-plugin"); //清除之前打包的文件

module.exports = {
  entry: "./src/js/entry.js", //入口文件的配置
  output: {
    //输出文件的配置
    filename: "bundle.js", //输出文件名
    //publicPath: "js/", //设置为index.html提供资源服务的时候带有强制执行
    path: path.resolve(__dirname, "dist/js/"), //输出文件路径
  },

  //所有loader配置
  module: {
    rules: [{
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: "url-loader", //可以将小于8kb大小得图片以base64格式打包到js中
          options: {
            limit: 8192, //文件大小
          },
        }],
      },
    ],
  },

  //使用webpack插件
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html"
    }),
    new CleanWebpackPlugin(['dist']),
  ],

  //配置服务，自动打包编译
  devServer: {
    //contentBase: "dist/", //设置服务器访问的根路径,webpack-dev-server默认服务于根路径下index.html
    host: "localhost", //服务器的IP地址
    port: "5500", //端口
    open: true, //默认自动打开页面
  },
};