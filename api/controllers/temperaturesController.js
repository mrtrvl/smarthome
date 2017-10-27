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

