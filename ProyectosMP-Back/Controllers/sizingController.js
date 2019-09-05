'use strict';

var EquipmentProjection = require('../models/equipmentProjection');

/************************************** EQUIPMENT PROJECTION *****************************************/
function saveEquipmentProjection(req, res){
    var equipmentProjection = new EquipmentProjection();
    var params = req.body;
    var num = [];
    var str = ''

    if(params.transacPeak && params.increase && params.o8PHI && params.trxsCore && params.trxsSeg && params.coresSrv && params.recordLength && params.percentageOccupation && params.onlineHistory && params.keys && params.multiplier){
        equipmentProjection.transacPeak = params.transacPeak;
        equipmentProjection.projecTrans = equipmentProjection.transacPeak+((params.transacPeak*params.increase)/100);
        equipmentProjection.avgTrans = (equipmentProjection.projecTrans*params.o8PHI)/100;
        equipmentProjection.transHour = equipmentProjection.projecTrans/10;
        equipmentProjection.transMinute = (equipmentProjection.transHour/45).toFixed();
        equipmentProjection.transSecond = (equipmentProjection.transMinute/45).toFixed();
        equipmentProjection.parallelTrans = (equipmentProjection.transSecond/params.trxsCore).toFixed();
        equipmentProjection.coresAnalysis = (equipmentProjection.transSecond/params.trxsSeg).toFixed(6);
        equipmentProjection.numberServers = (equipmentProjection.coresAnalysis/params.coresSrv).toFixed();
        equipmentProjection.recordsKey = equipmentProjection.projecTrans*params.multiplier;
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
        
        str = (equipmentProjection.transSecond/params.trxsCore)
        num = str.toString().split('.')
        console.log(num[0]/4)
        console.log(num[0]%4)
        if((num[0]%4)>0){
            str = num[0]/4
            num = str.toString().split('.')
            console.log()
        }else{
            console.log()
        }

        // equipmentProjection.save((err, saveCorrect) => {
        //     if(err){
        //         res.status(500).send({message: "Error al guardar"});
        //     }else{
        //         if(!saveCorrect){
        //             res.status(404).send({message: 'No se puede guardar'});
        //         }else{
        //             res.status(200).send({equipmentProjection: saveCorrect})
        //         }
        //     }
        // })
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
            res.status(404).send({ message: 'No se pudo listar' });
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