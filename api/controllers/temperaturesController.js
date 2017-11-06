'use strict';

let mongoose = require('mongoose');
let Temperature = mongoose.model('Temperature');

exports.allTemperatures = (req, res) => {
    Temperature.find({}, (err, temperature) => {
        if (err){
            res.send(err);
        } else {
            res.json(temperature);
        }
    });
};

exports.temperaturesFromSensor = (req, res) => {
    let sensorId = req.params.sensorId;
    let count = req.params.count;
    console.log(count);
    if (isNaN(count)) {
        count = 10;
    };
    Temperature.find({"sensorId": sensorId}, (err, temperature) => {
        if (err){
            res.send(err);
        } else {
            res.json(temperature);
        }
    }).limit(count);
};

exports.getLastTemperatureFromSensor = (req, res) => {
    let sensorId = req.params.sensorId;
    Temperature.find({"sensorId": sensorId}, (err, temperature) => {
        if (err){
            res.send(err);
        } else {
            res.json(temperature);
        }
    }).sort({_id:-1}).limit(1);
};

exports.createTemperature = (req, res) => {
    let newTemperature = new Temperature(req.body);
    
    newTemperature.save((err, temperature) => {
        if (err) {
            res.send(err);
        } else {
            res.json(temperature);
        }
    });
};

