'use strict';

const mongoose = require('mongoose');
const RelayActions = mongoose.model('RelayAction');

exports.allRelayActions = (req, res) => {
    RelayActions.find({}, (err, relayActions) => {
        if (err){
            res.send(err);
        } else {
            res.json(relayActions);
        }
    });
};

exports.updateRelayState = (req, res) => {
    let newRelayState = new RelayActions(req.body);

    RelayActions.findOne({"relayId": newRelayState.relayId}, (err, oldRelayState) => {
        if (err || !oldRelayState) {
            newRelayState.save((err, newRelayState) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log('New state created');
                    res.json(newRelayState);
                }
            });
        } else {
            if(oldRelayState.turnedOn !== newRelayState.turnedOn) {
                oldRelayState.turnedOn = newRelayState.turnedOn;
                oldRelayState.actionDate = newRelayState.actionDate;
                
                oldRelayState.save((err, oldRelayState) => {
                    if (err) {
                        console.log(err);
                    } else {
                        res.json(oldRelayState);
                        console.log('Old state updated');
                    }
                });
            } else {
                res.json(oldRelayState);
            }
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