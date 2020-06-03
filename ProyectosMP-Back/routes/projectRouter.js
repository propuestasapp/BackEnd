'use strict';

var express = require('express');
var projectController = require('../Controllers/projectController');
var configMessage = require('../nodemailer/configMessage');
var md_auth = require('../middlewares/authenticated');
var api = express.Router();

/************************ USER *********************************/
api.post('/saveUser', projectController.saveUser);
api.get('/listUser', projectController.listUser);
api.post('/searchUser/:id',projectController.searchUser);
api.get('/searchUserUserName/:userName',projectController.searchUserUserName);
api.put('/updateUser/:id', projectController.updateUser);
api.put('/deleteUser/:id', projectController.deleteUser);
api.post('/login', projectController.login);
api.post('/password', configMessage.enviarMensaje)

/************************ COUNTRY *********************************/
api.get('/listCountry', projectController.listCountry);
api.put('/updateCountry/:rol/:newYear', projectController.updateCountry);

/************************ COMPANY *********************************/
api.post('/saveCompany/:rol', projectController.saveCompany);
api.get('/listCompany/:rol', projectController.listCompany);
api.post('/searchCompany/:id', projectController.searchCompany);
api.put('/updateCompany/:id', projectController.updateCompany);
api.put('/deleteCompany/:id', projectController.deleteCompany);

/************************ MODULE *********************************/
api.post('/saveModule/:rol', projectController.saveModule);
api.get('/listModule/:state', projectController.listModule);
api.get('/listModule2/:rol', projectController.listModule2);
api.get('/listModuleVersion/:vers', projectController.listModuleVersion);
api.post('/searchModuleName/:id', projectController.searchModuleName);
api.post('/searchModuleId/:id', projectController.searchModuleId);
api.put('/updateModule/:id', projectController.updateModule);
api.put('/deleteModule/:id', projectController.deleteModule);

/************************ PROJECT *********************************/
api.post('/saveProject/:rol', projectController.saveProject);
api.post('/saveFile/:id', projectController.saveFile);
api.get('/listFile/:id', projectController.listFile);
api.get('/downloadFile/:id/:name', projectController.downloadFile)
api.put('/deleteFile/:id/:name', projectController.deleteFile);
api.get('/listProject', projectController.listProject);
api.post('/searchProject/:id', projectController.searchProject);
api.put('/updateProject/:id', projectController.updateProject);
api.put('/deleteProject/:id', projectController.deleteProject);

/************************ SIMPLE TASK *********************************/
api.post('/saveSimpleTask/:rol', projectController.saveSimpleTask);
api.get('/listSimpleTask/:by', projectController.listSimpleTask);
api.post('/searchSimpleTask/:id', projectController.searchSimpleTask);
api.put('/updateSimpleTask/:id', projectController.updateSimpleTask);
api.put('/deleteSimpleTask/:id', projectController.deleteSimpleTask);
api.put('/deleteSimpleTaskBy/:by', projectController.deleteSimpleTaskBy);

module.exports = api;