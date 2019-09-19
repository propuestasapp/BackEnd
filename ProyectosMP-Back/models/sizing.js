'use strict';

var mongoose = require('../node_modules/mongoose');
var Schema = mongoose.Schema;

var sizingSchema = Schema({
    _id: Number,
    proyect: String,
    trxPeak: Number,
    coresDB: Number,
    memoryDB: Number,
    datamart: Number,
    history: Number,
    temp: Number,
    logs: Number,
    total: Number,
    coresSrv: Number,
    numberServers: Number,
    coresServer: Number,
    memoryServer: Number,
    coresAlert: Number,
    memoryAlert: Number,
    version: String
})

module.exports = mongoose.model('sizing', sizingSchema);