const merge = require("webpack-merge");
const portfinder = require("portfinder");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const baseConfig = require("./webpack.base.js");

const devConfig = merge.merge(baseConfig, {
  // 模式
  mode: "development",
  devtool: "cheap-module-source-map",
  plugins: [new ReactRefreshWebpackPlugin()],
  devServer: {
    host: "192.168.101.79", // 启动服务域名
    open: true, // 启动服务端口
    port: 3000, // 是否自动打开浏览器
    hot: true,
    historyApiFallback: true,
  },
});

module.exports = new Promise((resolve, reject) => {
  // Auto find port
  portfinder.getPort(
    {
      port: 3000,
      stopPort: 8000,
    },
    (err, port) => {
      if (err) {
        reject(err);
        throw new Error("can not fond available port! try again...");
      }
      // When the port is occupied, reset the port of evn and devserver
      devConfig.devServer.port = port;
      resolve(devConfig);
    }
  );
});
