'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var equipmentProjectionSchema = Schema({
    equipProject: String,
    modul: String,
    'options': {},
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
    coresServer: Number
})

module.exports = mongoose.model('equipmentProjection', equipmentProjectionSchema);