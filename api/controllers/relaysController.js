'use strict';

let mongoose = require('mongoose');
let Relay = mongoose.model('Relay');

exports.allRelays = (req, res) => {
    Relay.find({}, (err, relay) => {
        if (err){
            res.send(err);
        } else {
            res.json(Relay);
        }
    });
};

exports.allRelaysInPlace = (req, res) => {
    let placeId = req.params.placeId;
    Relay.find({"placeId": placeId}, (err, relay) => {
        if (err){
            res.send(err);
        } else {
            res.json(relay);
        }
    });
};

exports.createRelay = (req, res) => {
    
    let newRelay = new Relay(req.body);
    let relayName = req.body.name;
    
    newRelay.save((err, relay) => {
        if (err) {
            res.send(err);
        } else {
            res.json(relay);
        }
    });
};

exports.getRelay = (req, res) => {
    let relayId = req.params.relayId;
    Relay.findById(relayId, (err, relay) => {
        if(err){
            res.send(err);
        } else {
            res.json(relay);
        }
    });
};

exports.updateRelay = (req, res) => {
    let id = req.params.id;
    res.send(`UpdateRelay id:${id}`);
};
