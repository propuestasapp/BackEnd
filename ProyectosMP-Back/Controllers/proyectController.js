'use strict';

var User = require('../models/user');
var bcrypt = require('bcrypt-nodejs');
var jwt = require('../services/jwt');

var Company = require('../models/company');
var Module = require('../models/module');
var Proyect = require('../models/proyect');
var User = require('../models/user');

/******************************************** USER ****************************************************/
function saveUser(req, res){
    var params = req.body;
    var user = new User();

    if(params.userName && params.email && params.password && params.rol){
        user.userName = params.userName.toLowerCase();
        user.email = params.email.toLowerCase();
        user.password = params.password;
        user.rol = params.rol.toUpperCase();

        User.findOne({email: user.email}, (err, issetUser) => {
            if(issetUser){
                res.status(200).send({message: 'El usuario ya esta registrado'});
            }else{
                if(!issetUser){
                    bcrypt.hash(params.password, null, null, function(err, hash){
                        user.password = hash;

                        user.save((err, userSave) => {
                            if(err){
                                res.status(500).send({message: 'Error al guardar'});
                            }else{
                                if(!userSave){
                                    res.status(404).send({message: 'No se pudo guardar'});
                                }else{
                                    res.status(200).send({user: userSave});
                                }
                            }
                        });
                    });
                }
            }
        });
    }else{
        res.status(200).send({message: 'Ingrese todos los campos'});
    }
}

function updateUser(req,res){
    var params = req.body;
    var userId = req.params.id;

    User.findOneAndUpdate(userId,params,{new: true},(err,update)=>{
        if(err){
            res.status(200).send({message: 'Error al actualizar'});
        }else{
            res.status(200).send({user: update});
        }
    });
}

function deleteUser(req,res){
    var userId = req.params.id;

    User.findByIdAndDelete(userId,(err)=>{
        if(err){
            res.status(200).send({message: 'Error al eliminar'});
        }else{
            res.status(200).send({message: 'Se ha elimado de la base de datos'});
        }
    });
}

function login(req,res){
    var params = req.body;

    User.findOne({email: params.email},(err,user) => {
        if(err){
            res.status(200).send({message: 'Error al ingresar'});
        }else if(!user){
            res.status(200).send({message: 'No se encontro el usuario'});
        }else{
            bcrypt.compare(params.password, user.password,(err, check)=>{
                if(check){
                    // console.log(jwt.createToken(user))
                    res.status(200).send({toke: jwt.createToken(user)});
                }else{
                    res.status(200).send({message: 'Error en tu contrasena'});
                }
            })
        }
    })
}
/**************************************** COMPANY ************************************************** */
function saveCompany(req, res){
    var params = req.body;
    var company = new Company();
    var userId = req.params.id;

    /*if(userId != req.user.sub){
        res.status(500).send({mnessage: 'No tienes permiso'});
    }else{*/
        if(params.name && params.description){
            company.name = params.name;
            company.description = params.description;

            company.save((err, companySave) => {
                if(err){
                    res.status(500).send({message: 'Error al guardar'});
                }else{
                    if(!companySave){
                        res.status(404).send({message: 'No se pudo guardar'});
                    }else{
                        res.status(200).send({company: companySave});
                    }
                }
            });
        }else{
            res.status(200).send({message: 'Ingrese todos los campos'});
        }
    //}
}

function listCompany(req, res){
    Company.find((err, companies) => {
        if(err){
            res.status(404).send({message: 'No se pudo listar'});
        }else{
            res.status(200).send(companies);
        }
    });
}

/*********************************************** MODULE ************************************************/
function saveModule(req, res){
    var params = req.body;
    var modules = new Module();

    /*if('ADMINISTRADOR' != req.user.sub){
        res.status(500).send({message: 'No tienes permiso'});
    }else{*/
        if(params.name && params.description){
            modules.name = params.name;
            modules.description = params.description;

            modules.save((err, moduleSave) => {
                if(err){
                    res.status(500).send({message: 'Error al guardar'});
                }else{
                    if(!moduleSave){
                        res.status(404).send({message: 'No se pudo guardar'});
                    }else{
                        res.status(200).send({module: moduleSave});
                    }
                }
            });
        }else{
            res.status(200).send({message: 'Ingrese todos los campos'});
        }
    //}
}

function listModule(req, res){
    Module.find((err, modules) => {
        if(err){
            res.status(404).send({message: 'No se pudo listar'});
        }else{
            res.status(200).send(modules);
        }
    });
}

/********************************************** PROYECT **************************************************/
function saveProyect(req, res){
    var params = req.body;
    var proyect = new Proyect();

    if(params.name && params.description){
        proyect.name = params.name;
        proyect.description = params.description;

        proyect.save((err, proyectSave) => {
            if(err){
                res.status(500).send({message: 'Error al guardar'});
            }else{
                if(!proyectSave){
                    res.status(404).send({message: 'No se pudo guardar'});
                }else{
                    res.status(200).send({proyect: proyectSave});
                }
            }
        });
    }else{
        res.status(200).send({message: 'Ingrese todos los campos'});
    }
}

function listProyect(req, res){
    Proyect.find((err, proyects) => {
        if(err){
            res.status(404).send({message: 'No se pudo listar'});
        }else{
            res.status(200).send(proyects);
        }
    });
}

function updateProyect(req, res){
    var params = req.body;
    var proyectId = req.params.id;

    Proyect.findByIdAndUpdate(proyectId, params, {new: true}, (err, proyectUpdate) => {
        if(err){
            res.status(500).send({message: 'Error al actualizar'});
        }else{
            if(!proyectUpdate){
                res.status(404).send({message: 'No se pudo actualizar'});
            }else{
                res.status(200).send({proyectUpdate});
            }
        }
    });
}

function deleteProyect(req, res){
    var proyectId = req.params.id;
    
    Proyect.findByIdAndDelete(proyectId, (err, proyectDelete) => {
        if(err){
            res.status(500).send({message: 'Error al eliminar'});
        }else{
            res.status(200).send({message: 'Se elimino correctamente'});
        }
    });
}

module.exports = {
    saveUser,
    updateUser,
    deleteUser,
    login,
    saveCompany,
    listCompany,
    saveModule,
    listModule,
    saveProyect,
    listProyect,
    updateProyect,
    deleteProyect
}