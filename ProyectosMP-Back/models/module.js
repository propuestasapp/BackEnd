'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var moduleSchema = Schema({
    name: String,
    description: String,
    months: Number,
    keys: Number,
    status: String,
    'options': {}
})

module.exports = mongoose.model('module', moduleSchema);