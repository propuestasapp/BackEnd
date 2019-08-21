'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var moduleSchema = Schema({
    name: String,
    description: String
})

module.exports = mongoose.model('module', moduleSchema);