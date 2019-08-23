'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var proyectSchema = Schema({
    _id: String,
    responsability: String,
    priorityOfDocument: Number,
    priorityToday: Number,
    company: {type: Schema.ObjectId, ref: 'company'},
    country: String,
    module: {type: Schema.ObjectId, ref: 'module'},
    dateOfRequest: Date,
    dateOfStart: Date,
    whoAskFor: String,
    percentageOfProgrss: String,
    dateLimit: Date,
    remainingDays: Number,
    dateOfDelivery: Date,
    effectiveDays: String,
    description: String,
    status: String,
    countersOfStatus: String
})

module.exports = mongoose.model('proyect', proyectSchema);