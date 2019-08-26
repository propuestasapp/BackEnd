'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var proyectSchema = Schema({
    _id: String,
    corelativeNumber: String,
    responsability: String,
    priorityDocument: Number,
    priorityToday: Number,
    company: {type: Schema.ObjectId, ref: 'company'},
    country: String,
    module: [{type: Schema.ObjectId, ref: 'module'}],
    dateRequest: Date,
    dateStart: Date,
    whoAskFor: String,
    percentageProgress: String,
    dateLimit: Date,
    remainingDays: Number,
    dateDelivery: Date,
    effectiveDays: String,
    description: String,
    status: String,
    countersStatus: String
})

module.exports = mongoose.model('proyect', proyectSchema);