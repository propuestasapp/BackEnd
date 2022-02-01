'use strict';

var EquipmentProjection = require('../models/equipmentProjection');
var Sizing = require('../models/sizing');

/************************************** EQUIPMENT PROJECTION *****************************************/
function saveEquipmentProjection(req, res) {
    var equipmentProjection = new EquipmentProjection();
    var params = req.body;
    if (params.project && params.module && params.transacPeak && params.onlineHistory && params.recordLength && params.percentageOccupation && params.projecTrans && params.increase && params.avgTrans && params.avgTRXspercent && params.transHour && params.hours && params.transMinute && params.minutes && params.transSecond && params.seconds && params.parallelTrans && params.trxsCore && params.coresAnalysis && params.numberServers && params.numSerAlert && params.keys && params.recordsKey && params.multiplier && params.multiMemoryDB && params.trxsSeg && params.coresSrv && params.percentVa && params.validity && params.coresDB && params.memoryDB && params.multiMemoryDB && params.history && params.datamart && params.total && params.coresServer && params.assetsUsers && params.connectedUsers && params.numUsers && params.comment && params.environments) {
        equipmentProjection.project = params.project;
        equipmentProjection.module = params.module;
        equipmentProjection.transacPeak = params.transacPeak;
        equipmentProjection.onlineHistory = params.onlineHistory;
        equipmentProjection.recordLength = params.recordLength;
        equipmentProjection.percentageOccupation = params.percentageOccupation;
        equipmentProjection.projecTrans = params.projecTrans;
        equipmentProjection.increase = params.increase;
        equipmentProjection.avgTrans = params.avgTrans;
        equipmentProjection.avgTRXspercent = params.avgTRXspercent;
        equipmentProjection.transHour = params.transHour;
        equipmentProjection.hours = params.hours;
        equipmentProjection.transMinute = params.transMinute;
        equipmentProjection.minutes = params.minutes;
        equipmentProjection.transSecond = params.transSecond;
        equipmentProjection.seconds = params.seconds;
        equipmentProjection.parallelTrans = params.parallelTrans;
        equipmentProjection.trxsCore = params.trxsCore;
        equipmentProjection.coresAnalysis = params.coresAnalysis;
        equipmentProjection.numberServers = params.numberServers;
        equipmentProjection.numSerAlert = params.numSerAlert;
        equipmentProjection.keys = params.keys;
        equipmentProjection.recordsKey = params.recordsKey;
        equipmentProjection.multiplier = params.multiplier;
        equipmentProjection.trxsSeg = params.trxsSeg;
        equipmentProjection.coresSrv = params.coresSrv;
        equipmentProjection.combinar = params.combinar;
        equipmentProjection.percentVa = params.percentVa;
        equipmentProjection.validity = params.validity;
        equipmentProjection.coresDB = params.coresDB;
        equipmentProjection.memoryDB = params.memoryDB;
        equipmentProjection.multiMemoryDB = params.multiMemoryDB;
        equipmentProjection.history = params.history;
        equipmentProjection.datamart = params.datamart;
        equipmentProjection.total = params.total;
        equipmentProjection.coresServer = params.coresServer;
        equipmentProjection.split = params.split;
        equipmentProjection.assetsUsers = params.assetsUsers;
        equipmentProjection.connectedUsers = params.connectedUsers;
        equipmentProjection.numUsers = params.numUsers;
        equipmentProjection.comment = params.comment;
        equipmentProjection.environments = params.environments;

        equipmentProjection.save((err, saveCorrect) => {
            if (err) {
                res.status(500).send({ message: "Error al guardar" });
            } else {
                if (!saveCorrect) {
                    res.status(404).send({ message: 'No se puede guardar' });
                } else {
                    res.status(200).send({ equipmentProjection: saveCorrect })
                }
            }
        })
    } else {
        res.status(200).send({ message: 'Ingrese todos los datos' })
    }
}

function listEquipmentProjection(req, res) {
    var projectId = req.params.id;

    EquipmentProjection.find({ project: projectId }, (err, found) => {
        if (err) {
            res.status(200).send({ message: 'Error al listar' });
        } else {
            if (!found) {
                res.status(200).send({ message: 'No se encontro nada' });
            } else {
                res.status(200).send(found)
            }
        }
    });
}

function searchEquipmentProjection(req, res) {
    var projectId = req.params.id;

    EquipmentProjection.findOne({ project: projectId }, (err, equipmentProjection) => {
        if (err) {
            res.status(200).send({ message: 'No se pudo buscar',error: err });
        } else {
            if (!equipmentProjection) {
                res.status(200).send({ message: 'No existe' });
            } else {
                res.status(200).send(equipmentProjection)
            }
        }
    });
}

function updateEquipmentProjection(req, res) {
    var params = req.body;

    EquipmentProjection.findByIdAndUpdate(params._id, params, { new: true }, (err, equipmentUp) => {
        if (err) {
            res.status(200).send({ message: 'Error al actualizar' });
        } else {
            if (!equipmentUp) {
                res.status(200).send({ message: 'No se pudo actualizar' });
            } else {
                res.status(200).send(equipmentUp);
            }
        }
    });
}

