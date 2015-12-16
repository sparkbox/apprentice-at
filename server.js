var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static('dist'));

var server = app.listen(app.get('port'), () => {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Listening at http://%s:%s', host, port);
});
