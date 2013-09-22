
/**
 * Module dependencies
 */

var express = require('express'),
  routes = require('./routes'),
  tournament = require('./routes/tournament'),
  competitor = require('./routes/competitor'),
  http = require('http'),
  path = require('path'),
  db = require('./models/db');

var app = module.exports = express();

/**
 * Configuration
 */

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, 'public')));
app.use(app.router);

// development only
if (app.get('env') === 'development') {
  app.use(express.errorHandler());
}

// production only
if (app.get('env') === 'production') {
  // TODO
}

/**
 * Routes
 */

// serve index and view partials
app.get('/', routes.index);
app.get('/partials/:name', routes.partials);

// JSON API
app.get('/api/tournaments', tournament.tournaments);
app.post('/api/tournaments', tournament.tournament_edit);
app.put('/api/tournaments', tournament.tournament_edit);
app.get('/api/tournaments/:id', tournament.tournament);

// Competitor web services
app.get('/api/competitors', competitor.competitors);
app.post('/api/competitors',competitor.competitor_edit);
app.put('/api/competitors/',competitor.competitor_edit);
app.get('/api/competitors/:id', competitor.competitor);

// redirect all others to the index (HTML5 history)
app.get('*', routes.index);


/**
 * Start Server
 */

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
