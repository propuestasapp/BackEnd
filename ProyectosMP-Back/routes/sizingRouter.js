'use strict';

var express = require('express');
var sizingController = require('../Controllers/sizingController');
var api = express.Router();

api.post('/saveEquipProject', sizingController.saveEquipmentProjection);
api.get('/listEquipProject', sizingController.listEquipmentProjection);
api.post('/searchEquipProject/:id', sizingController.searchEquipmentProjection);
api.put('/updateEquipProject/:id', sizingController.updateEquipmentProjection);
api.put('/deleteEquipProject/:id', sizingController.deleteEquipmentProjection);

module.exports = api;