'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var countrySchema = Schema({
    name: [],
    twoLetterCode: [],
    threeLetterCode: [],
    numericCode: [],
    number: Number
})

module.exports = mongoose.model('country', countrySchema);