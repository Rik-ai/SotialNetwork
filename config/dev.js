/*eslint-disable */
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.development.config.js');
var port = process.env.PORT ? process.env.PORT : 3000;
var fs = require('fs');

new WebpackDevServer(webpack(config), {
  hotOnly: true,
  inline: true,
  historyApiFallback: true,
  stats: {
    colors: true
  },
  contentBase: "build/",
  https: (process.env.HTTPS !== 'true') ? false : {
    key: fs.readFileSync(process.env.SSL_KEY),
    cert: fs.readFileSync(process.env.SSL_CERT)
  }
}
).listen(port, 'localhost', function (err, result) {
  if (err) {
    return console.log(err);
  }
  console.log(`Listening at `+((process.env.HTTPS !== 'true') ? `http`:`https`) +`://localhost:${port}/`);
});
