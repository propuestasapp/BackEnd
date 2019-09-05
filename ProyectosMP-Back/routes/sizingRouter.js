'use strict';

var express = require('express');
var sizingController = require('../Controllers/sizingController');
var api = express.Router();

api.post('/saveEquipProject', sizingController.saveEquipmentProjection);

module.exports = api;