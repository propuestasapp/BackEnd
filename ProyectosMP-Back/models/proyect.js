'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var proyectSchema = Schema({
    _id: String,
    company: {type: Schema.ObjectId, ref: 'company'},
    module: {type: Schema.ObjectId, ref: 'module'},
    status: String
})

module.exports = mongoose.model('proyect', proyectSchema);