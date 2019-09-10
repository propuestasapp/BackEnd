'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var equipmentProjectionSchema = Schema({
    _id: String,
    modul: String,
    transacPeak: Number,
    increase: Number,
    projecTrans: Number,
    o8PHI: Number,
    avgTrans: Number,
    hours: Number,
    transHour: Number,
    minutes: Number,
    transMinute: Number,
    seconds: Number,
    transSecond: Number,
    trxsCore: Number,
    parallelTrans: Number,
    trxsSeg: Number,
    coresAnalysis: Number,
    coresSrv: Number,
    numberServers: Number,
    recordLength: Number,
    percentageOccupation: Number,
    onlineHistory: Number,
    keys: Number,
    recordsKey: Number,
    coresDB: Number,
    numMemory: Number,
    memoryDB: Number,
    multiMemoryDB: Number,
    datamart: Number,
    history: Number,
    temp: Number,
    logs: Number,
    total: Number,
    coresServer: Number,
    memoryServer: Number,
    coresAlert: Number,
    memoryAlert: Number
})

module.exports = mongoose.model('equipmentProjection', equipmentProjectionSchema);