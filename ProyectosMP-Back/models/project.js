'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var projectSchema = Schema({
    _id: String,
    responsability: String,
    priorityDocument: Number,
    priorityToday: Number,
    company: String,
    country: String,
    module: [],
    dateRequest: Date,
    dateStart: Date,
    whoAskFor: String,
    percentageProgress: String,
    dateLimit: Date,
    remainingDays: Number,
    dateDelivery: Date,
    effectiveDays: String,
    description: String,
    dataBase: String,
    state: String,
    lenguage: String,
    version: String
})

module.exports = mongoose.model('project', projectSchema);