function deleteEquipmentProjection(req, res) {
    var equipmentProjectionId = req.params.id;

    EquipmentProjection.findByIdAndDelete(equipmentProjectionId, (err, equipmentProjectDelete) => {
        if (err) {
            res.status(500).send({ message: 'Error al eliminar' });
        } else {
            if (!equipmentProjectDelete) {
                res.status(404).send({ message: 'Error al eliminar' });
            } else {
                res.status(200).send({ message: 'Se elimino correctamente' });
            }

        }
    });
}

function deleteAllEP(req, res) {
    var project = req.params.id;

    EquipmentProjection.find({ equipProject: project }, (err, found) => {
        if (err) {
            res.status(500).send({ message: 'Error al buscar' });
        } else {
            if (!found) {
                res.status(200).send({ message: 'No se encontró nada' });
            } else {
                for (let i = 0; i < found.length; i++) {
                    EquipmentProjection.findByIdAndDelete(found[i]._id, (err2, del) => {
                        if (err) {
                            res.status(500).send({ message: 'Error al eliminar' });
                        } else {
                            if (!del) {
                                res.status(404).send({ message: 'No se pudo eliminar' });
                            }
                        }
                    })
                }
            }
        }
    })
}

/************************************************************* SIZING *********************************************************/
function saveSizing(req, res) {
    var params = req.body;
    var sizing = new Sizing();

    if (params._id && params.equipments && params.versions && params.versionNumber) {

        Sizing.findOne({ _id: params._id }, (err, found) => {
            if (err) {
                res.status(404).send({ message: 'No se puedo buscar' });
            } else {
                if (found) {
                    res.status(200).send({ message: 'Ya existe' });
                } else {
                    sizing._id = params._id;
                    sizing.equipments = params.equipments;
                    sizing.numUsers = params.numUsers;
                    sizing.versions = params.versions;
                    sizing.versionNumber = params.versionNumber;

                    sizing.save((err, saveCorrect) => {
                        if (err) {
                            res.status(500).send({ message: "Error al guardar" });
                        } else {
                            if (!saveCorrect) {
                                res.status(404).send({ message: 'No se puede guardar' });
                            } else {
                                res.status(200).send({ sizing: saveCorrect })
                            }
                        }
                    })
                }
            }
        });
    } else {
        res.status(200).send({ message: 'Ingrese todos los datos' })
    }
}

function listSizing(req, res) {

    Sizing.find((err, found) => {
        if (err) {
            res.status(200).send({ message: 'Error al listar' });
        } else {
            if (!found) {
                res.status(200).send({ message: 'No se encontro nada' });
            } else {
                res.status(200).send(found)
            }
        }
    });
}

function searchSizing(req, res) {
    var sizingId = req.params.id;

    Sizing.find({ _id: sizingId }, (err, encontrado) => {
        if (err) {
            res.status(200).send({ message: 'Error al buscar' })
        } else {
            if (!encontrado) {
                res.status(200).send({ message: 'No se encontro nada' });
            } else {
                res.status(200).send(encontrado)
            }
        }
    })
}

function searchSizingPro(req, res) {
    var id = req.params.id;

    Sizing.find({ _id: {$regex: id} }, (err, encontrado) => {
        if (err) {
            res.status(200).send({ message: 'Error al buscar' })
        } else {
            if (!encontrado) {
                res.status(200).send({ message: 'No se encontro nada' });
            } else {
                res.status(200).send(encontrado)
            }
        }
    })
}

function updateSizing(req, res) {
    var params = req.body;
    var sizingId = req.params.id;

    Sizing.find({ _id: sizingId }, (err, found) => {
        if (err) {
            res.status(404).send({ message: 'No se puedo buscar' });
        } else {
            if (!found) {
                res.status(200).send({ message: 'No existe' });
            } else {
                Sizing.findByIdAndUpdate(found[0]._id, params, { new: true }, (err, update) => {
                    if (err) {
                        res.status(500).send({ message: 'Error al actualizar' });
                    } else {
                        if (!update) {
                            res.status(404).send({ message: 'No se pudo actualizar' });
                        } else {
                            res.status(200).send(update);
                        }
                    }
                });
            }
        }
    });
}

function deleteSizing(req, res) {
    var sizingId = req.params.id;

    Sizing.findByIdAndDelete(sizingId, (err, deletes) => {
        if (err) {
            res.status(500).send({ message: 'Error al eliminar' });
        } else {
            if (!deletes) {
                res.status(404).send({ message: 'Error al eliminar' });
            } else {
                res.status(200).send({ message: 'Se elimino correctamente' });
            }

        }
    });
}

module.exports = {
    saveEquipmentProjection,
    listEquipmentProjection,
    searchEquipmentProjection,
    updateEquipmentProjection,
    deleteEquipmentProjection,
    deleteAllEP,
    saveSizing,
    listSizing,
    searchSizing,
    searchSizingPro,
    updateSizing,
    deleteSizing
}