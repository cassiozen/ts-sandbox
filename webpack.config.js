/* eslint-disable */
const NodemonPlugin = require("nodemon-webpack-plugin");
const CleanTerminalPlugin = require("clean-terminal-webpack-plugin");
const fs = require("fs");

const files = {};
function readFileLine(file, line) {
  if (!files[file]) {
    files[file] = fs.readFileSync(file, "utf-8").split("\n");
  }
  return files[file][line];
}

function customTSErrorFormatter(error, colors) {
  const { code, severity, content, file, line, character, context } = error;

  const severityMsg =
    severity === "warning"
      ? colors.bold.yellow("warning")
      : colors.bold.red("error");
  const source = readFileLine(file, line - 1);
  const shortFile = file.substr(context.length);
  const colon = colors.white(":");
  const fileInfo = `${colors.cyan(shortFile)}${colon}${colors.yellow(
    line
  )}${colon}${colors.yellow(character)}`;
  const errorToken =
    " ".repeat(line.toString.length + character + 1) + colors.red("^");
  return `${fileInfo} - ${severityMsg} ${colors.grey(
    `TS${code}: ${colors.bold.white(content)}`
  )}

${colors.black.bgWhiteBright(line)} ${colors.white(source)}
${errorToken}
  `;
}

module.exports = {
  mode: "production",

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js"]
  },

  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        loader: "ts-loader",
        options: { errorFormatter: customTSErrorFormatter }
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ]
  },

  plugins: [
    new NodemonPlugin({
      quiet: true
    }),
    new CleanTerminalPlugin()
  ],
  stats: {
    assets: false,
    builtAt: false,
    entrypoints: false,
    hash: false,
    modules: false
  }
};
