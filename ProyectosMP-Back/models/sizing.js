'use strict';

var mongoose = require('../node_modules/mongoose');
var Schema = moongose.Schema;

var sizingSchema = Schema({
    _id: String,
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

module.exports = mongoose.model('sizing', sizingSchema);