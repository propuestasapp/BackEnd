'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var equipmentProjectionSchema = Schema({
    transacPeak: Number,
    increase: Number,
    projecTrans: Number,
    o8PHI: Number,
    avgTrans: Number,
    transHour: Number,
    transMinute: Number,
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
    recordsKey: Number
})

module.exports = mongoose.model('equipmentProjection', equipmentProjectionSchema);