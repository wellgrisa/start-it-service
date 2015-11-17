#!/usr/bin/env node

// enables ES6 support
require('../../compiler');

var rsvp = require('rsvp');
var config = require('../../config');
var mongoose = require('mongoose');

console.log('------ Open mongoose connection ------');
// console.log(config.database);
// mongoose.connect(config.database); // connect to database
// console.log(config.database);
