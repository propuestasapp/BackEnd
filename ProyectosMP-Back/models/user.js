'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = Schema({
    userName: String,
    email: String,
    password: String,
    rol: String
})

module.exports = mongoose.model('user', userSchema);