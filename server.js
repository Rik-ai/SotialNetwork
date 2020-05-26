const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
const compression = require('compression');
const helmet = require('helmet');

app.use(compression())
app.use(helmet())

app.use(favicon(__dirname + '/build/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.get('/ping', function (req, res) {
 return res.send('pong');
});
app.get(/^((?!\/(static|healthz)).)*$/, function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.get('/healthz', (req, res) => {
  res.sendStatus(200)
})
app.listen(port);