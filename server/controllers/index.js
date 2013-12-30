//
//     Project Name
//     Copyright(c) 2013 Author Name <Author Email>
//     MIT Licensed
//

var internals = {};

module.exports = function() {
  internals.myController = {
    doSomething: function() {
      return 'Hello World';
    }
  };

  return internals;
};
