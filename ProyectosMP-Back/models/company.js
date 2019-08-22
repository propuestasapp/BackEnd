'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var companySchema = Schema({
    name: String,
    description: String,
    country: {type: Schema.ObjectId, ref: 'country'}
});

module.exports = mongoose.model('company', companySchema);