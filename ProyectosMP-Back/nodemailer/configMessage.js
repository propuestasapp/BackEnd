'use strict';

//TOMADO DE: https://medium.com/@andydev404/enviando-e-mail-desde-angular-con-node-js-e9c2db57af57

const nodemailer = require('../node_modules/nodemailer');

module.exports = (formulario) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'emanuel11102001@gmail.com', // Cambialo por tu email
            pass: ‘tupassword’ // Cambialo por tu password
        }
    });
    
    const mailOptions = {
        from: `”${formulario.nombre} 👻” <${formulario.email}>`,
        to: ‘destinatario’, // Cambia esta parte por el destinatario
        subject: formulario.asunto,
        html: `
 <strong>Nombre:</strong> ${formulario.nombre} <br/>
 <strong>E-mail:</strong> ${formulario.email} <br/>
 <strong>Mensaje:</strong> ${formulario.mensaje}
 `
    };
    transporter.sendMail(mailOptions, function (err, info) {
        if (err)
            console.log(err)
        else
            console.log(info);
    });
}