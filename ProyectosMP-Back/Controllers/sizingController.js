'use strict';

var EquipmentProjection = require('../models/equipmentProjection');
var Sizing = require('../models/sizing');

/************************************** EQUIPMENT PROJECTION *****************************************/
function saveEquipmentProjection(req, res) {
    var equipmentProjection = new EquipmentProjection();
    var params = req.body;
    if (params.equipProject && params.modul && params.transacPeak && params.increase && params.projecTrans && params.o8PHI && params.avgTrans && params.hours && params.transHour && params.minutes && params.transMinute && params.seconds && params.transSecond && params.trxsCore && params.trxsSeg && params.coresAnalysis && params.recordLength && params.percentageOccupation && params.onlineHistory && params.keys && params.recordsKey && params.multiplier && params.coresDB && params.multiMemoryDB && params.memoryDB && params.datamart && params.history && params.total && params.coresServer) {
        equipmentProjection.equipProject = params.equipProject;
        equipmentProjection.modul = params.modul;
        equipmentProjection.transacPeak = params.transacPeak;
        equipmentProjection.increase = params.increase;
        equipmentProjection.projecTrans = params.projecTrans;
        equipmentProjection.o8PHI = params.o8PHI;
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

    EquipmentProjection.find((err, found) => {
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
    var equipmentProjectionId = req.params.id;
    var mod = req.params.mod;

    EquipmentProjection.findOne({ equipProject: equipmentProjectionId, modul: mod }, (err, equipmentProjection) => {

        if (err) {
            res.status(404).send({ message: 'No se puedo buscar' });
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
    var equipmentProjectionId = req.params.id;
    var mod = req.params.mod;

    EquipmentProjection.find({ equipProject: equipmentProjectionId, modul: mod }, (err, equipmentProjection) => {
        if (err) {
            res.status(404).send({ message: 'No se puedo buscar' });
        } else {
            if (!equipmentProjection) {
                res.status(200).send({ message: 'No existe' });
            } else {
                EquipmentProjection.findByIdAndUpdate(equipmentProjection[0]._id, params, { new: true }, (err, equipmentProjectionUpdate) => {
                    if (err) {
                        res.status(500).send({ message: 'Error al actualizar' });
                    } else {
                        if (!equipmentProjectionUpdate) {
                            res.status(404).send({ message: 'No se pudo actualizar' });
                        } else {
                            res.status(200).send(equipmentProjectionUpdate);
                        }
                    }
                });
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

/************************************************************* SIZING *********************************************************/
function saveSizing(req, res) {
    var params = req.body;
    var sizing = new Sizing();

    if (params._id && params.proyect && params.trxPeak && params.coresDB && params.memoryDB && params.datamart && params.history && params.temp && params.logs && params.total && params.coresSrv && params.numberServers && params.coresServer && params.memoryServer && params.coresAlert && params.memoryAlert && params.version) {

        Sizing.findOne({ proyect: params.proyect, version: params.version }, (err, found) => {
            if (err) {
                res.status(404).send({ message: 'No se puedo buscar' });
            } else {
                if (found) {
                    res.status(200).send({ message: 'Ya existe' });
                } else {
                    sizing._id = params._id;
                    sizing.proyect = params.proyect;
                    sizing.trxPeak = params.trxPeak;
                    sizing.coresDB = params.coresDB;
                    sizing.memoryDB = params.memoryDB;
                    sizing.datamart = params.datamart;
                    sizing.history = params.history;
                    sizing.temp = params.temp;
                    sizing.logs = params.logs;
                    sizing.total = params.total;
                    sizing.coresSrv = params.coresSrv;
                    sizing.numberServers = params.numberServers;
                    sizing.coresServer = params.coresServer;
                    sizing.memoryServer = params.memoryServer;
                    sizing.coresAlert = params.coresAlert;
                    sizing.memoryAlert = params.memoryAlert;
                    sizing.version = params.version;

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

    Sizing.findOne({ _id: sizingId }, (err, found) => {
        if (err) {
            res.status(200).send({ message: 'Error al buscar' });
        } else {
            if (!found) {
                res.status(200).send({ message: 'No se encontro nada' });
            } else {
                res.status(200).send([found])
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
    saveSizing,
    listSizing,
    searchSizing,
    updateSizing,
    deleteSizing
}