import path from "path";
import { fileURLToPath } from "url";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default (env, argv) => {
  const mode = argv.mode || "development";
  const isDev = mode === "development";

  const plugins = [
    new HtmlWebpackPlugin({ template: path.resolve(__dirname, "public", "index.html"), inject:"body" })
  ];
  if (!isDev) { plugins.push(new MiniCssExtractPlugin()) };

  return {
    mode,
    entry: {
      app: "app.ts",
    },
    output: {
      path: path.resolve(__dirname, "codebase"),
      filename: '[name].js',
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.(png|jpg|gif)$/,
          type: "asset",
          parser: {
            dataUrlCondition: {
              maxSize: 25 * 1024,
            },
          },
        },
        {
          test: /\.less/,
          use: [isDev ? "style-loader" : MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
        },
        {
          test: /\.ts?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
      ]
    },
    resolve: {
      extensions: [".ts", ".js"],
      modules: [path.resolve(__dirname, "sources"), "node_modules"],
    },
    plugins,
    devtool: isDev ? "inline-source-map" : "source-map",
    devServer: isDev ? {
      static: [
        { directory: path.resolve(__dirname, "sources", "server"), publicPath: "/sources/server/" },
        { directory: path.resolve(__dirname, "node_modules", "webix"), publicPath: "/node_modules/webix/" },
      ],
      port: "8080",
      open: true,
    } : undefined,
  }
}