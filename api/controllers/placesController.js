'use strict';

let mongoose = require('mongoose');
let Place = mongoose.model('Place');

exports.allPlaces = (req, res) => {
    Place.find({}, (err, place) => {
        if (err){
            res.send(err);
        } else {
            res.json(place);
        }
    });
};

exports.createPlace = (req, res) => {

    let newPlace = new Place(req.body);
    let placeName = req.body.name;

    Place.findOne({"name" : placeName}, (err, place) => {
        if (err) {
            res.send(err);
        } else {
            if (!place){
                newPlace.save((err, place) => {
                    if (err) {
                        res.send(err);
                    } else {
                        res.json(place);
                    }
                });
            } else {
                res.send(`Place named "${placeName}" already exists`);
            }
        }
    });
};

exports.getPlace = (req, res) => {
    let placeId = req.params.placeId;
    Place.findById(placeId, (err, place) => {
        if(err){
            res.send(err);
        } else {
            res.json(place);
        }
    });
};

exports.updatePlace = (req, res) => {
    let placeId = req.params.placeId;
    Place.findById(placeId, (err, place) => {
        if(err){
            res.send(err);
        } else {
            place.name = req.body.name || place.name;
            place.description = req.body.description || place.description;

            place.save((err, place) => {
                if (err) {
                    res.send(err);
                } else {
                    res.json(place);
                }
            });
        }
    });
};
