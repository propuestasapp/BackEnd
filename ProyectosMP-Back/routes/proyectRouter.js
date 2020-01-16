'use strict';

var express = require('express');
var proyectController = require('../Controllers/proyectController');
var configMessage = require('../nodemailer/configMessage');
var md_auth = require('../middlewares/authenticated');
var api = express.Router();

/************************ USER *********************************/
api.post('/saveUser', proyectController.saveUser);
api.get('/listUser', proyectController.listUser);
api.post('/searchUser/:id',proyectController.searchUser);
api.get('/searchUserEmail/:mail',proyectController.searchUserEmail);
api.put('/updateUser/:id', proyectController.updateUser);
api.put('/deleteUser/:id', proyectController.deleteUser);
api.post('/login', proyectController.login);
api.post('/password', configMessage.enviarMensaje)

/************************ COUNTRY *********************************/
api.get('/listCountry', proyectController.listCountry);
api.put('/updateCountry/:rol/:newYear', proyectController.updateCountry);

/************************ COMPANY *********************************/
api.post('/saveCompany/:rol', proyectController.saveCompany);
api.get('/listCompany/:rol', proyectController.listCompany);
api.post('/searchCompany/:id', proyectController.searchCompany);
api.put('/updateCompany/:id', proyectController.updateCompany);
api.put('/deleteCompany/:id', proyectController.deleteCompany);

/************************ MODULE *********************************/
api.post('/saveModule/:rol', proyectController.saveModule);
api.get('/listModule/:rol', proyectController.listModule);
api.get('/listModule2/:rol', proyectController.listModule2);
api.get('/listModuleVersion/:vers', proyectController.listModuleVersion);
api.post('/searchModuleName/:id', proyectController.searchModuleName);
api.post('/searchModuleId/:id', proyectController.searchModuleId);
api.put('/updateModule/:id', proyectController.updateModule);
api.put('/deleteModule/:id', proyectController.deleteModule);

/************************ PROYECT *********************************/
api.post('/saveProyect/:rol', proyectController.saveProyect);
api.post('/saveFile/:id', proyectController.saveFile);
api.get('/listFile/:id', proyectController.listFile);
api.put('/deleteFile/:id/:name', proyectController.deleteFile);
api.get('/listProyect', proyectController.listProyect);
api.post('/searchProyect/:id', proyectController.searchProyect);
api.put('/updateProyect/:id', proyectController.updateProyect);
api.put('/deleteProyect/:id', proyectController.deleteProyect);

/************************ SIMPLE TASK *********************************/
api.post('/saveSimpleTask/:rol', proyectController.saveSimpleTask);
api.get('/listSimpleTask/:by', proyectController.listSimpleTask);
api.post('/searchSimpleTask/:id', proyectController.searchSimpleTask);
api.put('/updateSimpleTask/:id', proyectController.updateSimpleTask);
api.put('/deleteSimpleTask/:id', proyectController.deleteSimpleTask);
api.put('/deleteSimpleTaskBy/:by', proyectController.deleteSimpleTaskBy);

module.exports = api;