//
//     Project Name
//     Copyright(c) 2013 Author Name <Author Email>
//     MIT Licensed
//

var express = require('express')
  , http    = require('http')
  , path    = require('path');

var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'server/views'));
app.set('view engine', 'ejs');
app.set('title', 'spa');

app.disable('x-powered-by');

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

if ('development' === app.get('env')) {
  app.use(express.errorHandler());
}

var controllers = require('./server/controllers')();
require('./server/routes')(app, controllers);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port', app.get('port'));
});
