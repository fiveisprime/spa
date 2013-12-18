module.exports = function(app) {

  app.get('/api/test', function(req, res) {
    res.json({ todo: 'add api routes' });
  });

};
