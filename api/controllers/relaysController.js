'use strict';

let mongoose = require('mongoose');
let Switch = mongoose.model('Switch');

exports.allSwitches = (req, res) => {
    Switch.find({}, (err, switch) => {
        if (err){
            res.send(err);
        } else {
            res.json(Switch);
        }
    });
};

exports.allSwitchsInPlace = (req, res) => {
    let placeId = req.params.placeId;
    Switch.find({"placeId": placeId}, (err, switch) => {
        if (err){
            res.send(err);
        } else {
            res.json(switch);
        }
    });
};

exports.createSwitch = (req, res) => {
    
    let newSwitch = new Switch(req.body);
    let switchName = req.body.name;
    
    newSwitch.save((err, switch) => {
        if (err) {
            res.send(err);
        } else {
            res.json(switch);
        }
    });
};

exports.getSwitch = (req, res) => {
    let switchId = req.params.switchId;
    Switch.findById(switchId, (err, switch) => {
        if(err){
            res.send(err);
        } else {
            res.json(switch);
        }
    });
};

exports.updateSwitch = (req, res) => {
    let id = req.params.id;
    res.send(`UpdateSwitch id:${id}`);
};
