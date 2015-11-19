
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon("public/img/favicon.ico"));
app.use(express.logger('dev'));
app.use(express.cookieParser('my$ecret'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
  app.locals.pretty = true;
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.post('/', routes.setLocale);
app.get('/about', routes.about);
app.get('/product/:sub', routes.product);
app.get('/service/:sub', routes.service);
app.get('/solution', routes.solution);
app.get('/support', routes.support);
app.get('/contact', routes.contact);
app.get('/career/:id', routes.career);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
