/**
 * This is the main file for this application. It should _rarely_ be modified,
 * if at all. If you need to make a configuration change, you should do so in
 * `app/config/environment/[environment].js`.
 */
var express = require('express'),
    resource = require('express-resource'),
    app = express(),
    http = require('http'),
    Bula = require('bula');


/**
 * Expose `app` for functional testing.
 */
module.exports = app;

// Initialize the Application.
bula = new Bula(app, express);

// Extract some of the previously defined globals.
var port = app.get('NODE PORT'),
    host = app.get('NODE HOST');

// Start the application/server.
http.createServer(app).listen(port, host, function() {
  // Verify that all components are available and working.
  if (bula.sanityCheck()) {
    console.log('Express server listening on port ' + port + ' in the `' +
        app.get('NODE ENVIRONMENT') + '` environment on address ' + host + '.');
    console.log('`APP ROOT`: ' + app.get('ROOT PATH'));
    console.log('`URL ROOT`: ' + app.get('ROOT URL'));
  }
});
