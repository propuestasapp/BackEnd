'use strict';

var express = require('express');
var sizingController = require('../Controllers/sizingController');
var api = express.Router();

api.post('/saveEquipProject', sizingController.saveEquipmentProjection);
api.get('/listEquipProject', sizingController.listEquipmentProjection);
api.post('/searchEquipProject/:id/:mod', sizingController.searchEquipmentProjection);
api.put('/updateEquipProject/:id/:mod', sizingController.updateEquipmentProjection);
api.put('/deleteEquipProject/:id', sizingController.deleteEquipmentProjection);
api.post('/saveSizing', sizingController.saveSizing);
api.get('/listSizing', sizingController.listSizing);
api.post('/searchSizing', sizingController.searchSizing);
api.put('/updateSizing/:id', sizingController.updateSizing);
api.put('/deleteSizing/:id', sizingController.deleteSizing);

module.exports = api;