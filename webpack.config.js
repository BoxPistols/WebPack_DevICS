const AutoPrefixer = require('autoprefixer');

// 'production' か 'development' を指定
const MODE = "development";
// ソースマップの利用有無(productionのときはソースマップを利用しない)
const enabledSourceMap = MODE === "development";

module.exports = {
  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: `./src/index.js`,

  mode: MODE,
  // mode: "production", // development or production

  // // ファイルの出力設定
  output: {
  //  出力ファイルのディレクトリ名
  path: `${__dirname}/dist`,
  // 出力ファイル名
  filename: "main.js"
  },

  devServer: {
  contentBase: "dist",
  open: true
  },
  module: {
  rules: [{
    test: /\.sass/, // 対象となるファイルの拡張子
    use: [
    // linkタグに出力する機能
    "style-loader",
    // CSSをバンドルするための機能
    {
      loader: "css-loader",
      options: {
      // オプションでCSS内のurl()メソッドの取り込みを禁止する
      url: false,
      // ソースマップの利用有無
      sourceMap: enabledSourceMap,

      // 0 => no loaders (default);
      // 1 => postcss-loader;
      // 2 => postcss-loader, sass-loader
      importLoaders: 2
      }
    }, {
      loader: "postcss-loader",
      options: {
      // PostCSS側でもソースマップを有効にする
      sourceMap: true,
      plugins: [
        // Autoprefixerを有効化
        AutoPrefixer({
        browsers: ['last 1 versions', 'Android >= 5'],
        }),
        // ベンダープレフィックスを自動付与する
        require("autoprefixer")({
        grid: true
        })
      ]
      }
    },
    {
      loader: "sass-loader",
      options: {
      // ソースマップの利用有無
      sourceMap: enabledSourceMap
      }
    }
    ]
  }]
  }
};