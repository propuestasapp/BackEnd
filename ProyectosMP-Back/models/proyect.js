'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var proyectSchema = Schema({
    _id: String,
    responsability: String,
    priorityDocument: Number,
    priorityToday: Number,
    company: String,
    country: String,
    module: [{ type: Schema.ObjectId, ref: 'module' }],
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
    status: String,
    lenguage: String
})

module.exports = mongoose.model('proyect', proyectSchema);