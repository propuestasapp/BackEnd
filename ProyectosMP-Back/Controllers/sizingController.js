'use strict';

var EquipmentProjection = require('../models/equipmentProjection');
var Sizing = require('../models/sizing');

/************************************** EQUIPMENT PROJECTION *****************************************/
function saveEquipmentProjection(req, res) {
    var equipmentProjection = new EquipmentProjection();
    var params = req.body;

    if (params.project && params.module && params.transacPeak && params.increase && params.projecTrans && params.avgTRXspercent && params.avgTrans && params.hours && params.transHour && params.minutes && params.transMinute && params.seconds && params.transSecond && params.trxsCore && params.trxsSeg && params.coresAnalysis && params.recordLength && params.percentageOccupation && params.onlineHistory && params.keys && params.recordsKey && params.multiplier && params.multiMemoryDB && params.datamart && params.history && params.total) {
        equipmentProjection.project = params.project;
        equipmentProjection.module = params.module;
        equipmentProjection.transacPeak = params.transacPeak;
        equipmentProjection.increase = params.increase;
        equipmentProjection.projecTrans = params.projecTrans;
        equipmentProjection.avgTRXspercent = params.avgTRXspercent;
        equipmentProjection.avgTrans = params.avgTrans;
        equipmentProjection.hours = params.hours;
        equipmentProjection.transHour = params.transHour;
        equipmentProjection.minutes = params.minutes;
        equipmentProjection.transMinute = params.transMinute;
        equipmentProjection.seconds = params.seconds;
        equipmentProjection.transSecond = params.transSecond;
        equipmentProjection.trxsCore = params.trxsCore;
        equipmentProjection.parallelTrans = params.parallelTrans;
        equipmentProjection.trxsSeg = params.trxsSeg;
        equipmentProjection.coresAnalysis = params.coresAnalysis;
        equipmentProjection.coresSrv = params.coresSrv;
        equipmentProjection.numberServers = params.numberServers;
        equipmentProjection.recordLength = params.recordLength;
        equipmentProjection.percentageOccupation = params.percentageOccupation;
        equipmentProjection.onlineHistory = params.onlineHistory;
        equipmentProjection.keys = params.keys;
        equipmentProjection.recordsKey = params.recordsKey;
        equipmentProjection.multiplier = params.multiplier;
        equipmentProjection.coresDB = params.coresDB;
        equipmentProjection.multiMemoryDB = params.multiMemoryDB;
        equipmentProjection.memoryDB = params.memoryDB;
        equipmentProjection.datamart = params.datamart;
        equipmentProjection.history = params.history;
        equipmentProjection.total = params.total;
        equipmentProjection.coresServer = params.coresServer;
        equipmentProjection.split = params.split

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
    var mod = req.params.mod;

    EquipmentProjection.findOne({ project: projectId, "module._id": mod }, (err, equipmentProjection) => {
        if (err) {
            res.status(200).send({ message: 'No se pudo buscar' });
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