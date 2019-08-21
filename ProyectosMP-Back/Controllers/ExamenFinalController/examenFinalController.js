'use strict';

var StudyNetwork = require('../../models/studyNetwork');
var Instructor = require('../../models/instructor');
var Careers = require('../../models/educationalCareers');
var Course = require('../../models/course');
var Person = require('../../models/person');

/***************************************************    STUDY NETWORK   ****************************************************** */
function saveStudyNetwork(req,res){
    var params = req.body;
    var studyNetwork = new StudyNetwork();

    if(params.name && params.career && params.courses){
        studyNetwork.name = params.name;
        studyNetwork.career = params.career;
        studyNetwork.courses = params.courses;

        StudyNetwork.findOne({name: studyNetwork.name},(err, studyNetworkSave)=>{
            if(err){
                res.status(500).send({message: 'Error en la busqueda'});
            }else{
               if(!studyNetworkSave){
                   studyNetwork.save((err,guardado)=>{
                       if(err){
                           res.status(500).send({message: 'Ocurrio un error al guardar!!'});
                       }else{
                           if(!guardado){
                               res.status(404).send({message: 'Error en el sistema'});
                           }else{
                               res.status(200).send({Unidad: guardado});
                           }
                       }
                   })
               }else{
                   res.status(200).send({message: 'La red de estudio ya esta registrada'});
               }
            }
        });
    }else{
        res.status(200).send({message:'Debes de llenar todos los campos que se le solicita'});
    }
}

function listStudyNetwork(req, res){
    StudyNetwork.find({},(err,listar)=>{
        if(err){
            res.status(500).send({message: 'Ocurrio un error'});
        }else{
            res.status(200).send({studyNetwork: listar});
        }
    });
}

function listCareers(req, res){
    Careers.find({},(err, careers)=>{
        if(err){
            res.status(500).send({message: 'Ocurrio error al intentar buscar'});
        }else{
            if(!careers){
                res.status(404).send({message: 'Error de conexion'});
            }else{
                res.status(200).send({career: careers});
            }
        }
    });
}

function listCourses(req, res){
    Course.find({}, (err, courses)=>{
        if(err){
            res.status(404).send({message: 'error al listar'});
        }else{
            if(!courses){
                res.status(404).send({message:'no se pudo listar'});
            }else{
                res.status(200).send({course: courses});
            }
        }
    });
}

function searchStudyNetwork(req, res){
    var params = req.body;
    
    Person.find({$or: [{name: params.person },{middleName: params.person},
    {firstLastName: params.person}, {secondLastName: params.person}]}, (err, results)=>{
        if(err){
            res.status(404).send({message: 'Error al buscar'});
        }else{
            if(!results){
                res.status(200).send({message: 'No hay registros'});
            }else{
                res.status(200).send({results});
            }
        }
    });
}

function updatedAcademicUnit(req,res){
    var update = req.body
    var AcademicId = req.params.id;

    AcademicUnits.findByIdAndUpdate( AcademicId,update, {new: true},(err, updatedAcademicUnit)=>{
        if(err){
            res.status(500).send({message: 'Ocurrio un error al actualizar'});
        }else{
            if(!updatedAcademicUnit){
                res.status(404).send({message: 'Se produjo un error!!'});
            }else{
                res.status(200).send({academic: updatedAcademicUnit});
            }
        }
    })
}
function deleteAcademicUnit(req,res){
    var AcademicId = req.params.id
    AcademicUnits.findByIdAndDelete(AcademicId,(err)=>{
        if(err){
            res.status(500).send({message: 'Ocurrio un error'});
        }else{
            res.status(200).send({message: 'Fue eliminado de la base de datos'});
        }
    })
}

/***************************************************    INSTRUCTORES   ****************************************************** */
function saveInstructor(req,res){
    var params = req.body;
    var instructor = new Instructor()
    
    if(params.code && params.profession){
        instructor.code = params.code;
        instructor.profession = params.profession;
        instructor.person = params.person

        instructor.save((err,guardado)=>{
            if(err){
                res.status(500).send({message: 'Ocurrio un error'})
            }else{
                if(!guardado){
                    res.status(404).send({message: 'Error en el sistema'});
                }else{
                    res.status(200).send({instructor: guardado})
                }
            }
        })
    }else{
        res.status(500).send({message: 'Llene todos los campos'})
    }
}

function listInstructor(req, res){
    Instructor.find({}, (err, instructors)=>{
        if(err){
            res.status(404).send({message: 'error al listar'});
        }else{
            res.status(200).send({instructor: instructors});
        }
    })
}

function listPerson(req, res){
    Person.find({}, (err, persons)=>{
        if(err){
            res.status(404).send({message: 'error al listar'});
        }else{
            res.status(200).send({person: persons});
        }
    })
}

module.exports = {
    saveStudyNetwork,
    listStudyNetwork,
    listCareers,
    listCourses,
    saveInstructor,
    listInstructor,
    listPerson
}