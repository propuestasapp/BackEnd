'use strict';

var express = require('express');
var proyectController = require('../Controllers/proyectController');
var md_auth = require('../middlewares/authenticated');
var api = express.Router();

api.post('/saveUser', proyectController.saveUser);
api.put('/updateUser/:id', proyectController.updateUser);
api.put('/deleteUser/:id', proyectController.deleteUser);
api.post('/login', proyectController.login);
api.post('/saveCompany/:id', md_auth.ensureAut, proyectController.saveCompany);
api.get('/listCompany', proyectController.listCompany);
api.post('/saveModule', md_auth.ensureAut, proyectController.saveModule);
api.get('/listModule', proyectController.listModule);
api.post('/saveProyect', proyectController.saveProyect);
api.get('/listProyect', proyectController.listProyect);
api.put('/updateProyect/:id', proyectController.updateProyect);
api.put('/deleteProyect/:id', proyectController.deleteProyect);

module.exports = api;