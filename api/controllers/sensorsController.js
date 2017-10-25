'use strict';


exports.allSensors = (req, res) => {
    res.send('AllSensors');
};

exports.createSensor = (req, res) => {
    res.send('CreateSensor')
};

exports.getSensor = (req, res) => {
    let id = req.params.id;
    res.send(`GetSensor id:${id}`);
};

exports.updateSensor = (req, res) => {
    let id = req.params.id;
    res.send(`UpdateSensor id:${id}`);
};
