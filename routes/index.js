module.exports = function(app) {

  //
  // Serve the HTML content.
  //
  app.get('/', function index(req, res) {
    res.render('index');
  });

  //
  // Setup the API routes.
  //
  require('./api')(app);

};