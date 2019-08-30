'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var simpleTaskSchema = Schema({
    type: String,
    description: String,
    priority: Number,
    state: String,
    estimatedHours: Number,
    dependences: String,
    planningDate: Date,
    percent: Number,
    comments: String,
    closedDate: Date
});

module.exports = mongoose.model('simpleTask', simpleTaskSchema);