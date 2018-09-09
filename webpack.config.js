const BABEL_LOADER_RULE = {
  test: /\.js$/,
  exclude: /(node_modules)/,
  use: {
    loader: 'babel-loader',
    options: { presets: '@babel/preset-env' }
  }
};

module.exports = {
  target: 'node',
  module: {
    rules: [BABEL_LOADER_RULE]
  }
};
