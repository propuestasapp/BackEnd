'use strict';
  var mongoose = require('mongoose');
  var app = require('./app');
  var port = process.env.port || 3789;
  var projectController = require('./Controllers/projectController');

  mongoose.Promise = global.Promise;

  mongoose.connect('mongodb://localhost:27017/ProjectosMP-Back', {useNewUrlParser: true})
  .then((err, res)=>{
      console.log('Conexion a la base de datos realizada correctamente');
    projectController.saveCountry();
    projectController.adminUser();
    // mensaje();
      app.listen(port,()=>{
        console.log('El servidor de node y express estan conectados');
      });
  })
  .catch(err => console.log(err));