
// Require request and cheerio. This makes the scraping possible
var request = require("request");

// var mongoose = require("mongoose");

var express = require("express");

var path = require('path');

// Mongoose mpromise deprecated - use bluebird promises
var Promise = require("bluebird");

var router = express.Router();


// Use the apiRoutes module for any routes starting with "/api"
// router.use("/api", apiRoutes);

// Otherwise send all other requests the index.html page
// React router will handle routing withing the app
router.get('*', function(req, res){

  res.sendFile(path.resolve(__dirname, 'index.html'))

});

// Export routes for server.js to use.
module.exports = router;
