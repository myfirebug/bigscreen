const ESLintPlugin = require("eslint-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackBar = require("webpackbar");
const path = require("path");
const { tools } = require("./utils");
const { getStyleLoader, isDev, fmtDate } = tools;
const config = require(`../src/config.js`);

module.exports = {
  stats: "errors-only",
  // 入口相对路径
  entry: "./src/main.tsx",
  // 输出
  output: {
    // 文件的输出路径，绝对路由
    // __dirname nodejs的变量，代表当前文件的文件夹目录
    path: isDev ? undefined : path.resolve(__dirname, "../dist"),
    // 入口打包输出的文件名
    filename: isDev
      ? "static/js/[name].js"
      : "static/js/[name].[contenthash:10].js",
    // chunk文件名称
    chunkFilename: "static/js/[name].[contenthash:10].chunk.js",
    // 图片，字体，通过type：asset处理的资源全名方式
    assetModuleFilename: "static/media/[hash:10][ext][query]",
    // 打包前将path的整个目录内容清空，在进行打包
    clean: true,
  },
  module: {
    rules: [
      {
        oneOf: [
          // 处理css
          {
            test: /\.css$/i,
            // use 执行顺序：从右到左，从下到上
            use: getStyleLoader(),
          },
          {
            test: /\.s[ac]ss$/i,
            use: getStyleLoader("sass-loader"),
          },
          // 处理图片
          {
            test: /\.(png|jpe?g|gif|webp|svg)$/,
            type: "asset",
            parser: {
              dataUrlCondition: {
                maxSize: 10 * 1024, // 小于10kb转成base64
              },
            },
          },
          {
            test: /\.(ttf|woff2?|mp3|mp4|avi)$/,
            type: "asset/resource",
          },
          // 处理js
          {
            test: /\.(js|ts)x?$/,
            exclude: /node_modules/, // 排除node_modules中的js文件
            use: [
              {
                loader: "babel-loader",
                options: {
                  cacheDirectory: true, // 开启babel缓存
                  cacheCompression: false, // 关闭缓存文件压缩
                  plugins: [
                    isDev && require.resolve("react-refresh/babel"),
                  ].filter(Boolean), // React 组件启用“快速刷新”（也称为热重载）
                },
              },
            ],
          },
        ],
      },
    ],
  },
  plugins: [
    new ESLintPlugin({
      exclude: "node_modules",
      context: path.resolve(__dirname, "../src"),
      cache: true,
      extensions: ["js", "jsx", "ts", "tsx"],
      cacheLocation: path.resolve(
        __dirname,
        "../node_modules/.cache/.eslintcache"
      ),
    }),
    new HtmlWebpackPlugin({
      // 模板：以public/index.html文件创建新的html文件
      // 新的文件特点：结构和原来一致，自动引入打包出的资源
      template: path.resolve(__dirname, "../public/index.html"),
      config: `<script>window.CONFIG=${JSON.stringify(config)}</script>`,
      // 标题
      title: config.title,
      // 描述
      description: config.description,
      // 关键词
      keywords: config.keywords,
      // 代码更新时间
      buildTime: fmtDate(new Date(), "yyyy-MM-dd hh:mm:ss"),
    }),
    new WebpackBar(),
  ],
  // webpack 解析模块加载选项
  resolve: {
    // 自动补全文件扩展名
    extensions: [".js", ".jsx", ".tsx", ".ts"],
    alias: {
      "@src": path.resolve(__dirname, "../src/"),
      "@service": path.resolve(__dirname, "../src/service/"),
      "@pages": path.resolve(__dirname, "../src/pages/"),
      "@core": path.resolve(__dirname, "../src/core/"),
    },
  },
};
