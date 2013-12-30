//
//     Project Name
//     Copyright(c) 2013 Author Name <Author Email>
//     MIT Licensed
//

module.exports = function(app, controllers) {

  //
  // Serve the HTML content.
  //
  app.get('/', function index(req, res) {
    res.render('index');
  });

  //
  // Setup the API routes.
  //
  require('./api')(app, controllers);

};