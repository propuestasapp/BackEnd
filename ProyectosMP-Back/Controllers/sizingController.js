'use strict';

var EquipmentProjection = require('../models/equipmentProjection');

/************************************** EQUIPMENT PROJECTION *****************************************/
function saveEquipmentProjection(req, res){
    var equipmentProjection = new EquipmentProjection();
    var params = req.body;

    if(params.transacPeak && params.increase && params.o8PHI && params.trxsCore && params.trxsSeg && params.coresSrv && params.recordLength && params.percentageOccupation && params.onlineHistory && params.keys && params.multiplier){
        equipmentProjection.transacPeak = params.transacPeak;
        equipmentProjection.projecTrans = params.projecTrans;
        equipmentProjection.avgTrans = params.avgTrans;
        equipmentProjection.transHour = params.transHour;
        equipmentProjection.transMinute = params.transMinute;
        equipmentProjection.transSecond = params.transSecond;
        equipmentProjection.parallelTrans = params.parallelTrans;
        equipmentProjection.coresAnalysis = params.coresAnalysis;
        equipmentProjection.numberServers = params.numberServers;
        equipmentProjection.recordsKey = params.recordsKey;
        equipmentProjection.increase = params.increase;
        equipmentProjection.o8PHI = params.o8PHI;
        equipmentProjection.trxsCore = params.trxsCore;
        equipmentProjection.trxsSeg = params.trxsSeg;
        equipmentProjection.coresSrv = params.coresSrv;
        equipmentProjection.multiplier = params.multiplier;
        equipmentProjection.recordLength = params.recordLength;
        equipmentProjection.percentageOccupation = params.percentageOccupation;
        equipmentProjection.onlineHistory = params.onlineHistory;
        equipmentProjection.keys = params.keys;
        equipmentProjection._id = params._id;
        equipmentProjection.module = params.module
        equipmentProjection.hours = params.hours;
        equipmentProjection.minutes = params.minutes;
        equipmentProjection.seconds = params.seconds;
        equipmentProjection.coresDB = params.coresDB;
        equipmentProjection.numMemory = params.numMemory;
        equipmentProjection.memoryDB = params.memoryDB;
        equipmentProjection.datamart = params.datamart;
        equipmentProjection.history = params.history;
        equipmentProjection.temp = params.temp;
        equipmentProjection.logs = params.logs;
        equipmentProjection.total = params.total;
        equipmentProjection.coresServer = params.coresServer;
        equipmentProjection.memoryServer = params.memoryServer;
        equipmentProjection.coresAlert = params.coresAlert;
        equipmentProjection.memoryAlert = params.memoryAlert;

        equipmentProjection.save((err, saveCorrect) => {
            if(err){
                res.status(500).send({message: "Error al guardar"});
            }else{
                if(!saveCorrect){
                    res.status(404).send({message: 'No se puede guardar'});
                }else{
                    res.status(200).send({equipmentProjection: saveCorrect})
                }
            }
        })
    }
}

function listEquipmentProjection(req, res) {

    EquipmentProjection.find((err, found) => {
       if(err){
           res.status(200).send({message: 'Error al listar'});
       }else{
           if(!found){
               res.status(200).send({message: 'No se encontro nada'});
           }else{
               res.status(200).send(found)
           }
       }
    });
}

function searchEquipmentProjection(req, res) {
    var equipmentProjectionId = req.params.id;

    EquipmentProjection.find({ _id: equipmentProjectionId }, (err, equipmentProjection) => {
        if (err) {
            res.status(404).send({ message: 'No existe' });
        } else {
            res.status(200).send(equipmentProjection);
        }
    });
}

function updateEquipmentProjection(req, res) {
    var params = req.body;
    var equipmentProjectionId = req.params.id;

    EquipmentProjection.findByIdAndUpdate(equipmentProjectionId, params, { new: true }, (err, equipmentProjectionUpdate) => {
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

function deleteEquipmentProjection(req, res) {
    var equipmentProjectionId = req.params.id;

    SimpleTask.findByIdAndDelete(equipmentProjectionId, (err, equipmentProjectDelete) => {
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

module.exports = {
    saveEquipmentProjection,
    listEquipmentProjection,
    searchEquipmentProjection,
    updateEquipmentProjection,
    deleteEquipmentProjection
}