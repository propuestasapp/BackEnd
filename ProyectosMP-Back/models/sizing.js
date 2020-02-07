'use strict';

var mongoose = require('../node_modules/mongoose');
var Schema = mongoose.Schema;

var sizingSchema = Schema({
    _id: String,
    equipments: [],
    numUsers: Number,
    versions: [],
    versionNumber: Number
})

module.exports = mongoose.model('sizing', sizingSchema);