'use strict';

//TOMADO DE: https://medium.com/@andydev404/enviando-e-mail-desde-angular-con-node-js-e9c2db57af57

const nodemailer = require('../node_modules/nodemailer');



// function mensajito(res, req){
//     var formulario = {
//         nombre: 'Dim Mer',
//         email: 'dimmerwebapp@outlook.es',
//         mensaje: 'hola bb'
//     }

    var transporter = nodemailer.createTransport({
        service: 'smtp-mail.outlook.es',
        secureConnection: false,
        port: 587,
        tls: {
            ciphers: 'SSLv3'
        },
        auth: {
            user: 'dimmerwebapp@outlook.es', // Cambialo por tu email
            pass: 'dimmer123' // Cambialo por tu password
        }
    });
    
    const mailOptions = {
        //from: '"Dimmer APP " dimmerwebapp@outlook.es',
        to: 'gamingguatemalatv@gmail.com', // Cambia esta parte por el destinatario
        subject: 'Recuperar contrasena',
        text: 'Recuperar Contrasena',
        html: '<b>Hello world </b><br> This is the first email sent with Nodemailer in Node.js'
        // html: `
        //     <strong>Nombre:</strong> ${formulario.nombre} <br/>
        //     <strong>E-mail:</strong> ${formulario.email} <br/>
        //     <strong>Mensaje:</strong> ${formulario.mensaje}
        // `
    };
    
    transporter.sendMail(mailOptions, function (err, info) {
        console.log(mailOptions)
        if (err)    
            console.log(err)
        else
            console.log(info);
    });
// }

// module.exports = {
//     // mensajito    
// }