'use strict';

var express = require('express');
var examenFinalController = require('../Controllers/ExamenFinalController/examenFinalController');
var api = express.Router();

api.post('/saveStudyNetwork', examenFinalController.saveStudyNetwork);
api.get('/listStudyNetwork', examenFinalController.listStudyNetwork);
api.get('/listCareers', examenFinalController.listCareers);
api.get('/listCourses', examenFinalController.listCourses);
api.post('/saveInstructor', examenFinalController.saveInstructor);
api.get('/listInstructor', examenFinalController.listInstructor);
api.get('/listPerson', examenFinalController.listPerson);

module.exports = api;