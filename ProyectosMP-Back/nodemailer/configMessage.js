'use strict';

// Tomado de: https://www.youtube.com/watch?v=K_XBBRLu9wg    &&    https://github.com/nodemailer/nodemailer/issues/406

var nodemailer = require('nodemailer')
var smtp = require('nodemailer-smtp-transport');

var smtpTransport = nodemailer.createTransport(smtp({
    service: "Gmail",
    secure: false, // use SSL
    port: 25,
    auth: {
        user: "plusti.dimmer@gmail.com",
        pass: "*dimmer123*"
    },
    tls: {
        rejectUnauthorized: false
    }
}))

function enviarMensaje(req, res) {
    var params = req.body;

    var mailOptions = {
        from: 'Dimmer <plusti.dimmer@gmail.com>',
        to: params.email,
        subject: 'Recuperar contraseña',
        html: `
            <div>
                <h2>Código de recuperación</h2>
                <div class="card" style="width: 18rem;">
                    <img src="https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiIncSW5eTkAhUHvlkKHawlDpkQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.redeszone.net%2F2018%2F11%2F20%2Ferrores-quizas-cometido-utilizar-contrasena%2F&psig=AOvVaw2BVW_VArhWGQ5SNw-GHAKa&ust=1569254083586977" class="card-img-top">
                    <div class="card-body">
                        <p class="card-text">El siguiente código es únicamente para la recuperación de contraseña. Debe copiar y pegar donde se le solicitó.</p>
                    </div>
                </div>
                <label>${params.code}</label>
            </div>
        `
    }

    smtpTransport.sendMail(mailOptions, function (err, res){
        try{
            return {message: 'Se envió correctamente'}
        }catch{
            return err
        }
    })
}

module.exports = {
    enviarMensaje
};