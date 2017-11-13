'use strict';

const mongoose = require('mongoose');
const Sensor = mongoose.model('Sensor');

exports.allSensors = (req, res) => {
    Sensor.find({}, (err, sensor) => {
        if (err){
            res.send(err);
        } else {
            res.json(sensor);
        }
    });
};

exports.allSensorsInPlace = (req, res) => {
    let placeId = req.params.placeId;
    Sensor.find({"placeId": placeId}, (err, sensor) => {
        if (err){
            res.send(err);
        } else {
            res.json(sensor);
        }
    });
};

exports.createSensor = (req, res) => {
    
    let newSensor = new Sensor(req.body);
    let sensorName = req.body.name;
    
    newSensor.save((err, sensor) => {
        if (err) {
            res.send(err);
        } else {
            res.json(sensor);
        }
    });
};

exports.getSensor = (req, res) => {
    let sensorId = req.params.sensorId;
    Sensor.findById(sensorId, (err, sensor) => {
        if(err){
            res.send(err);
        } else {
            res.json(sensor);
        }
    });
};

exports.updateSensor = (req, res) => {
    let id = req.params.id;
    res.send(`UpdateSensor id:${id}`);
};
