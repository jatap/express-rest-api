'use strict';

var express = require('express');
var router  = express.Router();

// JSON Data
var homepage = {
  title: 'Express REST API homepage'
};

// GET homepage
router.get('/', function(req, res, next) {
  res.status(200).json(homepage);
});

module.exports = router;
