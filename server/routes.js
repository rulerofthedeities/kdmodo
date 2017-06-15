var path = require("path"),
    response = require("./response");

module.exports = {
  initialize: function(app, router) {

    app.use('/api/', router);

    //render index page
    app.use(function (req, res) {
      var home = path.resolve(__dirname + '/../dist/index.html');
      res.sendFile(home);
    });
  }
};
