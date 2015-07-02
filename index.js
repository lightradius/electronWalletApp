var app = require('app');
var BrowserWindow = require('browser-window');

app.on('ready', function() {
  var mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    "use-content-size": true
  });
  mainWindow.loadUrl('file://' + __dirname + '/index.html');
});
