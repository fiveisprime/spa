module.exports = function(app) {

  app.get('/', function index(req, res) {
    res.render('index');
  });

};