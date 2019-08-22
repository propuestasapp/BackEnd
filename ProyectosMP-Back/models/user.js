'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = Schema({
    name: String,
    lastName: String,
    userName: String,
    email: String,
    password: String,
    rol: String
})

module.exports = mongoose.model('user', userSchema);