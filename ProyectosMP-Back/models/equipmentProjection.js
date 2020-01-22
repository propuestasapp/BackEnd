'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var equipmentProjectionSchema = Schema({
    project: String,
    modul: {},
    transacPeak: Number,
    increase: Number,
    projecTrans: Number,
    avgTransPercent: Number,
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
    numberServers: Number, 
    coresSrv: Number,
    recordLength: Number,
    percentageOccupation: Number,
    onlineHistory: Number,
    keys: Number,
    recordsKey: Number,
    multiplier: Number,
    coresDB: Number,
    multiMemoryDB: Number,
    memoryDB: Number,
    datamart: Number,
    history: Number,
    total: Number,
    coresServer: Number,
    detach: String
})

module.exports = mongoose.model('equipmentProjection', equipmentProjectionSchema);