'use strict';

var express = require('express');
var sizingController = require('../Controllers/sizingController');
var api = express.Router();

api.post('/saveEquipProject', sizingController.saveEquipmentProjection);
api.get('/listEquipProject', sizingController.listEquipmentProjection);
api.post('/searchEquipProject/:id/:mod', sizingController.searchEquipmentProjection);
api.put('/updateEquipProject/:id/:mod', sizingController.updateEquipmentProjection);
api.put('/deleteEquipProject/:id', sizingController.deleteEquipmentProjection);

module.exports = api;