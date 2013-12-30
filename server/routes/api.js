//
//     Project Name
//     Copyright(c) 2013 Author Name <Author Email>
//     MIT Licensed
//

module.exports = function(app, controllers) {

  app.get('/api/test', function(req, res) {
    res.json({ todo: controllers.myController.doSomething() });
  });

};
