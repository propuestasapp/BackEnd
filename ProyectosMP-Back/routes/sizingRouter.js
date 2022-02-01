'use strict';

var express = require('express');
var sizingController = require('../Controllers/sizingController');
var api = express.Router();

/************************ EQUIPMENT PROJECTION *********************************/
api.post('/saveEquipProject', sizingController.saveEquipmentProjection);
api.get('/listEquipProject/:id', sizingController.listEquipmentProjection);
api.post('/searchEquipProject/:id', sizingController.searchEquipmentProjection);
api.put('/updateEquipProject', sizingController.updateEquipmentProjection);
api.put('/deleteEquipProject/:id', sizingController.deleteEquipmentProjection);
api.put('/deleteAllEP/:id', sizingController.deleteAllEP);

/************************ SIZING *********************************/
api.post('/saveSizing', sizingController.saveSizing);
api.get('/listSizing', sizingController.listSizing);
api.get('/searchSizing/:id', sizingController.searchSizing);
api.get('/searchSizingPro/:id', sizingController.searchSizingPro);
api.put('/updateSizing/:id', sizingController.updateSizing);
api.put('/deleteSizing/:id', sizingController.deleteSizing);

module.exports = api;