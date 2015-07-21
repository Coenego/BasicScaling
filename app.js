var express = require('express');

/**
 * Create a new Express application
 *
 * @private
 */
var createServer = function() {

    // Get the port from the command line
    var port = parseInt(process.argv[2]) || 2000;

    // Create a new Express application
    var app = express();

    // Create a REST endpoint
    app.get('/', function(req, res) {
        res.status(200).send('Served by https://127.0.0.1:' + port);
    });

    // Start listening for connections
    var server = app.listen(port, function() {
        console.log('Example app listening at https://127.0.0.1:%s', port);
    });
};

createServer();
