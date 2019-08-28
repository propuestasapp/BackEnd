'use strict';

var express = require('express');
var proyectController = require('../Controllers/proyectController');
var md_auth = require('../middlewares/authenticated');
var api = express.Router();

api.get('/listCountry', proyectController.listCountry);
api.put('/updateCountry/:rol/:newYear', proyectController.updateCountry);
api.post('/saveUser', proyectController.saveUser);
api.put('/updateUser/:id', proyectController.updateUser);
api.put('/deleteUser/:id', proyectController.deleteUser);
api.post('/login', proyectController.login);
api.post('/saveCompany/:rol', proyectController.saveCompany);
api.get('/listCompany/:rol', proyectController.listCompany);
api.post('/searchCompany/:id', proyectController.searchCompany);
api.put('/updateCompany/:id', proyectController.updateCompany);
api.put('/deleteCompany/:id', proyectController.deleteCompany);
api.post('/saveModule/:rol', proyectController.saveModule);
api.get('/listModule/:rol', proyectController.listModule);
api.post('/searchModule/:id', proyectController.searchModule);
api.put('/updateModule/:id', proyectController.updateModule);
api.put('/deleteModule/:id', proyectController.deleteModule);
api.post('/saveProyect/:rol', proyectController.saveProyect);
api.get('/listProyect', proyectController.listProyect);
api.put('/updateProyect/:id', proyectController.updateProyect);
api.put('/deleteProyect/:id', proyectController.deleteProyect);
api.get('/listUser', proyectController.listUser);
api.post('/searchUser/:id',proyectController.searchUser);

module.exports = api;