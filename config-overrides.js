const path = require('path');
const {
    override,
    adjustStyleLoaders,
    addWebpackAlias
} = require('customize-cra');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const alias = process.env.REACT_APP_ENV;

/**
 * @param target: 要遍历的对象
 * @param name: 插件名
 * @param callback: 回调函数，第一个参数为该插件对象
 * @return null
 */
function invade(target, name, callback) {
    target.forEach((item) => {
        if (item.constructor.name === name) {
            // eslint-disable-next-line callback-return
            callback(item);
        }
    });
}

const overrides = {
    publicPath: {
        development: '',
        demo: 'http://192.168.200.9/manage/base_app/',
        test: 'http://172.19.20.5/manage/base_app/build/',
        production: 'http://192.168.200.9:82/',
        qsng: 'http://118.114.241.16:82/'
    },
    library: 'base_app'
};

module.exports = override(
    // 配置c
    adjustStyleLoaders((rule) => {
        if (rule.test.toString().includes('scss')) {
            rule.use.push({
                loader: require.resolve('sass-resources-loader'),
                options: {
                    resources: path.resolve(__dirname, './src/assets/scss/index.scss')
                }
            });
        }
    }),
    // 路径别名
    addWebpackAlias({
        '@src': path.resolve(__dirname, 'src'),
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@utils': path.resolve(__dirname, 'src/utils'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@service': path.resolve(__dirname, 'src/service'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@types': path.resolve(__dirname, 'src/types'),
        '@store': path.resolve(__dirname, 'src/store')
    }),
    // 配置其他选项
    (config) => {
        // console.log(config.resolve.plugins, 'config');
        config.resolve.plugins = [];
        if (process.env.NODE_ENV !== 'development') {
            config.devtool = false;
            config.output.publicPath = overrides.publicPath[alias];
            config.output.libraryTarget = 'umd';
            config.output.library = overrides.library;

            // 删除打包后的所有console
            invade(config.optimization.minimizer, 'TerserPlugin', (e) => {
                e.options.extractComments = false;
                // 删除console
                e.options.minimizer.options.compress.drop_console = true;
                // 删除debugger
                e.options.minimizer.options.compress.drop_debugger = true;
                e.options.minimizer.options.compress.pure_funcs = ['config.log'];
            });
            // 美化打包后 js 文件名
            config.output.chunkFilename = config.output.chunkFilename.replace(
                '.chunk',
                ''
            );
            // 美化打包后 css 文件名
            invade(config.plugins, 'MiniCssExtractPlugin', (e) => {
                e.options.chunkFilename = e.options.chunkFilename.replace('.chunk', '');
            });
            // config.plugins.push(new BundleAnalyzerPlugin({ analyzerPort: 8919 }));
        }

        return config;
    }
);