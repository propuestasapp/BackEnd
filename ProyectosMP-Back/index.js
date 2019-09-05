'use strict';
  var mongoose = require('mongoose');
  var app = require('./app');
  var port = process.env.port || 3789;
  var proyectController = require('./Controllers/proyectController');
  //var mensaje = require('./nodemailer/configMessage')

  mongoose.Promise = global.Promise;

  mongoose.connect('mongodb://localhost:27017/ProyectosMP-Back', {useNewUrlParser: true})
  .then((err, res)=>{
      console.log('Conexion a la base de datos realizada correctamente');
    proyectController.saveCountry();
    // mensaje();
      app.listen(port,()=>{
        console.log('El servidor de node y express estan conectados');
      });
  })
  .catch(err => console.log(err));